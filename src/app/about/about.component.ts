import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  title = 'A propos de nous';
  about = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies gravida orci ut iaculis. Vivamus et ullamcorper dui. Curabitur nec egestas lorem, vel vehicula nisi. Phasellus nec tellus sit amet risus hendrerit volutpat. Donec non nisi sit amet justo convallis luctus vel vel magna. Etiam lorem sem, lacinia quis dictum vel, dictum quis odio. Curabitur ut felis eget lectus commodo pharetra ac eget tellus. Sed non sagittis mi. Donec sed lectus ac velit bibendum elementum et eget mi. Vivamus vehicula mauris sed diam ornare, ac pulvinar nulla sollicitudin. Maecenas eget mi mollis, accumsan mi ut, tempor felis.';
}
