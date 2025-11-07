import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { AppRoutingModule } from '../app-routing-module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Select } from './components/select/select';
import { FormsModule } from '@angular/forms';
import { Spinner } from './components/spinner/spinner';

@NgModule({
  declarations: [Header, Select, Spinner],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [Header, Select, Spinner],
})
export class SharedModule {}
