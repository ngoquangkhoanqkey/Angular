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

  public feshfood = ['Tao','Cam'];
  public feshfood2 = [{name: 'Tao', gia:12, sale: true}, {name: 'Cam', gia:10, sale:false},{name: 'Quyt', gia:-3200, sale:true},{name: 'Thom', gia:3000, sale:false}];


  constructor(){}

  public ngOnInit(): void {
  }

}
