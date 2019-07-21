import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-pet-one-UI';

  ngOnInit() {
    const link =  document.querySelector('link#stylesheet');
    link['href'] = 'assets/css/light.css';
  }
}
