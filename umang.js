const puppeteer= require("puppeteer");
// let near;
// let input=process.argv.slice(2);

(async function(){
    let browser= await puppeteer.launch({headless:false,defaultViewport:null });
    let page =await browser.newPage();
    await page.goto("https://web.umang.gov.in/web_new/login?redirect_to=");
    await page.waitForSelector('input[minlength="4"]');
    await page.type('[inputmode="numeric"]',"9891293304",{delay:100});
    await page.type('input[minlength="4"]',"9891",{delay:100});
    await page.click('button[type="submit"');
    await page.waitForSelector('input[placeholder="Search"]');
    await page.click('input[placeholder="Search"]');
    await page.type('input[placeholder="Search"]',"Nearest Vaccination Centre",{delay:100});
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
//    let near= await page.evaluate(function(){
//         let res=document.querySelectorAll(".card-title");
//          near=res[5];
//          return near;
//     });
//     await page.click(near);
   await page.waitForSelector('img[alt="Nearest Vaccination Centre"]');
   await page.click('img[alt="Nearest Vaccination Centre"]');

   await page.waitForSelector('#mat-input-0',{ waitUntil : 'networkidle2',timeout:0});
   await page.type('#mat-input-0',"110085");


}())