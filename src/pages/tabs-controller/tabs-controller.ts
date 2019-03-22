import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { FavoritoPage } from '../favorito/favorito';
import { AjustesPage } from '../ajustes/ajustes';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = FavoritoPage;
  tab3Root: any = AjustesPage;
  constructor(public navCtrl: NavController) {
  }
  
}
