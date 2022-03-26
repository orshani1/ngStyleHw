import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  behaviors:any = {
    color:'crimson',
    isSpecial:true,
  }
  myClasses:any = {};

  constructor() { 
    this.setMyClassValue();
  }

  ngOnInit(): void {
  }
  setMyClassValue(){
    this.myClasses = {
      myClass:true,
      secondClass:true,
    }
  }

}
