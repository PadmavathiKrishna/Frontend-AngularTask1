import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinalComponent } from './final/final.component';
import { EndpageComponent } from './endpage/endpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';

const routes: Routes = [
  {path:'registerpage', component:RegisterpageComponent},
    {path:'final', component:FinalComponent},
    {path:'endpage', component:EndpageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
