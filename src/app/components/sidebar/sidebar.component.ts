import { Component, Input, OnInit } from '@angular/core';
import { PasarFavoritoService } from 'src/app/Services/pasar-favorito.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() datosCard: any;
  public img: string;

  constructor(private servicioPasarFavorito: PasarFavoritoService) { }

  ngOnInit(): void {
    this.img = this.datosCard.image;
    //console.log('DAtos pasado por datosCard del padre ', this.datosCard);
   }

  addFavoritos(): void{
    //console.log(this.datosCard);
    this.servicioPasarFavorito.disparadorFavoritos.emit(this.datosCard);
  }

}
