import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css'],
})
export class AddIngredientComponent {
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
        // 리스트 갱신
      });
  }
}
