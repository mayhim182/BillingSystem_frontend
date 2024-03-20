import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActualbillComponent } from 'src/app/components/actualbill/actualbill.component';


@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{

  @ViewChild('bill') bill:ElementRef | undefined;
  @ViewChild(ActualbillComponent) actualbill!: ActualbillComponent;
  finalSum:number = 0;
  businessName:string = "IRCTC";

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  printpage():void {
    window.print();
  }

  handleFinalPrice(price:number):void{
    this.finalSum = price;
  }

  addRowParent():void {
    this.actualbill.addRow();
  }
 
}
