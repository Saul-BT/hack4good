import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TemaPage } from '../tema/tema';
import { IdiomaPage } from '../idioma/idioma';
import { PreferenciasPage } from '../preferencias/preferencias';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { CopiaDeSeguridadPage } from '../copia-de-seguridad/copia-de-seguridad';
import { AcercaDePage } from '../acerca-de/acerca-de';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html'
})
export class AjustesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToTema(params){
    if (!params) params = {};
    this.navCtrl.push(TemaPage);
  }goToAjustes(params){
    if (!params) params = {};
    this.navCtrl.push(AjustesPage);
  }goToIdioma(params){
    if (!params) params = {};
    this.navCtrl.push(IdiomaPage);
  }goToPreferencias(params){
    if (!params) params = {};
    this.navCtrl.push(PreferenciasPage);
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
