import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NumberCountingStore, type NumberCountingStoreTypes } from './number-counting.store';

@Component({
  selector: 'app-number-counting',
  imports: [
    RouterLink,
    NzButtonComponent,
    NzInputModule
  ],
  templateUrl: './number-counting.html',
  styleUrl: './number-counting.sass'
})
export class NumberCounting {
  numberCountingStore: NumberCountingStoreTypes['Store'] = inject(NumberCountingStore);
}