import { Component, OnInit } from '@angular/core';

import { MenuService} from './shared/menuservice'
@Component({
  selector: 'app-menues',
  templateUrl: './menues.component.html',
  providers :[MenuService]
})
export class MenuesComponent implements OnInit {

  constructor(private menuService : MenuService) { }

  ngOnInit() {
  }

}
