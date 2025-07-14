 import { Component } from '@angular/core';

@Component({
  selector: 'app-com2',
  imports: [],
  templateUrl: './com2.component.html',
  styleUrl: './com2.component.css'
})
export class Com2Component {
  SpinnerStoper:boolean=false;
  
  hide(){
    this.SpinnerStoper=false;
  }
  show(){
    this.SpinnerStoper=true
  }

}
