import { Component, OnInit } from '@angular/core';
import { PasarFavoritoService } from 'src/app/Services/pasar-favorito.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public listaFavorito: Array<any> = [];

  constructor(private servicioPasarFavorito: PasarFavoritoService) { }

  ngOnInit(): void {
    this.servicioPasarFavorito.disparadorFavoritos.subscribe(data => {
      console.log(data);
      this.listaFavorito.push(data);
    });
  }

}
