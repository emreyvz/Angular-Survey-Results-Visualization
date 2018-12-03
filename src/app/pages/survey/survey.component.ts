import { Component, OnInit } from '@angular/core';
import { data } from './../../services/data.service';
import { Chart } from 'chart.js';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  lineChart:any[]=[];
  colors:string[];
  counter:number=0;
  id:number=0;
  type:string="pie";
  counter1:number=0; 
  surveyTitle:string;
  allQuestions:{questionId:string,question:string}[] = [];
  constructor(private DataService:data,private route:ActivatedRoute){
       this.colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
  }

  ngOnInit() {

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.lineChart=[];
    this.type = "bar";
    this.DataService.getSurveys().subscribe(res=>{
      
      while(res[this.counter]){
        if(res[this.counter].surveyId!=this.id){
          this.counter++;
          continue;
        }else{
          this.surveyTitle=res[this.counter].SurveyTitle;
        }

        this.counter1=0;
        while(res[this.counter]["results"][this.counter1]){

          let object:any[] = res[this.counter]["results"];

          let data = {
            "questionId": String(res[this.counter]["results"][this.counter1].questionId),
            "question": String(res[this.counter]["results"][this.counter1].question)
          };
         this.allQuestions.push(data);
          this.lineChart.push( new Chart(String(object[this.counter1].questionId), {
            type: "pie",
          data: {
            labels: object[this.counter1].Options,
            datasets: [
              {
                backgroundColor: this.colors,
                data: object[this.counter1].ChoiceCounter
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: String(object[this.counter1].question)
            }
          }
      }));
      this.counter1++;
    }

     
      this.counter++;
      }

    })


  }

}
