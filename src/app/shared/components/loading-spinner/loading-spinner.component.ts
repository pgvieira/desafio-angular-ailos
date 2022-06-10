import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-loading-spinner',
	template: ` <div class="spinner"></div>`,
	styles: [
		`
      .spinner {
        width: 4.8px;
        height: 4.8px;
        animation: spinner-z355kx 2.5s infinite linear;
        border-radius: 4.8px;
        box-shadow: 12px 0 0 0 #ffffff, 7.4px 9.4px 0 0 #ffffff, -2.6px 11.6px 0 0 #ffffff, -10.8px 5.2px 0 0 #ffffff, -10.8px -5.2px 0 0 #ffffff, -2.6px -11.6px 0 0 #ffffff, 7.4px -9.4px 0 0 #ffffff;
      }

      @keyframes spinner-z355kx {
        to {
          transform: rotate(360deg);
        }
      }
		`,
	],
})
export class LoadingSpinnerComponent {
  @Input() size: number | undefined;
}
