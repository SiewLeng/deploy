import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deploy';

  constructor(
    private readonly meta: Meta
  ) {
    this.meta.addTag({ name: 'viewport', content: 'width=350px, initial-scale=1' });
  }
}
