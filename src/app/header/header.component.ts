import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isModalOpen: boolean;
  @Output() toggleOpenModalEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  clickLeftMenuIcon() {
    this.isModalOpen = !this.isModalOpen;
    this.toggleOpenModalEvent.emit(this.isModalOpen);
  }

}
