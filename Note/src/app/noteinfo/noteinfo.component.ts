import {
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Note } from '../note';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-noteinfo',
  templateUrl: './noteinfo.component.html',
  styleUrls: ['./noteinfo.component.scss'],
})
export class NoteinfoComponent implements OnInit {
  @Input() note!: Note;
  @Input() lasttitle!: string;
  @Output() createnewEmitter = new EventEmitter<Note>();

  titlechanged: boolean = false;
  contentchanged: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }


  onRevert() {
    this.note.title=this.lasttitle;
    this.note.content = localStorage.getItem(this.lasttitle)?localStorage.getItem(this.lasttitle):'';
    this.contentchanged = false;
    this.titlechanged = false;
  }

  onSave() {
    
    console.log(this.lasttitle);
    this.createnewEmitter.emit(this.note);
    this.contentchanged = false;
    this.titlechanged = false;
  }
}
 