import { Component, Input, OnInit } from '@angular/core';
import { UserSituation } from '../../models';

@Component({
	selector: 'app-user-situation',
	templateUrl: './user-situation.component.html',
	styleUrls: ['./user-situation.component.scss'],
})
export class UserSituationComponent implements OnInit {
	@Input() user_situation: UserSituation | undefined;

	constructor() {}

	ngOnInit(): void {}
}
