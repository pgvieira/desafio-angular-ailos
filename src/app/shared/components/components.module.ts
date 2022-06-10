import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserSituationComponent } from './user-situation/user-situation.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
	declarations: [SidebarComponent, HeaderComponent, FooterComponent, UserSituationComponent, LoadingSpinnerComponent, TimelineComponent],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, UserSituationComponent, LoadingSpinnerComponent, TimelineComponent],
	imports: [CommonModule],
})
export class ComponentsModule {}
