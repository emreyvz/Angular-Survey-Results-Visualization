import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { data } from './services/data.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { SurveyComponent } from './pages/survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:IndexComponent},
      {path:'survey/:id',component:SurveyComponent},
      {path:'**',component:IndexComponent}
    ]),
    AppRoutingModule
  ],
  providers: [data],
  bootstrap: [AppComponent]
})
export class AppModule { }
