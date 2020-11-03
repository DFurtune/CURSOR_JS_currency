let USD_NBU = 28.40;
let EUR_NBU = 33.50;
let RUB_NBU = 0.36;

const USD_Sell = document.getElementById('USD_Sell');
const USD_Buy = document.getElementById('USD_Buy');
const EUR_Sell = document.getElementById('EUR_Sell');
const EUR_Buy = document.getElementById('EUR_Buy');
const RUB_Sell = document.getElementById('RUB_Sell');
const RUB_Buy = document.getElementById('RUB_Buy');

let marj_sell = 1.01;
let marj_buy = 0.99;

let USDS = USD_NBU * marj_sell;
let USDB = USD_NBU * marj_buy;
let EURS = EUR_NBU * marj_sell
let EURB = EUR_NBU * marj_buy
let RUBS = RUB_NBU * marj_sell
let RUBB = RUB_NBU * marj_buy


USD_Sell.innerText = USDS.toFixed(3);
USD_Buy.innerText = USDB.toFixed(3);
EUR_Sell.innerText = EURS.toFixed(3);
EUR_Buy.innerText = EURB.toFixed(3)
RUB_Sell.innerText = RUBS.toFixed(3)
RUB_Buy.innerText = RUBB.toFixed(3)
