// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes, DefaultUrlSerializer, UrlTree, UrlSerializer } from '@angular/router';
//import { RouterModule, Routes } from '@angular/router';

// Component Imports
import { ActorsComponent } from './actors/actors.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
//import { NotFoundComponent } from './not-found/not-found.component';

//Lowercase all incoming URLs -- Please do not modify function
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }
}

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'

    },
    {
        path: 'actors',
        component: ActorsComponent
    },
    {
        path: 'actor-detail/:actorid',
        component: ActorDetailComponent
    }
    // ,
    // {
    //     path: '**',
    //     redirectTo: 'actors',
    //     pathMatch: 'full'
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ],
    providers: [
       {
            provide: UrlSerializer,
            useClass: LowerCaseUrlSerializer
       }
    ]
})
export class AppRoutingModule {}
