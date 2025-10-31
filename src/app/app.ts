import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButton } from "./components/primary-button/primary-button";
import { FileDrop } from "./features/cal-counter/components/file-drop/file-drop";
import { CalCounterComponent } from "./features/cal-counter/components/cal-counter-component/cal-counter-component";
import { Navbar } from "./components/navbar/navbar";
import { HeroSection } from "./components/hero-section/hero-section";
import { Loader } from "./components/loader/loader";

@Component({
  selector: 'app-root',
  imports: [CalCounterComponent, Navbar, HeroSection, Loader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cal-count-ai');
  
}
