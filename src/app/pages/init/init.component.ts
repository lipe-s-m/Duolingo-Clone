import { Component } from '@angular/core';

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

  nextMessage() {
    if (this.messageCount >= 2) {
      alert('You have reached the end of the messages.');
      return;
    }
    this.animate = false;
    setTimeout(() => {
      this.messageCount++;
      this.animate = true;
    }, 100);
  }
}
