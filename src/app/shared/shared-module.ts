import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Spinner } from './components/spinner/spinner';
import { Select } from './components/select/select';



@NgModule({
  declarations: [
    Header,
    Spinner,
    Select
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
