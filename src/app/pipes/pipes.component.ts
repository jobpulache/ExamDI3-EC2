import { Component, Pipe, PipeTransform } from '@angular/core';
import { TruncatePipe } from '../truncate.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pipes',
  imports: [FormsModule, TruncatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  standalone: true,
 
})
export class PipesComponent {
  texto: string = ""
  limite: number=10
}
