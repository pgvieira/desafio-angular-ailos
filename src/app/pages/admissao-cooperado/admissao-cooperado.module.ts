import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmissaoCooperadoComponent } from './admissao-cooperado.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: AdmissaoCooperadoComponent,
	},
];

@NgModule({
	declarations: [AdmissaoCooperadoComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdmissaoCooperadoModule {}
