import { CustomLibModule } from 'custom-lib';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NameTransformDirective } from './name-transform.directive';
import { FromNowPipe } from './pipes/from-now.pipe';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoginComponent,
    NameTransformDirective,
    FromNowPipe,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CustomLibModule,
  ],
  exports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    MatIconModule,
    FromNowPipe,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class SharedModule {}
