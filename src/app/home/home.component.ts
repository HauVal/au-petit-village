import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Au Petit Village';
  about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies gravida orci ut iaculis. Vivamus et ullamcorper dui. Curabitur nec egestas lorem, vel vehicula nisi. Phasellus nec tellus sit amet risus hendrerit volutpat. Donec non nisi sit amet justo convallis luctus vel vel magna. Etiam lorem sem, lacinia quis dictum vel, dictum quis odio. Curabitur ut felis eget lectus commodo pharetra ac eget tellus. Sed non sagittis mi. Donec sed lectus ac velit bibendum elementum et eget mi. Vivamus vehicula mauris sed diam ornare, ac pulvinar nulla sollicitudin. Maecenas eget mi mollis, accumsan mi ut, tempor felis."


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
