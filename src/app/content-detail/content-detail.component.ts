import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { CommentService } from '../shared/comment.service';
import { ContentBlog } from '../shared/content';
import { Comment } from '../shared/comment';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css'],
  providers: [ContentService, CommentService]
})
export class ContentDetailComponent implements OnInit {

  content: ContentBlog;
  commentForm: Comment;
  commentList: Comment[];

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private commentService: CommentService
    ) { 
      this.commentForm = new Comment();
      this.content = new ContentBlog();
    }

  ngOnInit() {
    this.route.params.forEach((param: Params) => {
      let id = +param['id'];
      this.commentForm.blogId = id;
      this.contentService
        .getContent(id)
        .subscribe(content => this.content = content);
      this.commentService
      .getCommentList(id)
      .subscribe(commentList => this.commentList = commentList)
    })
  }

  submitComment(){
    this.commentService
      .addComment(this.commentForm)
      .subscribe(comment => this.commentList = [...this.commentList, comment]);
  }

}



