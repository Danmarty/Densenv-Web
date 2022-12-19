import { LivroService } from './../livro.service';
import { RequestCreate, ResponseCreate } from './../livro.model';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  request: RequestCreate ={
    nome: '',
    categoria: ''
  }
  response!: ResponseCreate;

  constructor(private LivroService: LivroService){}

  ngOnInit(){}

  save(){
    this.LivroService.createUser(this.request).subscribe(res =>{
    this.response = res;
  });
  }

}
