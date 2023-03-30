import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './components/form-data/form-data.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  { path: "form", pathMatch:'full', component: FormDataComponent },
  { path: "todo", pathMatch:'full', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
