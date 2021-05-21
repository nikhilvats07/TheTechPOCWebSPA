import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddStoryComponent } from './story/add-story/add-story.component';
import { AccessDeniedComponent } from './access denied/access-denied/access-denied.component';

const routes: Routes = [
  { path: 'access-denied', component: AccessDeniedComponent },
 { path: '', component: AddStoryComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
