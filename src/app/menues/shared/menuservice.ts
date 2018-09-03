import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Menu} from './menu.model';
@Injectable()
export class MenuService {
  menuList: AngularFireList<any>;
  selectedMenu: Menu = new Menu();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.menuList = this.firebase.list('menues');
    return this.menuList;
  }

  insertmenu(menu : Menu)
  {
    this.menuList.push({
      nombre: menu.nombre,
      descripcion: menu.descripcion,
      precio: menu.precio,
      categoria: menu.categoria
    });
  }

  updatemenu(menu : Menu){
    this.menuList.update(menu.$key,
      {
        nombre: menu.nombre,
        descripcion: menu.descripcion,
        precio: menu.precio,
        categoria: menu.categoria
      });
  }

  deletemenu($key : string){
    this.menuList.remove($key);
  }

}
