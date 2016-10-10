import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ContentBlog } from './content';


@Injectable()
export class ContentService {

    private BASE_URL: string = 'http://localhost:3001/blogContent';

    constructor(private http: Http) { }

    getContentList(): Observable<ContentBlog[]>{
        return this.http.get(this.BASE_URL, {
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).map((res: Response) => res.json());
    }

    getContent(id: number): Observable<ContentBlog> {
        let FETCH_URL: string = `${this.BASE_URL}?id=${id}`;
        return this.http.get(FETCH_URL, {
            headers: new Headers({ 'Content-Type': 'application/json' })
        }).map((res: Response) => res.json()[0]);
    }
}