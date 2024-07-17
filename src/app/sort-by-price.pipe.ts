import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], sortByPrice: string, sortOrder: string): any[] {
    if (!products || !sortByPrice || sortByPrice === 'none') {
      return products;
    }

    return products.sort((a, b) => {
      const aValue = a[sortByPrice];
      const bValue = b[sortByPrice];

      if (aValue < bValue) {
        return sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
