import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/cat-breeds/cat-breeds.module').then(m => m.CatBreedsModule)
    },
];
