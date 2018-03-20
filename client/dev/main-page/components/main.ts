import {
  Component,
  OnInit
} from "@angular/core";

@Component({
  selector: "main",
  templateUrl: "main-page/templates/main.html",
  styleUrls: ["main-page/styles/main.css"]
})
export class Main implements OnInit {
  name: string = `yo, I"m your component :D`;

  constructor() {

  }

  ngOnInit() {
    console.log("THIS IS MY MAIN PAGE!!");
  }
}
