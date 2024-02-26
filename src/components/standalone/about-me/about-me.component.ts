import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @ViewChild('aboutme') aboutme!: ElementRef<HTMLSelectElement>;
  @ViewChildren("card") cards!: QueryList<ElementRef>;

  private hasScrolled: boolean = false;

  constructor() {
    document.addEventListener('scroll', (e) => {
      this.updateOnScroll(e.target);
    })
  }

  private updateOnScroll(e: any) {
    if(this.hasScrolled === true) return;

    const offsetY: number = this.aboutme.nativeElement.offsetTop;
    const scrollY: number = window.scrollY;

    if(scrollY >= offsetY) {
      for(const card of this.cards) {
        card.nativeElement.classList.remove("fulltop");
      }
      this.hasScrolled = true;
      document.removeEventListener('scroll', () => {});
    }
  }
}
