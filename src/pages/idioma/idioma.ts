import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjustesPage } from '../ajustes/ajustes';
import { TemaPage } from '../tema/tema';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { CopiaDeSeguridadPage } from '../copia-de-seguridad/copia-de-seguridad';
import { AcercaDePage } from '../acerca-de/acerca-de';

@Component({
  selector: 'page-idioma',
  templateUrl: 'idioma.html'
})
export class IdiomaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAjustes(params){
    if (!params) params = {};
    this.navCtrl.push(AjustesPage);
  }goToTema(params){
    if (!params) params = {};
    this.navCtrl.push(TemaPage);
  }goToIdioma(params){
    if (!params) params = {};
    this.navCtrl.push(IdiomaPage);
  }goToNotificaciones(params){
    if (!params) params = {};
    this.navCtrl.push(NotificacionesPage);
  }goToCopiaDeSeguridad(params){
    if (!params) params = {};
    this.navCtrl.push(CopiaDeSeguridadPage);
  }goToAcercaDe(params){
    if (!params) params = {};
    this.navCtrl.push(AcercaDePage);
  }
}
