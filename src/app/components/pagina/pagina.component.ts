import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ObjectivesComponent } from '../objectives/objectives.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { ImageComponent } from '../image/image.component';
import { FooterComponent } from '../footer/footer.component';
import { DescargaComponent } from '../descarga/descarga.component';

@Component({
  selector: 'app-pagina',
  imports: [NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ObjectivesComponent,
    TechnologiesComponent,
    ImageComponent,
    FooterComponent,
    DescargaComponent],
  templateUrl: './pagina.component.html',
  styleUrl: './pagina.component.css'
})
export class PaginaComponent {

}
