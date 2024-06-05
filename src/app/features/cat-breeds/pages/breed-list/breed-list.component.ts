import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-breed-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarouselComponent],
  templateUrl: './breed-list.component.html',
  styleUrl: './breed-list.component.scss'
})
export class BreedListComponent {
  public onSelectChange(event: any): void {
    console.log(event);
    console.log('Selected value: ', event.target.value)
  }
}
