import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [NgIf,NgStyle,NgFor],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  programas = [
    { 
        "nombre": "Angular Ionic", 
        "funcion": "Utilizados para desarrollar la aplicación web y móvil.",
        "img": "https://ionicframework.com/img/angular/logo@2x.png"
    },
    { 
        "nombre": "Firebase", 
        "funcion": "Proporciona autenticación de usuarios y gestión de datos en tiempo real.",
        "img": "https://cdn.shortpixel.ai/spai/q_lossy+w_1298+to_webp+ret_img/i0.wp.com/davidcanton.net/wp-content/uploads/2024/09/social.png?fit=1024%2C512&ssl=1"
    },
    { 
        "nombre": "Krita & Adobe Illustrator", 
        "funcion": "Herramientas de diseño y animación para crear elementos visuales y gráficos de la aplicación.",
        "img": "https://i0.wp.com/www.omglinux.com/wp-content/uploads/2022/08/krita-logo-on-a-light-background.jpg?fit=1250%2C656&ssl=1"
    },
    { 
        "nombre": "Hostinger", 
        "funcion": "Hospedaje web confiable para alojar la aplicación y garantizar su disponibilidad.",
        "img": "https://wpsettingbox.com/wp-content/uploads/2024/08/Hostinger.png"
    },
    { 
        "nombre": "Rive", 
        "funcion": "Se usa para crear animaciones interactivas que responden a las acciones de los usuarios.",
        "img": "data:image/png;base64,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"
    },
    { 
        "nombre": "Android Studio & Project IDX", 
        "funcion": "Herramientas para el desarrollo y pruebas de la aplicación en dispositivos Android.",
        "img": "https://9to5google.com/wp-content/uploads/sites/4/2024/07/Android-Studio-Project-IDX-.jpg?quality=82&strip=all"
    }
  ];

  isCardVisible = false;
  cardX = 0;
  cardY = 0;
  cardImg = '';
  cardText = '';

  showCard(programa: any, event: MouseEvent) {
    this.cardImg = programa.img;  // Usa la imagen específica del programa
    this.cardText = programa.funcion;
    this.isCardVisible = true;
    this.moveCard(event);
  }

  moveCard(event: MouseEvent) {
    this.cardX = event.clientX + 10;
    this.cardY = event.clientY + 10;
  }

  hideCard() {
    this.isCardVisible = false;
  }
}
