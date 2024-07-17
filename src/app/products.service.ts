import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {id: 1, name: "Astérix", price: 10, description: "Figurine de Astérix", imageUrl: "asterix.jpg"},
    {id: 2, name: "Obélix", price: 8, description: "Figurine de Obélix", imageUrl: "obelix.jpg"},
    {id: 3, name: "Idéfix", price: 5, description: "Figurine de Idefix", imageUrl: "idefix.avif"},
    {id: 4, name: "Panoramix", price: 11, description: "Figurine de Panoramix", imageUrl: "panoramix.jpg"},
    {id: 5, name: "Assurancetourix", price: 5, description: "Figurine de Assurancetourix", imageUrl: "assurancetourix.jpg"},
    {id: 6, name: "Abraracourcix", price: 9, description: "Figurine de Abraracourcix", imageUrl: "abraracourcix.jpeg"}
  ]
  constructor() { }
}
