import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  public tabs: any = [
    {img: '../../../assets/images/health-record.png', title: 'COVID-19 RECORDS'},
    {img: '../../../assets/images/health-record.png', title: 'PERSONAL HEALTH'},
    {img: '../../../assets/images/health-record.png', title: 'APPOINTMENTS'},
    {img: '../../../assets/images/health-record.png', title: 'PAYMENTS'},
    {img: '../../../assets/images/health-record.png', title: 'MEDICATION REFILL'},
    {img: '../../../assets/images/health-record.png', title: 'ADMISSIONS'}
   ];

  public selectedTab: string = '';

  constructor() { }

  @ViewChild('leftMenuModal', { static: false }) modal: ElementRef;

  ngOnInit() {
  }

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  selectTab(tabTitle) {
    this.selectedTab = tabTitle;
  }

}
