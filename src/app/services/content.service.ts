import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import * as $ from "jquery";

import { environment } from '../../environments/environment';

const headers: HttpHeaders = new HttpHeaders( {'Accept': 'application/json'} );

@Injectable()
export class ContentService 
{
	http:HttpClient;

    constructor( http: HttpClient ) 
    {
    	this.http = http;
    }

  	public getActorsList()
  	{
        return this.http.get<any>( environment.api_actors_url, { headers: headers } );
  	}

  	public getActorDetails( actorID:number )
  	{
  		let _url = environment.api_actor_details_url + actorID;
  		return this.http.get<any>( _url, { headers: headers } );
  	}

    public saveActor( actorID:number, actorName:string )
    {
      console.log( "saveActor" );

      // $.ajax({
      //   type: "POST",
      //   url: environment.api_actor_save,
      //   data: { actorname: actorName, actorid: actorID, birthdate: '1/1/1980' },
      //   success: function(){ alert( "yay! v3" ); }
      // });

        //const headers = new HttpHeaders().set("Content-Type", "application/json");


        //let _url = environment.api_actor_save + "/" + actorID;
        let _url = environment.api_actor_save + "/7";
        return this.http.get<any>( _url, { headers: headers } ).subscribe( foo => {
                                   console.log( "here" );
                                   console.log( foo );
                                 }
                                 );

        // return this.http.post<any>( _url, 
        //                            { actorname: actorName, 
        //                              birthdate: '2/2/1990',
        //                              bornincity: 'vegas' },
        //                            { headers: headers }
        //                          ).subscribe( foo => {
        //                            console.log( "here" );
        //                            console.log( foo );
        //                          }
        //                          );

      //                             ).subscribe(
      //   res => {
      //     console.log( "saved!" )
      //     console.log(res);
      //   },
      //   err => {
      //     console.log("Error occured");
      //   }
      // );
    }

}

