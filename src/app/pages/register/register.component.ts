import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  language: string = '';
  constructor(private router: Router) {}

  setLanguage(lang: string): void {
    this.language = lang;
    // alert(`Language set to: ${this.language}`);
    localStorage.setItem('language', this.language);
    this.router.navigate(['/init']);
  }
}
