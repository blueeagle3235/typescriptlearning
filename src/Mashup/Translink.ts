//https://developer.translink.ca/ServicesRtti/ApiReference

import axios, { AxiosResponse } from "axios";

const APIKey = "XQD5MTNaqWKeTTLMwY9m";

let getStopsInLadner: string = `http://api.translink.ca/RTTIAPI/V1/stops?apiKey=${APIKey}&lat=49.090096&long=-123.081999`
// axios
//     .get(getStopsInLadner)
//     .then((response: AxiosResponse<any>) => {
//         // handle success
//         console.log(response.data);
//     })
//     .catch((error) => {
//         // handle error
//         console.log(error);
//     })
//     .then(() => {
//         // always executed
//         //console.log("done");
//     });
let stops:number=55190;
let busNum:number=601;
// 55190 - Westbound Ladner Trunk Rd @ Hwy 17A
let lookupStop = `http://api.translink.ca/RTTIAPI/V1/stops/${stops}?apiKey=${APIKey}`;
//57518 exchange, bay 7
// 57403 - SB Arthur Dr @ 4700 Block
// axios
//     .get(lookupStop)
//     .then((response: AxiosResponse<any>) => {
//         // handle success
//         console.log(response.data);
//     })
//     .catch((error) => {
//         // handle error
//         console.log(error);
//     })
//     .then(() => {
//         // always executed
//         //console.log("done");
//     });

let getEstimatesByStopNoAndRouteNo: string = `https://api.translink.ca/rttiapi/v1/stops/${stops}/estimates?apikey=${APIKey}&count=3&timeframe=120&routeNo=${busNum}`
axios
    .get(getEstimatesByStopNoAndRouteNo)
    .then((response: AxiosResponse<any>) => {
        // handle success
        //console.log(response.data);
        
        return response.data;
        // {
        //     RouteNo: '601',
        //     RouteName: 'SOUTH DELTA/BOUNDARY BAY/BRIDGEPORT',
        //     Direction: 'SOUTH',
        //     RouteMap: { Href: 'https://nb.translink.ca/geodata/601.kmz' },
        //     Schedules: [ [Object], [Object], [Object], [Object], [Object] ]
        //   }
    })
    .then(data => {
        return data[0].Schedules;
       
    })
    .then(schedules => {
        //console.log(schedules);

        for (let i=0; i<schedules.length;i++)
        {
            //console.log(schedules[i].Destination);
            if (schedules[i].Destination==='SOUTH DELTA'){
                //console.log('south delta!');
            }
        }
       
    })
    .catch((error) => {
        // handle error
        console.log(error);
    })
    .then(() => {
        // always executed
        //console.log("done");
    });

// axios
//     .get(`https://gtfs.translink.ca/v2/gtfsrealtime?apikey=${APIKey}`)
//     .then((response: AxiosResponse<any>) => {
//         // handle success
//         console.log(response);
//     })
//     .catch((error) => {
//         // handle error
//         console.log(error);
//     })
//     .then(() => {
//         // always executed
//         //console.log("done");
//     });