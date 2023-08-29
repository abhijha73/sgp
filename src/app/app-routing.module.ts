import { AuthGuard } from './shared/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EmailModule } from './email/email.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',  
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'email',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./email/email.module').then((m) => m.EmailModule),
    data: { preload: true },
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
