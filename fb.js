const puppeteer=require("puppeteer");
  let input=process.argv.slice(2);



  (async function(){
    let browserPromise=await puppeteer.launch({headless:false,defaultViewport:null });
    let page=await browserPromise.newPage();
    await page.goto("https://www.facebook.com/messenger/");
    await page.waitForSelector('input[name="email"]');
    await page.type('input[name="email"]',"8588904417",{delay:100});
    await page.type('input[name="pass"]',"Utkarsh@123",{delay:100});
    await page.click('div[aria-label="Accessible login button"]');
    await page.waitForSelector('div[aria-label="Messenger"]');
    await page.click('div[aria-label="Messenger"]');
    await page.waitForSelector('input[aria-label="Search Messenger"]');
    await page.click('input[aria-label="Search Messenger"]');
    await page.type('input[aria-label="Search Messenger"]',input,{delay:6000});
    await page.click('input[aria-label="Search Messenger"]');
    // await page.keyboard.press("Backspace");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
    // await page.waitForSelector(".kvgmc6g5.oygrvhab");
    // await page.click("oo9gr5id lzcic4wl l9j0dhe7 gsox5hk5 buofh1pr tw4czcav cehpxlet ");
    


  })();