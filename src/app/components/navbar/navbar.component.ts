import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title = 'off my mind';
  logoUrl = 'assets/logo.png';
  mobileMenuOpen = false;
  activeTab: string = 'todos';

  @Output() add = new EventEmitter<void>();
  @Output() resetData = new EventEmitter<void>();
  @Output() about = new EventEmitter<void>();
  @Output() help = new EventEmitter<void>();
  @Output() version = new EventEmitter<void>();

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigateByUrl(path);
    this.mobileMenuOpen = false;
  }

  onAddClicked() {
    this.add.emit();
    this.mobileMenuOpen = false;
  }

  onResetClicked() {
    this.resetData.emit();
    this.mobileMenuOpen = false;
  }

  onAboutClicked() {
    this.about.emit();
    this.mobileMenuOpen = false;
  }

  onHelpClicked() {
    this.help.emit();
    this.mobileMenuOpen = false;
  }

  onVersionClicked() {
    this.version.emit();
    this.mobileMenuOpen = false;
  }

  selectTab(tab: string) {
    this.activeTab = tab;
    this.mobileMenuOpen = false;
  }
}
