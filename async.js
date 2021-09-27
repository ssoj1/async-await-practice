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

async function shuffleDeck() {
    let cardResponse = await axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=1`);
    console.log('we got here')
    let cardSuit = cardResponse.data.cards[0].suit

    let cardValue = cardResponse.data.cards[0].value

    let deckId = cardResponse.data.deck_id
    
    // console.log(`${cardValue} of ${cardSuit}`)

}

async function getTwoCards(){
    let cardResponse = await axios.get(`http://deckofcardsapi.com/api/deck/new/draw/?count=1`);
    console.log(cardResponse)

    let deckId = cardResponse.data.deck_id
    
    let card1Suit = cardResponse.data.cards[0].suit
    let card1Value = cardResponse.data.cards[0].value

    let cardResponse2 = await axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    console.log("second response",cardResponse2)

    let card2Suit = cardResponse2.data.cards[0].suit
    let card2Value = cardResponse2.data.cards[0].value

    console.log(`card 1 is a ${card1Value} of ${card1Suit}`, `card 2 is a ${card2Value} of ${card2Suit}`)

}