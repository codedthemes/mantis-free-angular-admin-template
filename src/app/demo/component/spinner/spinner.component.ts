// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export default class SpinnerComponent {}
