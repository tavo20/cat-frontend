import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedListComponent } from './pages/breed-list/breed-list.component';

const routes: Routes = [
  {
    path: '',
    component: BreedListComponent,
  },
  {
    path: 'breeds-cat',
    component: BreedListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatBreedsRoutingModule { }
