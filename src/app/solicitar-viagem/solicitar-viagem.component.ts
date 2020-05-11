import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {

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
  }

}
