import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

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
  public logout: boolean = false;
  @Input() selectedTabFromHome: string;
  @Output() updateIsModalOpenAndSelectedTabEvent = new EventEmitter<any>();

  constructor() { }

  @ViewChild('leftMenuModal') modal: ElementRef;

  ngOnInit() {
    this.selectedTab = this.selectedTabFromHome;
  }

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }

  selectTab(tabTitle) {
    this.selectedTab = tabTitle;
    this.logout = false;
    this.updateIsModalOpenAndSelectedTabEvent.emit({ isModalOpen: false, selectedTab: this.selectedTab });
  }

  clickLogout() {
    this.logout = true;
    this.selectedTab = '';
    this.updateIsModalOpenAndSelectedTabEvent.emit({ isModalOpen: false, selectedTab: this.selectedTab });
  }

}
