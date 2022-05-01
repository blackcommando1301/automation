const puppeteer=require("puppeteer");
  let input=process.argv.slice(2);


//    const mail="8588904417";
//    const password="Utkarsh@123"

(async function(){
    let browserPromise=await puppeteer.launch({headless:false,defaultViewport:null });
    let page=await browserPromise.newPage();
    await page.goto("https://www.facebook.com/");
      await page.waitForSelector('input[type="text"]');
      await page.type('input[type="text"]',"8588904417",{delay:100});
      await page.type('input[type="password"]',"Utkarsh@123",{delay:100});
      await page.click('button[value="1"]');
      
      await page.waitForSelector(".lzcic4wl.gs1a9yip.br7hx15l.h2jyy9rg.n3ddgdk9.owxd89k7.rq0escxv.j83agx80.a5nuqjux.l9j0dhe7.k4urcfbm.kbf60n1y.b3i9ofy5");
       
      await page.click(".lzcic4wl.gs1a9yip.br7hx15l.h2jyy9rg.n3ddgdk9.owxd89k7.rq0escxv.j83agx80.a5nuqjux.l9j0dhe7.k4urcfbm.kbf60n1y.b3i9ofy5")
      await page.keyboard.press("Enter");
      await page.type('input[dir="ltr"]',input,{delay:2000});
        // await page.waitForSelector("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh jq4qci2q a3bd9o3v lrazzd5p oo9gr5id");
        // await page.click("d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh jq4qci2q a3bd9o3v lrazzd5p oo9gr5id");
        // await page.keyboard.press("Enter");
        // await page.waitForSelector('image[preserveAspectRatio="xMidYMid slice"]');
        
        //  await page.click('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gpro0wi8.oo9gr5id.lrazzd5p.dkezsu63');
        //  await page.click(".a8c37x1j.ni8dbmo4.stjgntxs.l9j0dhe7.nkwizq5d.roh60bw9.hop8lmos.scwd0bx6.n8tt0mok.hyh9befq.jwdofwj8.r8blr3vg");
        await page.click('input[dir="ltr"]');
        await page.click('input[dir="ltr"]');
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("ArrowDown");
        await page.keyboard.press("Enter");
        await page.waitForSelector('div[aria-label="Message"]');
        await page.click('div[aria-label="Message"]');
         await page.waitForSelector('.gfl2vlpq.qv66sw1b.r9r71o1u.eagtllmd.pipptul6.oqcyycmt.km676qkl.ad2k81qe.myj7ivm5.f9o22wc5');
        // await page.click('.j83agx80.lhclo0ds.bkfpd7mw');
        // await page.type('div[aria-label="Message"]',"HAPPY BIRTHDAY")
        let s="HAPPY BIRTHDAY MAY GOD BLESS YOU , BE HAPPY IN UR LYF"
        for(let i=0;i<s.length;i++){
          let a=s.charAt(i);
          await page.keyboard.press(a);
        }
        await page.keyboard.press("Enter");
        

        

    })();