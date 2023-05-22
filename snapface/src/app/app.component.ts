import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les randonnées.',
      'https://pixabay.com/fr/photos/cheval-blanc-hiver-neige-d%c3%a9cembre-3010129.jpg/',
      new Date(),
      0
    );

    this.myLastSnap = new FaceSnap(
      'Un bon repas',
      'Mmmh qe c\'est bon !',
      'https://pixabay.com/fr/photos/brown-papillon-blanc-papillons-209106/',
      new Date(),
      0
    );



  }
}