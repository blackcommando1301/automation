const puppeteer=require("puppeteer");
  

let browserPromise=puppeteer.launch({headless:false,defaultViewport:null  });
let page;

let mail="wotara8138@3dinews.com";
let password="123456";
const code=require("./code");



browserPromise.then(function(browser){
     console.log("browser is opened");
     let pagePromise=browser.newPage();
     return pagePromise;

}).then(function(pagePromise){
  page=pagePromise;
  let urlPromise=page.goto("https://www.hackerrank.com/");
  return urlPromise;

}).then(function(){
    console.log("hackerRank is opened");
    return waitAndClick('a[data-event-action="Login"]');

    
}).then(function(){
    console.log("login is clicked");
    return waitAndClick(".fl-button-wrap.fl-button-width-auto.fl-button-left .fl-button-text")
}).then(function(){
    console.log("login is clicked again")
   
    let pagewait=page.waitForSelector("#input-1")
    return pagewait;

}).then(function(){
        let mailType=page.type("#input-1",mail,{ delay: 100 });
        return mailType;

}).then(function(){
    let passwordType=page.type("#input-2",password,{ delay: 100 });
    return passwordType;
}).then(function(){
    console.log("password and mail are typed");
    return waitAndClick(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
}).then(function(){
    console.log("login is done");
    return waitAndClick(".topic-name");
}).then(function(){
    console.log("algo is clicked");
    return waitAndClick(' input[value="warmup"]');
}).then(function(){
   console.log("questions are now opened");
   let questionWait=page.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled");
   return questionWait;

}).then(function(){
    let linkQuestion=page.evaluate(function(){
        let arr=[];
        let tag=document.querySelectorAll(".challenges-list .js-track-click.challenge-list-item");
        for(let i=0;i<tag.length;i++){
            let link=tag[i].href;
          
            arr.push(link);
        }
        return arr;
    })
    
    return linkQuestion
}).then(function(arr){
   console.log("array of questions are here with us ");
  let questionPromise= questionSolver(arr[0],code.answers[0]);
  for(let i=1;i<4;i++){
      questionPromise=questionPromise.then(function(){
          let nextQuestion=questionSolver(arr[i],code.answers[i]);
          return nextQuestion;
      })
     
  }
  return questionPromise;
}).then(function(){
    console.log("all 4 are submitted");
})




// function question solver---------------------------------------------------------------------------------------------

function questionSolver(question,answer){
     return new Promise(function(resolve,reject){
    let urlPromise=page.goto(question);
    urlPromise.then(function(){

        return waitAndClick('input[type="checkbox"]');
    }).then(function(){
        console.log("checkbox is clicked");
        return waitAndClick("#input-1");
    }).then(function(){
        let answerType=page.type("#input-1",answer);
        return answerType;
    }).then(function(){
        console.log("answer is typed in custom input");
        let constroldown=page.keyboard.down("Control");
        return constroldown;
        
    }).then(function(){
        let pressA=page.keyboard.press("A");
        return pressA;
    }).then(function(){
        let pressX=page.keyboard.press("C");
        return pressX;
    }).then(function(){
        
        let constrolup=page.keyboard.up("Control");
        return constrolup;

    }).then(function(){
        console.log("code is cuted");
        return waitAndClick(".monaco-editor.no-user-select.vs");
    }).then(function(){
        let constroldown=page.keyboard.down("Control");
        return constroldown;
    }).then(function(){
        let pressA=page.keyboard.press("A");
        return pressA;
    }).then(function(){
        let pressV=page.keyboard.press("V");
        return pressV;
    }).then(function(){
        
        let constrolup=page.keyboard.up("Control");
        return constrolup;

    }).then(function(){
         return waitAndClick(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
    }).then(function(){
        console.log("question is submitted");
        resolve();
    })
})
}




// function wait and click_--------------------------------------------------------------------------------------

function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise=page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise=page.click(selector);
            return clickPromise;
        }).then(function(){
            return resolve();
        })
    })
}