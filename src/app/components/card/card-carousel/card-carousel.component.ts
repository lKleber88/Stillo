import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent implements OnInit {

	@Input()
	carouselCover:string=""

	@Input()
  carouselImages = [
		'assets/sofa__02.jpg',
		'assets/sofa__03.jpg',
		'assets/sofa__04.jpg',
		'assets/sofa__05.jpg',
		'assets/sofa__06.jpg'
	];

	currentIndex = 0;
	interval: any; // Variável para armazenar o intervalo

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  constructor() { }

  ngOnInit(): void {
		// Inicia o intervalo para avançar automaticamente os slides a cada 3 segundos
   this.interval = setInterval(() => {
    this.nextSlide();
  }, 5000);
  }

}
