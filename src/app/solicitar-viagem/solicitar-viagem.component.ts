import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../environments/environment';
import { MatStepperModule, MatStepper } from '@angular/material/stepper';
import { ViagemService } from '../service/viagem.service';
import { ViagemModel } from '../model/viagem.model';

@Component({
  selector: 'app-solicitar-viagem',
  templateUrl: './solicitar-viagem.component.html',
  styleUrls: ['./solicitar-viagem.component.scss']
})
export class SolicitarViagemComponent implements AfterViewInit {

  public map: mapboxgl.Map;
  public style = 'mapbox://styles/mapbox/streets-v11';
  public lat = -23.573997;
  public lng = -46.623013;
  public destino = 'busque pela caixa de texto e use os ponteiros do teclado para definir';
  public temDestino = false;
  public isLinear = true;

  @ViewChild("inputLocal") inputLocal: HTMLCollection;
  @ViewChild('stepper') private myStepper: MatStepper;

  constructor(private serviceViagem: ViagemService) { }

  ngAfterViewInit() {

    this.inputLocal = document.getElementsByClassName("mapboxgl-ctrl-geocoder--input");

    mapboxgl.accessToken = environment.mapbox;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 16,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );

    this.map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );

    this.map.on('keypress', function (e) {
      console.log(JSON.stringify(e.point));
    });

    this.inputLocal.item(0).addEventListener('keydown', ($event: KeyboardEvent) => {
      if ($event.which == 13) {
        this.destino = (<HTMLTextAreaElement>$event.target).value;
        this.temDestino = true;
      } else {
        this.destino = 'busque pela caixa de texto e use os ponteiros do teclado para definir';
        this.temDestino = false;
      }
    }, false);
  }

  public solicitarCarro() {

    if (this.temDestino) {

      let viagem: ViagemModel = {
        adress: this.destino,
        idUser: 1
      }

      this.serviceViagem.consultarDisponibilidade(viagem).subscribe(result => {
        console.log(result);
      });

    }

  }

}
