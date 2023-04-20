import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parrent',
  templateUrl: './parrent.component.html',
  styleUrls: ['./parrent.component.scss']
})
export class ParrentComponent implements OnInit {
  public chatMessage = '';


  ngOnInit(): void {
  }

  public childCall (){
    this.chatMessage = 'Hello child'
  }

}
