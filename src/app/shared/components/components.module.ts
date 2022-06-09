import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserSituationComponent } from './user-situation/user-situation.component';

@NgModule({
	declarations: [SidebarComponent, HeaderComponent, FooterComponent, UserSituationComponent],
	exports: [SidebarComponent, HeaderComponent, FooterComponent, UserSituationComponent],
	imports: [CommonModule],
})
export class ComponentsModule {}
