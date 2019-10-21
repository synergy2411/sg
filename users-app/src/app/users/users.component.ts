import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl : `./users.component.html`
})
export class UsersComponent {
  user = {
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1965"),
    income: 50000,
    isWorking: true,
    company: "Microsoft",
    votes: 120
  }
}
