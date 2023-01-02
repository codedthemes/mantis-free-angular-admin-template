// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export default class TypographyComponent {}
