// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_actors_url: "http://127.0.0.1:8080/api/v1/actors.json",
  api_actor_details_url: "http://127.0.0.1:8080/api/v2/selectActor.cfm?actorID=",
  //api_actor_save: "http://127.0.0.1:8080/api/v2/updateActor.cfm"
  //api_actor_save: "http://127.0.0.1:8080/api/v3/actor.cfc?method=updateActor"
  api_actor_save: "http://127.0.0.1:8080/api/v4/actor"
  //api_actor_save: "http://127.0.0.1:8080/api/v5/actor"
  //api_actors_url: "http://127.0.0.1:8080/api/v2/selectActor.cfm"
  
};
