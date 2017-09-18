import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: 'movie.component.html'
})
export class MovieComponent {
  @Input('group')
  public movieForm: FormGroup;
}
