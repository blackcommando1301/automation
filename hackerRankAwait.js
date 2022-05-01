const puppeteer=require("puppeteer");

let mail="wotara8138@3dinews.com";
let password="123456";
const code=require("./code");

(async function(){
    let browser= await puppeteer.launch({headless:false,defaultViewport:null })
    let page=await browser.newPage()
    await page.goto("https://www.hackerrank.com/")
    await waitAndClick('a[data-event-action="Login"]',page);
    await waitAndClick(".fl-button-wrap.fl-button-width-auto.fl-button-left .fl-button-text",page)
    await page.waitForSelector("#input-1");
    await page.type("#input-1",mail,{ delay: 100 });
    await page.type("#input-2",password,{ delay: 100 });
    await waitAndClick(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",page);
     await waitAndClick(".topic-name",page);
     await waitAndClick(' input[value="warmup"]',page);
     
     await page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
    let arr= await page.evaluate(function(){
        let arr=[];
        let tag=document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        for(let i=0;i<tag.length;i++){
            let link=tag[i].href;
          
            arr.push(link);
        }
        return arr;
           });
           for(let i=0;i<4;i++){
               await questionSolver(arr[i],code.answers[i],page);

           }
        })();   


async function waitAndClick(selector,page){
   await page.waitForSelector(selector);
   await page.click(selector);
}

async function questionSolver(question,answer,page){
    await page.goto(question);
    await waitAndClick('input[type="checkbox"]',page);
    await waitAndClick("#input-1",page);
    await page.type("#input-1",answer);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("C");
    await page.keyboard.up("Control");
    await waitAndClick(".monaco-editor.no-user-select.vs",page);
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.press("v");
    await page.keyboard.up("Control");
    await waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled",page);
    
}
