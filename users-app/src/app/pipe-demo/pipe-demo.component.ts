import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  filteredStatus: string = "";

  todos = [{
    label: "Renew insurance",
    status: "completed"
  }, {
    label: "Pot the plant",
    status: "pending"
  }, {
    label: "Buy the books",
    status: "completed"
  }, {
    label: "Clean the room",
    status: "pending"
  }]

  onAddNewTodo() {
    this.todos.push({ label: "New Todo", status: "pending" })
  }

  contact_number = 987654321;

  promiseData: Promise<string>;

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes.")
      // reject(new Error("Something bad happened!"))
    }, 3000);
  })

  constructor() {
    this.promiseData = new Promise((resolve, reject) => {
      setTimeout(() => { resolve("Second Package!") }, 4000)
    })
  }

  ngOnInit() {
  }

}
