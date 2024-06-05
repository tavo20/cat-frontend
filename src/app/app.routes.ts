import { Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/cat-breeds/cat-breeds.module').then(m => m.CatBreedsModule),
        canActivate: [authGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
    }
];
