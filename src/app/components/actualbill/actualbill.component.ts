import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  {position: 1, name: 'Hydrogen', quantity: 1, price: 60,rowTotal:0},
  {position: 2, name: 'Helium', quantity: 4.0, price: 60,rowTotal:0},
  {position: 3, name: 'Lithium', quantity: 6, price: 70,rowTotal:0},
];


@Component({
  selector: 'actualbill',
  templateUrl: './actualbill.component.html',
  styleUrls: ['./actualbill.component.css']
})
export class ActualbillComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'quantity', 'price','rowTotal'];
  dataSource = ELEMENT_DATA;
  @Output() finalPrice:EventEmitter<number> = new EventEmitter<number>();
  displayedData:MatTableDataSource<Item> = new MatTableDataSource(this.dataSource);
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
