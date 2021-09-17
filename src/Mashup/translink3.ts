import axios, { AxiosResponse } from "axios";

const APIKey = "XQD5MTNaqWKeTTLMwY9m";

interface Stop {
  StopNo: number;
  Name: string;
  BayNo: string;
  City: string;
  OnStreet: string;
  AtStreet: string;
  Latitude: number;
  Longitude: number;
  WheelchairAccess: number;
  Distance: number;
  Routes: string;
}

let getStopsInLadner: string = `http://api.translink.ca/RTTIAPI/V1/stops?apiKey=${APIKey}&lat=49.090096&long=-123.081999`;
let currentlocation: number[] = [49.084416, -123.091248]; //dummy coords
axios
  .get(getStopsInLadner)
  .then((response: AxiosResponse<any>): Stop[] => {
    // console.log(response.data);
    return response.data;
  })
  .then((data: Stop[]) => {
    data.forEach((d) => console.log(d.Latitude, d.Longitude));
  });
//   .then((data) => {
//     return data.map(function (d: { Latitude: any; Longitude: any }): any {
//       return { lat: d.Latitude, long: d.Longitude };
//     });
//   })
//   .then((data) => {
//     return data.map((d: { lat: any; long: any }): any => {
//       return [
//         getDifference(d.lat, currentlocation[0]),
//         getDifference(d.long, currentlocation[1])
//       ];
//     });
//   })
//   .then((data) => {
//     //console.log(data);
//     data.forEach((d: any) => {
//       const [x, y] = d;
//       //console.log(x,y);
//     });
//   });
// for (let x=0;x<data.length;x++){
//     console.log(data[x].Latitude,data[x].Longitude);
//     return({lat:data[x].Latitude,long:data[x].Longitude});
// }
//})
// .then(data=>{
//     console.log(data);
// })

let getDifference = (num1: number, num2: number) => {
  const difference = Math.abs(num1 - num2);
  //const difference = num1>num2?num1-num2:num2-num1;
  return difference;
};
//console.log(getDifference(-123,-223));
