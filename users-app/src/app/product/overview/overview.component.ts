import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  id : number;
  category : string;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.category = params['category'];
    })
  }

}
