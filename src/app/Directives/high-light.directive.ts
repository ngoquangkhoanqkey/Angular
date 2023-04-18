import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = 'blue';

  constructor(private el:ElementRef) {

  }

  public ngOnInit(): void {
    this.el.nativeElement.style.color = this.appHighLight;
  }

}
