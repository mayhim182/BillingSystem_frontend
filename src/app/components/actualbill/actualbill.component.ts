import { Component, OnInit } from '@angular/core';

export interface Item {
  name: string;
  position: number;
  quantity: number;
  price: number;
}

const ELEMENT_DATA: Item[] = [
  {position: 1, name: 'Hydrogen', quantity: 1.0079, price: 60},
  {position: 2, name: 'Helium', quantity: 4.0026, price: 60},
  {position: 3, name: 'Lithium', quantity: 6.941, price: 70},
];


@Component({
  selector: 'actualbill',
  templateUrl: './actualbill.component.html',
  styleUrls: ['./actualbill.component.css']
})
export class ActualbillComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'quantity', 'price'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
      
  }
}
