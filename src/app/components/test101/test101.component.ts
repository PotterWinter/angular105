import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-test101',
  imports: [],
  templateUrl: './test101.component.html',
  styleUrl: './test101.component.scss',
})
export class Test101Component {
  message = input('hello test 101 component');
}
