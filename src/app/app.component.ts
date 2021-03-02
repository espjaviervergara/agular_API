import { Component, OnInit } from '@angular/core';
import { RestService } from './Services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public listCards: any = [];
  title = 'angular-api';
  next = 'https://rickandmortyapi.com/api/character';
  prev = '';

  constructor(private RestService: RestService){}

  ngOnInit(): void {
    this.cargarDatos();
  }

  public cargarDatos(): void{
    this.RestService.get(this.next)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.listCards = respuesta['results'].map( (personaje: any): any => personaje);

      this.next = respuesta['info']['next'];
      this.prev = respuesta['info']['prev'];

      console.log( 'Next = ' + this.next);
      console.log( 'Previous =' + this.prev);
    });
  }

  public regresarDatos(): void{
    this.RestService.get(this.prev)
    .subscribe(respuesta => {
      console.log(respuesta);
      this.listCards = respuesta['results'].map( function (personaje: any): any {
         return personaje;
      });

      this.next = respuesta['info']['next'];
      this.prev = respuesta['info']['prev'];

       console.log( 'Next = ' + this.next);
      console.log( 'Previous =' + this.prev); 
    });
  }
}
