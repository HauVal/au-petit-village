import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    ProductComponent,
    SearchBarComponent,
    CommonModule,
    SortByPricePipe,
    FilterByNamePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Au Petit Village';

  products: any[] = [];
  searchTerm: string = '';
  sortBy: string = 'price';
  sortOrder: string = 'none';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.products;
  }

  onSearchTermChanged(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  onSortOrderChanged(order: string): void {
    this.sortOrder = order;
  }
}
