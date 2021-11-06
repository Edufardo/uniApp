import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotoformComponent } from './components/photoform/photoform.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addPhoto/:site', component: PhotoformComponent }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
