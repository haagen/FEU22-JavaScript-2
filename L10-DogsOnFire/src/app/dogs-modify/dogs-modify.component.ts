import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs-modify',
  template: `
    <h1>{{ titel }}</h1>
    <form (ngSubmit)="onSubmit()" #addDogForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" class="form-control" [(ngModel)]="newDog.name" #name="ngModel" required>
      </div>
      <div class="form-group">
        <label for="breed">Breed</label>
        <input type="text" id="breed" name="breed" class="form-control" [(ngModel)]="newDog.breed" #breed="ngModel">
      </div>      
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" name="age" class="form-control" [(ngModel)]="newDog.age" #age="ngModel">
      </div>
      <div class="form-group">
        <label for="iq">IQ</label>
        <input type="number" id="iq" name="iq" class="form-control" [(ngModel)]="newDog.iq" #iq="ngModel">
      </div>            
      <button class="btn btn-secondary" (click)="onCancel()">Cancel</button>
      <button class="btn btn-primary" type="submit" [disabled]="!addDogForm.form.valid" >Save Dog</button>
    </form>

  `,
  styles: [
  ]
})
export class DogsModifyComponent implements OnInit {

  titel: string;
  newDog: Dog = { name: '' };
  id: string;

  constructor(
    private __afs: AngularFirestore, 
    private __router: Router,
    private __activatedRoute: ActivatedRoute
  ) { }

  onSubmit() { 
    if(!this.id) {
      this.__afs.collection('dogs').add(this.newDog);
    } else {
      this.__afs.doc('dogs/'+this.id).update(this.newDog);
    }
    this.__router.navigate(['']);
  }

  onCancel() { 
    this.__router.navigate(['']);
  }

  ngOnInit(): void {
    this.__activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    if(!this.id) {
      this.titel = 'Add a new dog';
    } else {
      this.titel = 'Edit Dog';
      // .doc -> FirestoreDocument
      // .valueChanges() -> Observable, datan nu och data efterhand som den ändras
      // .subscribe() - prenumerera på observable
      let doc: AngularFirestoreDocument<Dog> = this.__afs.doc('dogs/'+this.id);
      doc.valueChanges().subscribe((dog) => {
        this.newDog = dog;
      });
    }
  }
}
