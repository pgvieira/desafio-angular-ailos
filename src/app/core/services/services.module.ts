import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaCpfService } from './consulta-cpf/consulta-cpf.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule],
	providers: [ConsultaCpfService],
})
export class ServicesModule {}
