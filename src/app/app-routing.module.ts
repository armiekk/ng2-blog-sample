import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog',  },
  { path: 'blog', component: ContentComponent},
  { path: 'blog/:id', component: ContentDetailComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/blog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ng2BlogSampleRoutingModule { }
