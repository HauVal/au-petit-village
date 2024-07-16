import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, SearchBarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

  title = "Au Petit Village"

  products: any[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.products;
  }
}
