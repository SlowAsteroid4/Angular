import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  onSubmit() {
    const body = {
      names: this.names,
      first_lastname: this.first_lastname,
      second_lastname: this.second_lastname,
      age: this.age,
      address: this.address,
      email: this.email,
      password: this.password
    }

    console.log(body);

    this.http.post('http://localhost:3500/api/account/signIn', body).subscribe((response) => {
      console.log(response);
    }, (error) => {
      // Maneja los errores aquí
    });
    
  }
}
