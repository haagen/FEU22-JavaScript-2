import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  template: `
    <div class="container">
      <h1>Contact Form</h1>
      <form (ngSubmit)="onSubmit()" #theForm="ngForm" *ngIf="!isSubmitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" class="form-control" required
            [(ngModel)]="contactForm.name" name="name" #name="ngModel"
          >
        </div>
        <div class="alert alert-danger" *ngIf="!name.valid && name.touched">Name is a required field</div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" class="form-control" required
            [(ngModel)]="contactForm.email" name="email" #email="ngModel"
          >
        </div>
        <div class="alert alert-danger" *ngIf="!email.valid && email.touched">Email is a required field</div>
        <div class="form-group">
          <label for="message">Message</label>
          <input type="text" id="message" class="form-control"
            [(ngModel)]="contactForm.message" name="message"
          >
        </div>        
        <button type="submit" class="btn btn-primary" [disabled]="!theForm.valid">Submit</button>        
      </form>
    </div>
    {{output}}
  `,
  styles: ['']
})
export class FormsComponent {

  contactForm:FormsObject  = { name: '', email: '', message: '' };
  isSubmitted: boolean = false;
  output: string = '';

  onSubmit() {
    this.isSubmitted = true;
    //alert(this.contactForm.name + ' ' + this.contactForm.email + ' ' + this.contactForm.message);
    //this.contactForm.name = 'Satt';
    //this.contactForm.email = 'från';
    //this.contactForm.message = 'klassen!';
    this.output = this.isSubmitted + '| ' + this.contactForm.name + ' ' + this.contactForm.email + ' ' + this.contactForm.message;
  }

}

type FormsObject = { name: string, email: string, message?: string };