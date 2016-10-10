import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Comment } from './comment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {
    
    BASE_URL: string = 'http://localhost:3001/comment'
    constructor(private http: Http) { }
    
    getCommentList(id: number): Observable<Comment[]>{
        let FETCH_URL: string = `${this.BASE_URL}?blogId=${id}`;
        return this.http.get(FETCH_URL, {
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).map((res: Response) => res.json());
    }

    addComment(comment: Comment): Observable<Comment>{
        return this.http.post(this.BASE_URL, comment, {
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).map((res: Response) => res.json());
    }

}