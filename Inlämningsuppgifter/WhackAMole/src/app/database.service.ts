import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { FSDocument } from './document';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private __afs: AngularFirestore) {}

  getTop10List() {
    return this.__afs
      .collection('whackers', (ref) => ref.orderBy('points', 'desc').limit(10))
      .valueChanges();
  }

  getFastestPlayer() {
    return this.__afs
      .collection('whackers', (ref) => ref.orderBy('reaction', 'asc').limit(1))
      .valueChanges();
  }

  savePlayer(player: FSDocument) {
    this.__afs.collection('whackers').add(player);
  }
}
