import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Kamila", "Kaluza", "jp2137@kremowka.com", 69),
    new SalesPerson("Stas", "Michalski", "Stas@kremowka.com", 369),
    new SalesPerson("Trygor", "Luz", "Trygor@kremowka.com", 692),
    new SalesPerson("as","rt","243@withPreloading.pl",34)
  ];

  constructor(){}

  ngOnInit(){} 

}