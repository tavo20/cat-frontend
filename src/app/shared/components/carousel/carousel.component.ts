import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { CatBreed } from '../../../core/models/CarBreed';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  currentIndex: number = 0;
  @Input() cats: CatBreed[] = [];


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['cats']) {
      this.currentIndex = 0;
      this.updateTransform();
    }
  } 

  nextCat(): void {
    if(this.cats.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.cats.length;
    console.log(this.currentIndex);
    this.updateTransform();
  }

  prevCat(): void {
    console.log('prevCat')
    if(this.cats.length === 0) return;

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
