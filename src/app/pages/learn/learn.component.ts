import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css',
})
export class LearnComponent {
  language: string = localStorage.getItem('language') || 'sua linguagem';
  duoText: string[] = [
    'Certo, vamos começar do zero!',
    'Certo. Vamos aumentar o seu conhecimento!',
    'Certo. Vamos aumentar o seu conhecimento!',
    'Olha só, que legal!',
    'Olha só, que legal!',
    `Quanto você entende de ${this.language}?`,
  ];
  options: any = [
    {
      option: `Não sei nada de ${this.language}`,
      value: 0,
    },
    {
      option: `Conheço algumas palavras comuns`,
      value: 0,
    },
    {
      option: `Consigo ter conversas simples`,
      value: 0,
    },
    {
      option: `Consigo falar de assuntos variados`,
      value: 0,
    },
    {
      option: `Consigo falar sobre a maioria dos assuntos em detalhes`,
      value: 0,
    },
  ];
  animate: boolean = true;
  itemClick: number | null = null;
  click: boolean = false;
  showError: boolean = false;
  duoMessageCount: number = 5;
  private counter: number = -1;

  constructor(private router: Router) {}

  changeDuoText(numberText: number) {
    this.showError = false;
    this.itemClick = numberText;
    this.click = true;
    this.animate = false;
    setTimeout(() => {
      this.duoMessageCount = numberText;
      this.animate = true;
      this.click = false;
    }, 100);
  }
  nextPage() {
    if (this.duoMessageCount === 5) {
      this.showError = true;
      console.log('Por favor, selecione um nível de linguagem.');
      return;
    }
    localStorage.setItem('languageLevel', this.duoMessageCount.toString());
    console.log(
      `Navegando para o próximo nível com o nível de linguagem: ${this.duoMessageCount}`
    );
    this.router.navigate(['/learn/quiz']);
  }
  returnURL() {
    if (this.counter >= 5) {
      this.counter = -1;
    }
    this.counter = this.counter + 1;
    console.log(this.counter);
    return `assets/images/level${this.counter}.svg`;
  }
}
