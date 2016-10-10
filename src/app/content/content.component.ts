import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { ContentBlog } from '../shared/content';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [ContentService]
})
export class ContentComponent implements OnInit {

  private contentList: ContentBlog[]; 
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService
      .getContentList()
      .subscribe((res: ContentBlog[]) => this.contentList = res);
  }

}
