import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
    lineChart: any;
    @ViewChild('barCanvas') barCanvas;
    barChart: any;

    constructor(public navCtrl: NavController) {
 
    }

    ionViewDidLoad() {
 
      this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
              labels: ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"],
              datasets: [{
                  label: 'Minutos ganados',
                  data: [200, 50, 30, 15, 20, 34, 50],
                  backgroundColor: [
                      'rgba(99, 180, 255, 0.2)',
                      'rgba(99, 180, 255, 0.2)',
                      'rgba(99, 180, 255, 0.2)',
                      'rgba(99, 180, 255, 0.2)',
                      'rgba(99, 180, 255, 0.2)',
                      'rgba(99, 180, 255, 0.2)',
                      'rgba(99, 180, 255, 0.2)'
                  ],
                  borderColor: [
                    'rgba(99, 180, 255, 1)',
                    'rgba(99, 180, 255, 1)',
                    'rgba(99, 180, 255, 1)',
                    'rgba(99, 180, 255, 1)',
                    'rgba(99, 180, 255, 1)',
                    'rgba(99, 180, 255, 1)',
                    'rgba(99, 180, 255, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

      });
    }
  }
