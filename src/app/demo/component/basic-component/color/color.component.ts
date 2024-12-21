// Angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-color',
  imports: [SharedModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.scss'
})
export class ColorComponent {}
