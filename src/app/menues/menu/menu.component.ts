import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { MenuService } from '../shared/menuservice';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService, private tostr: ToastrService) { }

  ngOnInit() {

    this.resetForm();
  }

  onSubmit(menuForm: NgForm) {
    if (menuForm.value.$key == null)
      this.menuService.insertmenu(menuForm.value);
    else
      this.menuService.updatemenu(menuForm.value);
    this.resetForm(menuForm);
    this.tostr.success('Submitted Succcessfully', 'Menu Register');
  }

  resetForm(menuForm?: NgForm) {
    if (menuForm != null)
      menuForm.reset();
    this.menuService.selectedMenu = {
      $key: null,
      nombre: '',
      descripcion: '',
      precio: '',
      categoria: 0,

      
    }
  }

}
