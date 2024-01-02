const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll(".dropdown select");
let exchangeBtn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
let finalVal = document.querySelector(".msg");

// dropdowns.forEach((select)=>{
//     Object.keys(countryList).forEach((currCode) => {
//         let option = document.createElement("option");
//         option.innerText=currCode;
//         option.value= currCode;
//         select.append(option);
//     });
// })

for( let select of dropdowns){
    for( let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.value=currCode;
        newOption.innerText= currCode;
        select.append(newOption);
        if(select.name === "from" && currCode ==="USD"){
            newOption.selected="selected";
        } else if(select.name ==="to" && currCode ==="INR"){
            newOption.selected ="selected";
        }
    }
    select.addEventListener("change",(event)=>{
        getFlag(event.target);
        let 
    });
}


const getFlag= (element)=>{
    let currCode= element.value;
    let countryCode = countryList[currCode];
    console.log(countryCode);
    newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    element.parentElement.querySelector("img").setAttribute("src",newSrc);
}



exchangeBtn.addEventListener("click",async (event)=>{
    event.preventDefault();
    let amount = document.querySelector("form input");
    amountValue = amount.value;
    if(amountValue ==="" || amountValue<1){
        amount.value=1;
    }

    newURL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;

    let response = await fetch(newURL);
    let data = await response.json();
    let rate = data[toCurrency.value.toLowerCase()];
    console.log(rate);

    finalVal.innerText= `${amountValue}${fromCurrency.value}=${rate*amountValue}${toCurrency.value}`;
});