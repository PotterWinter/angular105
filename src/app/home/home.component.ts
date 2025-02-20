import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { Test101Component } from '../components/test101/test101.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, Test101Component, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Hello, world!');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed something in the input ${event.key} key`);
  }
}
