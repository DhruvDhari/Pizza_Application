//HTTPS  /  HTTPS Call...
// service will contain the logic

import url from '../utils/constant.js'; 
async function makeNetworkCall(){
    try{
        const response =await fetch(url);
        const object =await response.json();
      
        return object;
    }
    catch(err){
        console.log("error :",err);
        throw err;
    }
}
// this import wont work because module where import is defined is outside the file,so no access to import

//  async function makeNetworkCall(){
//     // const promise= await fetch(url);
//     const promise= await fetch("https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json");
//     const data =await promise.json();
//     console.log('data is ',data);
// }

export default makeNetworkCall();

// const fetchData= async()=>{
//     const resp = await fetch(url);

//     const data = await resp.json();
//     console.log('data is ',data);
// }

// fetchData();