import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

const MATERIALMODULE = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
];

@NgModule({
  imports: [
    ...MATERIALMODULE
  ],
  exports: [
    ...MATERIALMODULE
  ]
})
export class MaterialModule { }
