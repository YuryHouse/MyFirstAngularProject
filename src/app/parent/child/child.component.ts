import {Component} from '@angular/core'

export interface Grade {
  math: number
  physic: number
}

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {}
