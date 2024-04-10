import { Component, EventEmitter, Output } from '@angular/core';
import { NotesInterface } from './notes.interface';
import { CommonModule, NgFor } from '@angular/common';
import { NoteFormComponent } from '../note-form/note-form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteFormComponent, FormsModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  showNoteForm: boolean = false; // Переменная состояния для управления видимостью формы
  notes: Array<NotesInterface> = [
    {
      id: 1,
      noteTitle: 'Hello',
      noteText: 'Hello world',
    },
    {
      id: 2,
      noteTitle: 'Hello',
      noteText: 'Hello world',
    },
  ];

  onAddNote(note: { title: string; text: string }) {
    // здесь можно обработать добавление заметки, например, добавить её в массив заметок
    console.log('New note added:', note);
    this.notes.push({
      id: this.notes.length + 1,
      noteTitle: note.title,
      noteText: note.text,
    });
  }

  addNote(): void {
    const newNote: NotesInterface = {
      id: this.notes.length + 1,
      noteTitle: 'New Note',
      noteText: 'This is a new note',
    };
    this.notes.push(newNote);
    console.log('click');
  }

  toggleNoteForm() {
    this.showNoteForm = !this.showNoteForm;
  }
}
