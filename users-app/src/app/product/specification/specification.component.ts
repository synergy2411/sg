import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  productName : string ;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.productName = params['name'];
    })
  }

}
