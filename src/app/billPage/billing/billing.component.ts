import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActualbillComponent } from 'src/app/components/actualbill/actualbill.component';


@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{

  @ViewChild('bill') bill:ElementRef | undefined;
  @ViewChild('actualbill') actualbill!: ActualbillComponent;
  finalSum:number = 0;
  businessName:string = "IRCTC";

  ngOnInit(): void {
  }


  constructor(private elementRef: ElementRef) {}

  printpage():void {
    window.print();
  }

  handleFinalPrice(price:number):void{
    this.finalSum = price;
  }
 
}
