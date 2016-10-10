import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
})
export class ContentListComponent implements OnInit {
  
  @Input() contentList;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  contentDetail(id: number){
    this.router.navigate(['/blog', id]);
  }

}
