import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.products;
  }
}
