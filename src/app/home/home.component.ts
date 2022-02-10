import { Component, OnInit, ViewChild } from '@angular/core';
import { AppointmentTabComponent } from './appointment-tab/appointment-tab.component';
import { LeftMenuComponent } from '../modals/left-menu/left-menu.component';

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
   public isModalOpen: boolean = false;

  constructor() { }

  @ViewChild('modal') modal: LeftMenuComponent;

  ngOnInit() {
    console.log('Home page');
    this.selectTab('APPOINTMENTS');
  }

  newAppointment() {
    console.log('Make new appointment');
  }

  selectTab(tabTitle) {
    this.selectedTab = tabTitle;
  }

  updateOpenModal(value: boolean) {
    this.isModalOpen = value;
    if (this.isModalOpen) {
      this.modal.open();
    } else {
      this.modal.close();
    }
  }

  updateIsModalOpenAndSelectedTab(value) {
    this.isModalOpen = value.isModalOpen;
    this.selectedTab = value.selectedTab;
    if (this.isModalOpen) {
      this.modal.open();
    } else {
      this.modal.close();
    }
  }

}
