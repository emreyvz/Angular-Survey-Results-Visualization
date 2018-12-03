import { Component, OnInit } from '@angular/core';
import { data } from "./../../services/data.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  counter:number=0;
  allSurveys:{SurveyId:number,SurveyTitle:string}[] = [];
  constructor(private dataService:data) {
  }



  ngOnInit(){

   
    this.dataService.getSurveys().subscribe(res=>{

      

      while(res[this.counter]){
        let object:any = res[this.counter];
        let data = {
          "SurveyId": Number(object.surveyId),
          "SurveyTitle": String(object.SurveyTitle),
        };
        this.allSurveys.push(data);
        this.counter++;
      }
   
    });


  }

  
}
