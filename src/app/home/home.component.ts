import { Component } from '@angular/core';
import { MaterialsModule } from '../materials.module';
import { SharedModule } from '../shared.module';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, MaterialsModule, NewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  services = [
    {
      title: 'Recruitment',
      description: 'We help you find the right talent for your organization.',
    },
    {
      title: 'Training & Development',
      description:
        "We offer training programs to enhance your employees' skills.",
    },
    {
      title: 'Employee Relations',
      description:
        'We provide support for maintaining positive employee relations.',
    },
  ];
}
