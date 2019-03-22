import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { FavoritoPage } from '../pages/favorito/favorito';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { TemaPage } from '../pages/tema/tema';
import { IdiomaPage } from '../pages/idioma/idioma';
import { CopiaDeSeguridadPage } from '../pages/copia-de-seguridad/copia-de-seguridad';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    FavoritoPage,
    AjustesPage,
    TabsControllerPage,
    NotificacionesPage,
    TemaPage,
    IdiomaPage,
    CopiaDeSeguridadPage,
    AcercaDePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    FavoritoPage,
    AjustesPage,
    TabsControllerPage,
    NotificacionesPage,
    TemaPage,
    IdiomaPage,
    CopiaDeSeguridadPage,
    AcercaDePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}