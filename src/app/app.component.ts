import { Component } from '@angular/core';

declare function ClickEvent(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finance';
   getName(){
    alert("this is not implemented yet!")
  }


}
