import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Note';

  notes: Note[] = [];
  note: Note = new Note('', '');
  noteinfo!: string;
  addnew: boolean = false;

  ngOnInit(): void {
    for (let [key, value] of Object.entries(localStorage)) {
      if (key) {
        this.notes = [...this.notes, { title: key, content: value }];
      }
    }
    console.log(this.notes);
  }

  onAddNote() {
    this.note.title = '';
    this.note.content = '';
    this.noteinfo = '';
    this.addnew = true;
  }

  onShowNote(title: string) {
    this.addnew = false;
    // console.log(title);
    this.noteinfo = title;
    this.note.title = title;
    this.note.content = localStorage.getItem(title)
      ? localStorage.getItem(title)
      : '';
    // console.log(localStorage.getItem(title));
  }

  onDelNote(title: string) {
    localStorage.removeItem(title);
    this.notes = this.notes.filter((data) => data.title !== title);
  }

  getInfo(newnote: Note) {
    console.log(this.noteinfo);
    console.log(newnote);

    if (this.addnew) {
      if (!this.notes.find((note) => note.title === newnote.title)) {
        localStorage.setItem(
          newnote.title,
          newnote.content ? newnote.content : ''
        );
      } else {
        console.log('Already have it!');
        newnote.title = 'Already have it!';
      }
    } else {
      if (newnote.title === this.noteinfo) {
        localStorage.setItem(
          newnote.title,
          newnote.content ? newnote.content : ''
        );
      }else if(this.notes.find((note)=>note.title === newnote.title)){
        console.log('Already have it! cannot change!');
        newnote.title = this.noteinfo;
      } 
      else {
        localStorage.removeItem(this.noteinfo);
        localStorage.setItem(
          newnote.title,
          newnote.content ? newnote.content : ''
        );
      }
    }
    this.notes = [];
    for (let [key, value] of Object.entries(localStorage)) {
      if (key) {
        this.notes = [...this.notes, { title: key, content: value }];
      }
    }
    this.noteinfo = newnote.title;
    this.addnew = false;
    console.log(this.notes);
  }
}
