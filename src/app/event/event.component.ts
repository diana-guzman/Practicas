import { Component, OnInit } from '@angular/core';
import { convertInjectableProviderToFactory } from '@angular/core/src/di/injectable';
import { parse } from 'url';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  variable: number;

  constructor() {

  }

  ngOnInit() {
  }
  llamado() {
    this.variable = 1;
    
  }

}
