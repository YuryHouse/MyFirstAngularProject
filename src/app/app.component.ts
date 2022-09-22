import {Component} from '@angular/core'

interface IUser {
  age: number
  name: string
}

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appTitle = 'Instagram'
  text='start value'

  changeTitleHandler() {
    this.appTitle = 'IT-incubator'
  }

}
