import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared-component',
  templateUrl: './sharedModule.component.html',
  styleUrls: ['./sharedModule.component.css']
})
export class SharedComponent implements OnInit {
  from = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.from = data.from;
    })
  }

}
