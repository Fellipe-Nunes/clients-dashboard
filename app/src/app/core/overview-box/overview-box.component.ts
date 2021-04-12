import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'core-overview-box',
  templateUrl: './overview-box.component.html',
  styleUrls: ['./overview-box.component.scss']
})
export class OverviewBoxComponent{

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() value: any;
  @Input() template: '1'|'2'|'3' = '1';

}
