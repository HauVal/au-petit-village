import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent, FilterByNamePipe, SortByPricePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products: any[] = [];
  searchTerm: string = '';
  sortBy: string = 'price';
  sortOrder: string = 'asc';

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
