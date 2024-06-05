import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  currentIndex: number = 0;

  cats = [
    {
      image: 'https://cdn2.thecatapi.com/images/NwMUoJYmT.jpg',
      name: 'Gato 1',
      description: 'Este es el gato 1. Es muy amigable y juguetón.',
      origin: 'España'
    },
    {
      image: 'https://cdn2.thecatapi.com/images/udZiLDG_E.jpg',
      name: 'Gato 2',
      description: 'Este es el gato 2. Le encanta dormir todo el día.',
      origin: 'Francia'
    },
    {
      image: 'https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg',
      name: 'Gato 3',
      description: 'Este es el gato 3. Es un gran cazador.',
      origin: 'Italia'
    }
  ];

  nextCat(): void {
    this.currentIndex = (this.currentIndex + 1) % this.cats.length;
    console.log(this.currentIndex);
    this.updateTransform();
  }

  prevCat(): void {
    this.currentIndex = (this.currentIndex - 1 + this.cats.length) % this.cats.length;
    console.log(this.currentIndex);
    this.updateTransform();
  }

  updateTransform(): void {
    const container = document.querySelector('.carousel-container') as HTMLElement;
    const offset = -this.currentIndex * 100;
    container.style.transform = `translateX(${offset}%)`;
  }

}
