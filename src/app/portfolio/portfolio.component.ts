import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 IMAGE : string="../../assets/homework_1081007.png"
 projects : Array <any>=[
  {
    detail: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    detail: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    detail: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    detail: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    detail: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    detail: "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
 ]
}
