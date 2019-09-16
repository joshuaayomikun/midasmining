import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    A11yModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule
  ]
})

export class MaterialModule {}


/*  *  Copyright 2018 Google Inc. All Rights Reserved.
    * Use of this source code is governed by an MIT-style license that
    * can be found in the LICENSE file at http://angular.io/license
*/
