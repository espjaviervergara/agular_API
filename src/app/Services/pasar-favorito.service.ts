import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasarFavoritoService {
  @Output() disparadorFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
