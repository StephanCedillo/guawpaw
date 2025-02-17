import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-descarga',
  imports: [],
  templateUrl: './descarga.component.html',
  styleUrl: './descarga.component.css'
})
export class DescargaComponent implements AfterViewInit {
  @ViewChild('canvasElement', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private pawPrints: any[] = [];
  private pawImage = new Image();

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    canvas.width = canvas.parentElement!.clientWidth;
    canvas.height = canvas.parentElement!.clientHeight;

    this.pawImage.src = 'images/Paw.png'; // Ruta de la imagen de la huella
    this.pawImage.onload = () => {
      this.createPawPrints();
      this.animatePawPrints();
    };
  }

  createPawPrints() {
    this.pawPrints = [];
    for (let i = 0; i < 20; i++) {
      this.pawPrints.push({
        x: Math.random() * this.ctx.canvas.width,
        y: Math.random() * this.ctx.canvas.height,
        size: Math.random() * 40 + 20,
        speedY: Math.random() * 2 + 1
      });
    }
  }

  animatePawPrints() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    
    this.pawPrints.forEach((p) => {
      p.y += p.speedY;
      if (p.y > this.ctx.canvas.height) p.y = -20;

      this.ctx.drawImage(this.pawImage, p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(() => this.animatePawPrints());
  }
}