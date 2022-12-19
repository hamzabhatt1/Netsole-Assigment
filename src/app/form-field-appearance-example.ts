import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

/** @title Form field appearance variants */

@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html',
  styleUrls: ['form-field-appearance-example.css'],
  template: `<ejs-treegrid [dataSource]='data'> </ejs-treegrid>`,
})
export class FormFieldAppearanceExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  req = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  error() {
    if (this.req.hasError('required')) {
      return 'Required';
    }

    return this.req.hasError('req') ? 'Not a valid email' : '';
  }

  fileName = '';

  /*constructor(private http: HttpClient) {}*/
  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.http.post('/api/thumbnail-upload', formData);

      upload$.subscribe();
    }
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
