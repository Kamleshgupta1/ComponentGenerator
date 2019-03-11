import { BoxshadowComponent } from './boxshadow/boxshadow.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradientComponent } from './gradient/gradient.component';
import { PaletteComponent } from './palette/palette.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {
    path: 'gradient',
    component: GradientComponent
  },
  {
    path: 'box-shadow',
    component: BoxshadowComponent
  },
  { path: '',
    redirectTo: 'gradient',
    pathMatch: 'full'
  },
  { path: 'palette',
    component: PaletteComponent
  },
  {
    path: 'model',
    component: ModelComponent
  },
  { path: '**', component: GradientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
