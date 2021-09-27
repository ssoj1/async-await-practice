"use strict";

// BASE_URL = "http://numbersapi.com";

async function favoriteNum(){
    let response = await axios.get("http://numbersapi.com/9?json");
    console.log(response.data)
}

async function multipleNums() {
    let response = await axios.get("http://numbersapi.com/9..13?json");
    console.log(response.data)
}

async function fourFacts() {
    let response1 = await axios.get("http://numbersapi.com/9?json");
    let response2 = await axios.get("http://numbersapi.com/9?json");
    let response3 = await axios.get("http://numbersapi.com/9?json");
    let response4 = await axios.get("http://numbersapi.com/9?json");

    console.log(response1.data, 
                response2.data, 
                response3.data, 
                response4.data)
}

// Why aren't these working?
// async function fourFactsPartTwo() {
//     let response1 = axios.get("http://numbersapi.com/9?json");
//     let response2 = axios.get("http://numbersapi.com/9?json");
//     let response3 = axios.get("http://numbersapi.com/9?json");
//     let response4 = axios.get("http://numbersapi.com/9?json");

//     let results = [await response1.data, 
//                 await response2.data, 
//                 await response3.data, 
//                 await response4.data];

//     console.log(results)
// }

// function fourFactsPartThree() {
//     let response1 = axios.get("http://numbersapi.com/9?json");
//     let response2 = axios.get("http://numbersapi.com/9?json");
//     let response3 = axios.get("http://numbersapi.com/9?json");
//     let response4 = axios.get("http://numbersapi.com/9?json");

//     let results = Promise.all([response1.data, 
//                 response2.data, 
//                 response3.data, 
//                 response4.data]);
//      console.log(results)
// }
