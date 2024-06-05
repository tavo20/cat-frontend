import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatBreedsRoutingModule } from './cat-breeds-routing.module';
import { BreedListComponent } from './pages/breed-list/breed-list.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CatBreedsRoutingModule
  ]
})
export class CatBreedsModule { }
