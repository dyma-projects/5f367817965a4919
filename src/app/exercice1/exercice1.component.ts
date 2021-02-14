import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  constructor() { }
  public compteur: number = 0;
  public isDisabled: boolean = false;

  ngOnInit(): void {
  }

  public buttonClick() {
    this.compteur ++;
  }

  public toggleButton(){
    this.isDisabled = !this.isDisabled;
  }

}
