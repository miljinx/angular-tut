import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
