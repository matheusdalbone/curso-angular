import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { NgModule } from '@angular/core';
import { EmiterComponent } from './components/emiter/emiter.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

export const routes: Routes = [
  {
    path: '', component: FirstComponentComponent
  },
  { 
    path: 'list', component: ListRenderComponent
  },
  {
    path: 'number', component: EmiterComponent
  },
  {
    path: 'list/:id', component: ItemDetailComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutes { };