import { Component, OnInit, Inject, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() menuButtonClickedMobile = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 70 ||     
    document.documentElement.scrollTop > 70) {
      document.getElementById('floatingheader').classList.add('stickyhead');
    }else{
      document.getElementById('floatingheader').classList.remove('stickyhead');
    }
  }

  ngOnInit() {
  }

}
