import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[]=['SpiderMan','IronMan','Hulk','Thor','capitan America'];
  heroeBorrado:string='';
  
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift()||'';

  }

  
  
}
