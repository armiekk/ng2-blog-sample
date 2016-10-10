import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BlogSampleRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentDetailComponent,
    CommentListComponent,
    HomeComponent,
    AboutComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BlogSampleRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
