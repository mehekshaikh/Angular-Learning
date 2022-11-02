import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component ({
  selector: 'app-test',
  template: `
  <h2>{{ name }}</h2>
  <!-- This " | " is pipe character -->
  <h2>{{ name | lowercase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ message | titlecase }}</h2>
  <h2>{{ name | uppercase }}</h2>
  <h2>{{ name | slice:3:5}}</h2>
<h2>{{person | json}}</h2>
<!--Number pipe -->
<h2>{{5.678 | number:'1.2-3'}}</h2>
<h2>{{5.678 | number: '3.4-5'}}</h2>
<h2>{{5.678 | number: '3.1-2'}}</h2>
  
<!-- Percentage pipe -->
<h2>{{ 0.25 | percent}}</h2>

<!-- Currency Pipe-->
<h2>{{ 0.25 | currency}}</h2>
  ` ,
  styles: []
  
})
export class TestComponent implements OnInit {

public name = "Mehek Code World";
public message = "Welcome Champion";
public person = {
  "firstName": "John",
  "lastName": "Doe"
}

constructor() { }

  ngOnInit(): void {
      
  }

  

}
