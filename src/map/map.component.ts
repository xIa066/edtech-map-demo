import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone:true,
})
export class MapComponent implements OnInit {

  companies: Company[] = [
    { name: "Company A", location: [144.9631, -37.8136], description: "Investor A" },
    { name: "Company B", location: [151.2093, -33.8688], description: "Investor B" },
    { name: "Company C", location: [103.8198, 1.3521], description: "Investor C" },
    { name: "Company D", location: [2.3522, 48.8566], description: "Investor D" },
    { name: "Company E", location: [-0.1276, 51.5074], description: "Investor E" }
  ];
  
  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoieGlhbzY2bGl1IiwiYSI6ImNtOHUybXZhcTBnZzUyanB5bjZqZWhkNjIifQ.md_PoxCMxy9Jx93D_Myfgg';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [144.9631, -37.8136], // Melbourne coordinates
      zoom: 2, // Sphere-like zoom level
      projection: { name: 'globe' } // Enable 3D globe view
    });

    // Example Marker
    this.companies.forEach(company => {
      new mapboxgl.Marker({ color: '#007bff' }) // Blue marker
        .setLngLat(company.location)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${company.name}</h3><p>${company.description}</p>`))
        .addTo(map);
    });

    map.on('style.load', () => {
      map.setFog({
        color: 'rgb(186, 210, 235)', // Atmospheric color
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02
      });
    });
  }
}

interface Company {
  name: string;
  location: [number, number];
  description: string;
}
