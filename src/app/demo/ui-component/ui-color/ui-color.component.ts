// angular import
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-ui-color',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ui-color.component.html',
  styleUrls: ['./ui-color.component.scss']
})
export default class UiColorComponent {}
