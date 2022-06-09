import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissaoCooperadoComponent } from './admissao-cooperado.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import {ServicesModule} from "../../core/services/services.module";
import {ComponentsModule} from "../../shared/components/components.module";

const routes: Routes = [
	{
		path: '',
		component: AdmissaoCooperadoComponent,
	},
];

@NgModule({
	declarations: [AdmissaoCooperadoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: true}),
    ServicesModule,
    ComponentsModule
  ],
})
export class AdmissaoCooperadoModule {}
