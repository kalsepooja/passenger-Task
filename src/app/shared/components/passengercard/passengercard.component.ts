import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../model/interface';

@Component({
  selector: 'app-passengercard',
  templateUrl: './passengercard.component.html',
  styleUrls: ['./passengercard.component.scss']
})
export class PassengercardComponent implements OnInit {
  @Input() passengercard !: Ipassenger; 
  @ViewChild('control') input !: ElementRef;
  @Output() emitter : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>(); 

  constructor() { }

  isDisable : boolean = false;

  onclick(){
    this.isDisable = true;
  }
  onupdate(){
    this.isDisable = false;
    this.passengercard.fullname = this.input.nativeElement.value;
  }
  onDelete(){
    this.emitter.emit(this.passengercard);
  }

  ngOnInit(): void {

  }

}
