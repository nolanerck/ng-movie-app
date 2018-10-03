import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
  providers: [ ContentService ]
})
export class ActorDetailComponent implements OnInit 
{
	private contentSvc:ContentService;
	private route:ActivatedRoute;

	public actorID:number;
	public actorName:string;

	constructor( contentSvc:ContentService, route: ActivatedRoute ) 
	{ 
		this.route = route;
		this.contentSvc = contentSvc;
	}

	ngOnInit() 
	{
		//let actorid:number = Number( this.route.snapshot.paramMap.get( 'actorid' ) );
		this.actorID = Number( this.route.snapshot.paramMap.get( 'actorid' ) );

		this.contentSvc.getActorDetails( this.actorID )
			.subscribe( data => {
			this.actorName = data[ 0 ].ACTORNAME;

		});
	}

	doSaveActor()
	{
		alert( "saving actor!" );
		this.contentSvc.saveActor( this.actorID, this.actorName );
	}

}
