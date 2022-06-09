import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { UserSituation } from '../../../shared/models';

@Injectable({
	providedIn: 'root',
})
export class ConsultaCpfService {
	private base_url: string = environment.baseUrl;
	private context: string = 'consulta-cpf';

	constructor(private httpClient: HttpClient) {}

	consultaCPF(cpf: string): Observable<UserSituation[]> {
		return this.httpClient.get<UserSituation[]>(`${this.base_url}/${this.context}?cpf=${cpf}`);
	}
}
