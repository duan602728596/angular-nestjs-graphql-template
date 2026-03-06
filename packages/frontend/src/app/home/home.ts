import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NzButtonComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {}