import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    // immediately resolved promise, simulate 0 latency
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // simulate 2 s latency
      setTimeout(() => resolve(this.getHeroes()), 2000);
    })
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}
