import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Spinner } from './components/spinner/spinner';
import { Select } from './components/select/select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Header, Spinner, Select],
  imports: [CommonModule, NgxSpinnerModule, FormsModule, RouterModule],
  exports: [Header, Spinner, Select],
})
export class SharedModule {}
