import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class data{
    constructor(private DataService:HttpClient){
    }
    getSurveys(){
        return this.DataService.get("https://emreyavuz.info/api.php?secenek=survey").map(a=>a);
    }
}