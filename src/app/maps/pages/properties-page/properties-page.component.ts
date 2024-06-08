import { Component } from '@angular/core';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}





@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {


  public houses: House[] = [
    {
      title: 'Hotto Coffee Lab, Plaza Raimundo',
      description: 'Cafeteria ambientación japonesa en Palma de Mallorca',
      lngLat: [ 2.655386249964863, 39.57045197953559]
    },
    {
      title: 'Coffee House Mistral, Plaza Weyler',
      description: 'Cafetería de especialidad con buen café y dulces',
      lngLat: [ 2.6498340712017807, 39.57178233472388]
    },
    {
      title: 'Sa Caravana Café, Plaza des Patins',
      description: 'Cafetería en Palma ambientada en una caravana, con muy buen café de especialidad',
      lngLat: [ 2.6493680122453043, 39.575402485026245 ]
    },
    {
      title: 'Nano Coffee Lab, callejón Avenida Jaime III',
      description: 'Pequeño local con café de especialidad tostado por ellos mismos',
      lngLat: [ 2.6462051545084933, 39.57145719157921 ]
    },
  ]

}
