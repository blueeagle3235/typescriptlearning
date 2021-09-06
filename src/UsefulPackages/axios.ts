import https from "https";
import axios, { AxiosResponse } from "axios";

//https://github.com/axios/axios
//https://jsonplaceholder.typicode.com

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

// axios("http://google.com/").then(function (response: any) {
//   console.log(response.data);
// });

axios
  .get("https://jsonplaceholder.typicode.com/posts", { httpsAgent })
  .then((response: AxiosResponse<any>) => {
    // handle success
    console.log(response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
    console.log("done");
  });
