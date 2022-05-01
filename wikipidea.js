const puppeteer=require("puppeteer");
let search=process.argv[2];
let browserPromise=puppeteer.launch({headless:false});
let page;


browserPromise.then(function(browser){
    let newPage=browser.newPage();
    
    return newPage;
}).then(function(newPage){
    page=newPage;
    let wkpromise=page.goto("https://en.wikipedia.org/wiki/Main_Page");
    return wkpromise;
}).then(function(){
    console.log("wikipidea is opened");
    let waitwiki=page.waitForSelector(".vector-search-box-input");
    return waitwiki;
}).then(function(){
    
    let typeSearch=page.type(".vector-search-box-input",search,{ delay: 100 });
    
    return typeSearch;
}).then(function(){
    let clicksearch=page.click("#searchButton");
    return clicksearch;
}).then(function(){
    console.log("task completed");
})