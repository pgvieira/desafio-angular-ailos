import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GenericValidator } from '../../shared/validators/GenericValidator';
import { ConsultaCpfService } from '../../core/services/consulta-cpf/consulta-cpf.service';
import { UserSituation } from '../../shared/models';

@Component({
	selector: 'app-admissao-cooperado',
	templateUrl: './admissao-cooperado.component.html',
	styleUrls: ['./admissao-cooperado.component.scss'],
})
export class AdmissaoCooperadoComponent implements OnInit {
	formCPF: FormGroup;
	user_situation: UserSituation | undefined;

	constructor(private consultaService: ConsultaCpfService) {
		this.formCPF = new FormGroup({
			cpf: new FormControl('', GenericValidator.isValidCpf()),
		});
	}

	ngOnInit(): void {}

	get cpf() {
		return this.formCPF.get('cpf');
	}

	onSubmit(): void {
		const cpf = this.cpf?.value;
		this.consultaService.consultaCPF(cpf).subscribe((value) => {
			this.user_situation = value[0];
		});
	}
}
