import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'admissao-cooperado',
	},
	{
		path: 'admissao-cooperado',
		loadChildren: () =>
			import('./pages/admissao-cooperado/admissao-cooperado.module').then((m) => m.AdmissaoCooperadoModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
