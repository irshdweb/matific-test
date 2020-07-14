import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from '../modals/video/video.component';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modalService.open(VideoComponent, 
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        size: 'xl',

      },);

    //modalRef.componentInstance.fromParent = data;
    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
  }

}
