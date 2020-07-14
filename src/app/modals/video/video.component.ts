import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() fromParent;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log(this.fromParent);

  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
  }

}
