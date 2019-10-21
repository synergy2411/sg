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
    votes: 120,
    image : "https://image.cnbcfm.com/api/v1/image/104891709-Bill_Gates_the_co-Founder.jpg?v=1558120888&w=1400&h=950"
  }

  onMoreInfo(user : any){
    alert(`${user.firstName} is working with ${user.company}!!`);
  }
}
