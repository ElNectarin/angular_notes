import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent {
  noteTitle: string = '';
  noteText: string = '';

  @Output() addNote = new EventEmitter<{ title: string; text: string }>();

  onSubmit() {
    this.addNote.emit({ title: this.noteTitle, text: this.noteText });
    // Сброс формы после отправки
    this.noteTitle = '';
    this.noteText = '';
  }
}
