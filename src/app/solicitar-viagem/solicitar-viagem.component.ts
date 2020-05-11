import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-solicitar-viagem',
  templateUrl: './solicitar-viagem.component.html',
  styleUrls: ['./solicitar-viagem.component.scss']
})
export class SolicitarViagemComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = -23.573997;
  lng = -46.623013;
  destino = 'busque e selecione um';
  @ViewChild("inputLocal") inputLocal: HTMLCollection;

  constructor() { }

  ngOnInit() {

    this.inputLocal = document.getElementsByClassName("mapboxgl-ctrl-geocoder--input");

    mapboxgl.accessToken = environment.mapbox;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 16,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    // Add geolocate control to the map.
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
      } else {
        this.destino = 'busque e selecione um';
      }
    }, false);

  }
}
