import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};
  id: number = 13;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProductById(this.id).subscribe((response) => {
      this.product = response;
    });
  }

}
