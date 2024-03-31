import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActualbillComponent } from 'src/app/components/actualbill/actualbill.component';
import { BillingServiceService } from 'src/app/service/billing-service.service';


@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  @ViewChild('bill') bill: ElementRef | undefined;
  @ViewChild('billcontainer') billcontainer: ElementRef | undefined;
  @ViewChild(ActualbillComponent) actualbill!: ActualbillComponent;
  finalSum: number = 0;
  businessName: string = "IRCTC";
  customerName: string = '';

  constructor(private elementRef: ElementRef, private billing_service: BillingServiceService) { }

  ngOnInit(): void {
  }

  printpage(): void {
    window.print();
  }


  /*Notes: to be enhanced and include css
            and also display data currently not in use
  */
  
  print_alternate_approach(){
    const printContent = document.getElementById('billing_component');
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    if (printContent) {
      WindowPrt?.document.write(printContent?.innerHTML);
      WindowPrt?.document.write('<link rel="stylesheet" type="text/css" href="billing.component.css">');
      WindowPrt?.document.close();
      WindowPrt?.focus();
      WindowPrt?.print();
      WindowPrt?.close();
    }
  }

  handleFinalPrice(price: number): void {
    this.finalSum = price;
  }

  addRowParent(): void {
    this.actualbill.addRow();
  }
  clearAllRowParent(): void {
    this.actualbill.clearAll();
  }

  savebillto_db(): void {
    let payLoad:any = {
      customerName:this.customerName,
      itemLists:this.actualbill?.dataSource,
      finalPrice:this.finalSum,
      date:new Date(),
    }
    let url: string = 'http://localhost:8080/invoices/saveInvoice';
    this.billing_service.post(url, payLoad).subscribe((result) => {
      console.log(result);
    })
  }

}
