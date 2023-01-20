import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, of, Subscription, map, filter } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ` {{ title }} `,
  styles: [],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'L15-Observables';
  timer = 10000;
  timerSubject = new BehaviorSubject<number>(this.timer);
  timerObservable = this.timerSubject.asObservable();
  subscription!: Subscription;

  constructor() {
    setInterval(() => {
      this.timer--;
      this.timerSubject.next(this.timer);
    }, 1000);
  }

  ngOnInit() {
    const dogs: Dog[] = [
      { name: 'Boss', age: 3 },
      { name: 'Plutten', age: 7 },
      { name: 'Fido', age: 14 },
    ];

    // Array - map() och filter() funktionerna
    // Map används för att "mappa om" eller konvertera en array
    // T.ex [{ name: 'Boss', age: 3 }] -> [ 3 ]
    let dogAges = dogs.map((x) => {
      // [ 3, 7, 14]
      return x.age;
    });
    let dogNames = dogs.map((x) => {
      // ['Boss', 'Plutten', 'Fido']
      return x.name;
    });
    let newObjType = dogs.map((x) => {
      // [ { name: 'Boss', age: 3, age2: 9 }, ... ]
      return {
        name: x.name,
        age: x.age,
        age2: x.age * x.age,
      };
    });

    // Array - filter()
    // Filter används för att avgöra vilka element/rader som skall finnas kvar
    let oldDogs = dogs.filter((x) => {
      // x => x.age > 10
      // [ { name: 'Fido', age: 14 } ]
      if (x.age > 10) {
        return true;
      }
      return false;
    });

    let dogObs = of(dogs[0], dogs[1], dogs[2]);
    /*
    dogObs.subscribe((theDog) => {
      console.log('dogObs: ', theDog.name);
    });
    
    dogObs
      .pipe(
        map((x) => {
          // ['Boss', 'Plutten', 'Fido']
          return x.name;
        })
      )
      .subscribe((value) => {
        console.log('dogObs: ', value);
      });
    */

    dogObs
      .pipe(
        filter((x) => {
          // ['Boss', 'Plutten', 'Fido']
          return x.age > 10;
        }),
        map((x) => {
          // ['Boss', 'Plutten', 'Fido']
          return x.name;
        })
      )
      .subscribe((value) => {
        console.log('dogObs: ', value);
      });

    // map
    // filter
    /*
    this.subscription = this.timerObservable.subscribe((newTimer) => {
      console.log('Timer: ', newTimer);
    });
    */
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

export type Dog = {
  name: string;
  age: number;
};
