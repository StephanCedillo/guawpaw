import { NgIf } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { PaginaComponent } from '../pagina/pagina.component';
import { LoaderAnimationComponent } from '../loader-animation/loader-animation.component';

@Component({
  selector: 'app-loader',
  imports: [PaginaComponent,NgIf,LoaderAnimationComponent],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
