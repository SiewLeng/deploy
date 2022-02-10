import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-tab',
  templateUrl: './appointment-tab.component.html',
  styleUrls: ['./appointment-tab.component.css']
})
export class AppointmentTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newAppointment() {
    console.log('Make new Appointment');
  }

}
