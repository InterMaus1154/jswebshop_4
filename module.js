

/*This file is a complete mess, NEVER ask about it*/
/*It is not that messy though, I just store everything here which can be used externally*/
export function appendElements(parent, children){
    for(let i=0;i<children.length;i++){
        parent.append(children[i])
    }
}

export const counter_element = document.querySelector(".counter");

const nav = document.querySelector("nav");

export const listItems = nav.querySelectorAll("li");

export class Product{
    constructor(jsonObject, imageFolder, qty) {
        this.jsonObject = jsonObject;
        this.imageFolder = imageFolder;
        this.qty = qty;
    }
}

export const getTimeForCaching = new Date().getTime();

export const pageIDHome = "home";
export const pageIDProducts = "products";
export const pageIDBasket = "basket";

export const MAX_COUNTDOWN_TIME = 10;

const numbersNeeded = 4;
let arrayOfRandoms = [];
function generateRandomNumbers(){
    const set = new Set();
    for(let i=0;i<numbersNeeded;i++){
        set.add(
            Math.floor(Math.random()*8)
        );
    }
    if(set.size != numbersNeeded){
        generateRandomNumbers();
    }else{
        arrayOfRandoms = Array.from(set);
    }
}


export const getArrayOfRandomNumbers = () =>{
    generateRandomNumbers();
    return arrayOfRandoms;
}
