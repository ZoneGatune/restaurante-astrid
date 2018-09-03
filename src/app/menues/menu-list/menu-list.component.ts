import { Component, OnInit } from '@angular/core';

import { MenuService } from '../shared/menuservice';
import { Menu } from '../shared/menu.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html'
})
export class MenuListComponent implements OnInit {
  menuList: Menu[];
  constructor(private menuService: MenuService, private tostr: ToastrService) { }

  ngOnInit() {
    var x = this.menuService.getData();
    x.snapshotChanges().subscribe(item => {
      this.menuList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.menuList.push(y as Menu);
      });
    });
  }

  onEdit(emp: Menu) {
    this.menuService.selectedMenu = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.menuService.deletemenu(key);
      this.tostr.warning("Deleted Successfully", "Employee register");
    }
  }

}
