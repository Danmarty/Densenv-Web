
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LivrosComponent } from './livros/livros.component';
import { CreateUserComponent } from './livros/create-user/create-user.component';
import { UpdateComponent } from './livros/update/update.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent },
  {path: 'livros', component: LivrosComponent},
  {path: 'livros/create', component: CreateUserComponent},
  {path: 'livros/update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }