import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{

  businessName:string = "IRCTC";

  ngOnInit(): void {
      
  }

  printpage():void {
    window.print();
  }
 
}
