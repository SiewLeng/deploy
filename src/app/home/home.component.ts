import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public tabs: any = [
     {img: '../../assets/images/health-record-icon.png', title: 'COVID-19 RECORDS'},
     {img: '../../assets/images/health-record-icon.png', title: 'PERSONAL HEALTH'},
     {img: '../../assets/images/health-record-icon.png', title: 'APPOINTMENTS'},
     {img: '../../assets/images/health-record-icon.png', title: 'PAYMENTS'},
     {img: '../../assets/images/health-record-icon.png', title: 'MEDICATION REFILL'},
     {img: '../../assets/images/health-record-icon.png', title: 'ADMISSIONS'}
   ];

  constructor() { }

  ngOnInit() {
    console.log('Home page');
  }

  newAppointment() {
    console.log('Make new appointment');
  }

}
