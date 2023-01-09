import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Dog } from '../dog';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs-list',
  template: `
    <h1>The Buring Dog List</h1>
    <button class="btn btn-primary" (click)="addDog()">Add Dog</button>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Age</th>
          <th>IQ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let dog of dogs | async">
          <td><a [routerLink]="['/edit', dog.id]">{{ dog.data.name }}</a></td>
          <td>{{ dog.data.breed }}</td>
          <td>{{ dog.data.age }}</td>
          <td>{{ dog.data.iq }}</td>
          <td><button type="button" class="btn btn-link" (click)="deleteDog(dog.id,dog.data.name)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class DogsListComponent implements OnInit {

  doglist!: AngularFirestoreCollection<Dog>;    // A local pointer to the collection
  dogs: any;                                    // Observable

  constructor(private __afs: AngularFirestore, private __router: Router) {} 

  ngOnInit(): void {
    this.doglist = this.__afs.collection('dogs');
    this.dogs = this.doglist.snapshotChanges().pipe(
      map(action => {
        return action.map( a => {
          const data = a.payload.doc.data() as Dog; // Extract the Dog - the content of the Document
          const id = a.payload.doc.id;  // Extract id for this document
          return { id, data };
        })
      })
    );
  }

  addDog() {
    this.__router.navigate(['edit']);
  }

  deleteDog(id: string, name: string) {
    if(confirm('Are you sure you want to delete ' + name + '?')) {
      this.__afs.doc('dogs/'+id).delete();
    }
  }

}
