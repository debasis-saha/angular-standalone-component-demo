import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.message.component.html',
})
export class AppMessageComponent {
    @Input({required:true}) message = '';
}
