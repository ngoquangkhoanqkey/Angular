import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public name = 'Khoa';
  public age = 17; 
  constructor(){}

  ngOnInit(): void {
  }

  public resetName(): void {
    this.name = '';
  }

  public disabled (){
    
  }


}
