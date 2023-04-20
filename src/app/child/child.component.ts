import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() name: string = '';
  @Output() childCall: EventEmitter<any> = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  public callParrent(){
      console.log('callParrent');
      this.childCall.emit();
      
  }
}
