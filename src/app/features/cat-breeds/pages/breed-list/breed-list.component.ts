import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CarouselComponent } from '../../../../shared/components/carousel/carousel.component';
// import { HttpClientModule } from '@angular/common/http';
import { CatBreedService } from '../../../../core/services/cat-breed.service';
import { CatBreed } from '../../../../core/models/CarBreed';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { TableCatDetailComponent } from '../../components/table-cat-detail/table-cat-detail.component';

@Component({
  selector: 'app-breed-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CarouselComponent, CommonModule, TableCatDetailComponent],
  templateUrl: './breed-list.component.html',
  styleUrl: './breed-list.component.scss',
  providers: []
})
export class BreedListComponent {
  constructor(private catBreedService: CatBreedService) { }
  public breeds: CatBreed[] = [];
  public cats: CatBreed[] = [];

  ngOnInit() {
    this.getBreeds();
  }

  async getBreeds() {
    const respon = await lastValueFrom(this.catBreedService.getCatBreeds())
    if (!respon) {
      return
    }
    this.breeds = respon;
    console.log(this.breeds)
  }


  public onSelectChange(event: any): void {

    const value = event.target.value;

    if (!value) {
      return
    }

    const breed = this.breeds.find((breed: CatBreed, index: number) => {
     return breed.id === value
    });

    this.getImagesByBreedId(breed as CatBreed);
  }

  public getImagesByBreedId(breed: CatBreed): void {
    // this.catBreedService.getImagesByBreedId(breed.id).subscribe((res: any) => {
    //   console.log(res);
    //   this.cats = res;
    // });

    // mutar array de gatos
    const newCats =  [
      breed,
      {
        id: '1',
        name: 'British Shorthair',
        description: `The British Shorthair is a very pleasant cat to have as a companion, ans is easy going and placid. The British is a fiercely loyal, loving cat and will attach herself to every one of her family members. While loving to play, she doesn't need hourly attention. If she is in the mood to play, she will find someone and bring a toy to that person. The British also plays well by herself, and thus is a good companion for single people.`,
        origin: 'Scotland',
        child_friendly: 1,
        image: { url: 'https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg' }
      },
      breed
    ]

    this.cats =[];
    this.cats =[ ...newCats];
  }
}
