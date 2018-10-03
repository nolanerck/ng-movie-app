import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
  providers: [ ContentService ]
})
export class ActorsComponent implements OnInit 
{

	contentService: ContentService;
	actors: Array<any>;

	constructor( cs:ContentService ) 
	{
		this.contentService = cs; 
	}

	ngOnInit() 
	{
		// console.log( "actors component!" );
		// console.log( environment.api_actors_url );

		//this.http.get<any>( _url, { headers: headers } );  	

		this.contentService.getActorsList().subscribe( data => {
			console.log( "Actors List!" );
			console.log( data );
			this.actors = data;
		});

	}

}
