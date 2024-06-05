import { Component, Input, SimpleChanges } from '@angular/core';
import { CatBreed } from '../../../../core/models/CarBreed';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-cat-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-cat-detail.component.html',
  styleUrl: './table-cat-detail.component.scss'
})
export class TableCatDetailComponent {
  @Input() breeds!: CatBreed[];
  filteredCats: CatBreed[] = [];

  searchQuery: string = ''

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['breeds']) {
      this.filteredCats = this.breeds;
    }
  
  }


  ngOnInit(): void {
    console.log('this.breeds', this.breeds)
    this.filteredCats = this.breeds;
  }


  onImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = 'assets/images/no-image.png'; // Reemplaza con la ruta de tu imagen de respaldo
  }

  filterCats() {
  console.log('filterCats')
    const query = this.searchQuery.toLowerCase();
    console.log('query', query)
    this.filteredCats = this.breeds.filter(cat => {
      const matchesName = cat.name.toLowerCase().includes(query);
      const matchesOrigin = cat.origin.toLowerCase().includes(query);
      return matchesName || matchesOrigin;
    });
  }
}
