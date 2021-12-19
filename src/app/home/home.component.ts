import { Component, OnInit } from '@angular/core';
import { AppointmentTabComponent } from './appointment-tab/appointment-tab.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public tabs: any = [
     {img: '../../assets/images/health-record.png', title: 'COVID-19 RECORDS'},
     {img: '../../assets/images/health-record.png', title: 'PERSONAL HEALTH'},
     {img: '../../assets/images/health-record.png', title: 'APPOINTMENTS'},
     {img: '../../assets/images/health-record.png', title: 'PAYMENTS'},
     {img: '../../assets/images/health-record.png', title: 'MEDICATION REFILL'},
     {img: '../../assets/images/health-record.png', title: 'ADMISSIONS'}
   ];
   public selectedTab: string = '';

  constructor() { }

  ngOnInit() {
    console.log('Home page');
  }

  newAppointment() {
    console.log('Make new appointment');
  }

  selectTab(tabTitle) {
    this.selectedTab = tabTitle;
  }

}
