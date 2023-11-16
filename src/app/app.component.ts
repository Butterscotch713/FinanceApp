import { Component } from '@angular/core';
import { Router} from "@angular/router";

declare function ClickEvent(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finance';
  constructor(private router: Router) {
  }
   notImplemented(){
    alert("this is not implemented yet!");
  }
  closeMe() {
    alert("We're sad to see you go");
    window.close()

  }

  goToLogin():void{
    this.router.navigate(['login/login.component.html'])
  }





}
