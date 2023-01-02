/*

{
"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id" : "19F2caetTp6XAC1PjDNjgQ",
"url" : "",
"value" : "Chuck Norris once drove to Hawaii and back. Yeah, drove."
}

*/

export type ChuckNorrisAPIResponse = {
    icon_url? : string;
    id? : string;
    url? : string;
    value: string;
};