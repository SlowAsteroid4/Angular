import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  names: string = '';
  first_lastname: string = '';
  second_lastname: string = '';
  age: string = '';
  address: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Nombres:', this.names);
    console.log('Contraseña:', this.password);
  }
}
