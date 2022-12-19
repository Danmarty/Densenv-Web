import { Component, OnInit } from '@angular/core';
import { ResponseLivros } from './livro.model';
import { LivroService } from './livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

    responseLivros!: ResponseLivros 
  
    constructor(private livroService: LivroService){}
  
    ngOnInit() {
      this.livroService.getLivros()
      .subscribe(res => this.responseLivros = res)
    }

}
