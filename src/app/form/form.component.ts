import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  enteredName?: string;
  selectedKind?: string = 'bread';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitHandler() {
    console.log(this.enteredName);
    console.log(this.selectedKind);

    const data = {
      name: this.enteredName,
      kind: this.selectedKind,
      amount: 0,
    };

    this.http
      .post('http://localhost:4000/ingredients', data)
      .subscribe((responseData) => {
        console.log('ok');
      });
  }
}
