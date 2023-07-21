import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export default class SpinnerComponent {}
