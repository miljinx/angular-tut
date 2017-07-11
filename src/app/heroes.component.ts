import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service'
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private router: Router,
              private heroService: HeroService) {}

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
