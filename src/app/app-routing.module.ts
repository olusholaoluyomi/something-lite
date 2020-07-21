import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { NewlistComponent } from './pages/newlist/newlist.component';

const routes: Routes = [
  { path: '', component: TaskviewComponent },
  { path: 'newlist', component: NewlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
