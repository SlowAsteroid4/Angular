import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    const body = {
      email: this.email,
      password: this.password
    }

    console.log(body);

    this.http.post('http://localhost:3500/api/account/', body).subscribe((response) => {
      console.log(response);
    }, (error) => {
      // Maneja los errores aquí
    });
    
  }
}
