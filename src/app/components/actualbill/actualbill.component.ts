import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { elementAt } from 'rxjs';

export interface Item {
  name: string;
  position: number;
  quantity: number;
  price: number;
  rowTotal:number;
}

const ELEMENT_DATA: Item[] = [
];


@Component({
  selector: 'actualbill',
  templateUrl: './actualbill.component.html',
  styleUrls: ['./actualbill.component.css']
})
export class ActualbillComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'quantity', 'price','rowTotal'];
  dataSource = ELEMENT_DATA;
  actual_bill_form:FormGroup;
  @Output() finalPrice:EventEmitter<number> = new EventEmitter<number>();
  displayedData:MatTableDataSource<Item> = new MatTableDataSource(this.dataSource);

  constructor(private fb:FormBuilder) {
    this.actual_bill_form = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      price:['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]]
    });
  }

  ngOnInit(): void {
    if(this.dataSource.length>0){
      this.dataSource.forEach(element => {
        this.rowTotal(element);
      });
      this.onpriceChange();
    }
  }

  onpriceChange():void {
    let localfinalPrice = 0;
    this.dataSource.forEach(element=>{
      localfinalPrice += element.rowTotal;
    });
    this.finalPrice.emit(localfinalPrice);
  }

  rowTotal(element:any):void {
    element.rowTotal = element.quantity * element.price;
  }

  addRow():void {
    if(this.dataSource.length == 0 ){
      this.dataSource.push( {position: 1, name: '', quantity: 0, price: 0,rowTotal:0});
      return ;
    }
    let currpos = this.dataSource[this.dataSource.length-1]?.position;
    let newRow:Item = {position: currpos+1, name: '', quantity: 0, price: 0,rowTotal:0}
    this.dataSource.push(newRow);
    this.displayedData = new MatTableDataSource(this.dataSource);
    this.displayedData._updateChangeSubscription();
  }
}
