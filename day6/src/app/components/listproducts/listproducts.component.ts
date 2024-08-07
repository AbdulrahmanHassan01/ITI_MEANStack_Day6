import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from './IProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listproducts',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './listproducts.component.html',
  styleUrl: './listproducts.component.css'
})
export class ListproductsComponent implements OnInit {
  allProducts: IProduct[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((response) => {
      this.allProducts = response;
    });
  }

}