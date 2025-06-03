import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css',
})
export class InitComponent {
  messageCount: number = 0;
  animate: boolean = true;
  duoText: string[] = [
    'Oi! Eu sou o Duo!',
    'Estou aqui para te ajudar a aprender idiomas.',
    'Vamos começar a festa!',
    // 'You can navigate through different pages.',
    // 'Feel free to explore and enjoy the app!',
    // 'Thank you for using our application!',
  ];

  constructor(private router: Router) {}

  nextMessage() {
    if (this.messageCount >= 2) {
      this.router.navigate(['/learn']);
      return;
    }
    this.animate = false;
    setTimeout(() => {
      this.messageCount++;
      this.animate = true;
    }, 100);
  }
}
