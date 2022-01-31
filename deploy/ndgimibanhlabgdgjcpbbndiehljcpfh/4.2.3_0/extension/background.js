var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};
var devtoolsRegEx=/^chrome-devtools:\/\//,connections={},clickEnabled=!0,master={},API=chrome||browser,contentWindowId="",firebaseConfig={apiKey:"AIzaSyC2ZG9EDE5yxiNhgoG4UJHEgnBVEC9r2g4",authDomain:"selectorshub-6188d.firebaseapp.com",databaseURL:"https://selectorshub-6188d-default-rtdb.firebaseio.com/",projectId:"selectorshub-6188d",storageBucket:"selectorshub-6188d.appspot.com",messagingSenderId:"813208140204",appId:"1:813208140204:web:8dd4489d47288035d86209",measurementId:"G-DCR9BKEVRD"};firebase.initializeApp(firebaseConfig);
var database=firebase.database(),isFirefox="undefined"!==typeof InstallTrigger,browserType=chrome;isFirefox&&(browserType=browser);var messageToContentScript=function(a){browserType.tabs.sendMessage(a.tabId,a)};
browserType.runtime.onConnect.addListener(function(a){var b=function(c,d,e){c&&"DeattachStudio"===c.message&&(clickEnabled=!0);"init"==c.name?connections[c.tabId]=a:"active"==c.name?window.browserType.windows.update(contentWindowId,{focused:!0}):"openStudio"==c.name?clickEnabled?openStudioWindow():window.browserType.windows.update(contentWindowId,{focused:!0}):messageToContentScript(c)};a.onMessage.addListener(b);a.onDisconnect.addListener(function(c){c.onMessage.removeListener(b);for(var d=Object.keys(connections),
e=0,f=d.length;e<f;e++)if(connections[d[e]]==c){delete connections[d[e]];break}})});var relXpath="",relCssSelector="",jspath="",absXpath="",oldValue=[],contextOption="active",relXpathChecked="relXpathOn",cssSelectorChecked="cssSelectorOff",jspathChecked="jspathOff",absXpathChecked="absXpathOff";function deleteContextMenuItem(a){try{browserType.contextMenus.remove(a,function(){})}catch(b){}}
function createContextMenuItem(a,b){contextOption=browserType.contextMenus.create({title:a,id:b,parentId:"parent",contexts:["all"]});oldValue.push(contextOption)}
browserType.runtime.onMessage.addListener(function(a,b,c){a.contextMenu&&(contextMenu=a.contextMenu,browserType.storage.local.set({contextMenu:contextMenu},function(){}),setTimeout(function(){if(contextMenu.includes("inactive"))deletePreviousMenuItems();else try{createContextMenu()}catch(d){}},100));a&&"AttachStudio"===a.message&&(clickEnabled=!1);a&&"DeattachStudio"===a.message&&(clickEnabled=!0);if(b.tab)if(devtoolsRegEx.test(b.tab.url)){if("shown"===a.event||"hidden"===a.event)b=b.tab.id,b in connections&&
connections[b].postMessage(a);messageToContentScript(a)}else b=b.tab.id,b in connections&&connections[b].postMessage(a);return!0});
browserType.contextMenus.onClicked.addListener(function(a,b){browserType.tabs.query({active:!0,currentWindow:!0},function(c){"parent1"==a.menuItemId?browserType.tabs.sendMessage(c[0].id,{name:"copy relXpath"},function(d){}):"parent2"==a.menuItemId?browserType.tabs.sendMessage(c[0].id,{name:"copy relCssSelector"},function(d){}):"parent3"==a.menuItemId?browserType.tabs.sendMessage(c[0].id,{name:"copy jspath"},function(d){}):"parent4"==a.menuItemId?browserType.tabs.sendMessage(c[0].id,{name:"copy absXpath"},
function(d){}):"parent7"==a.menuItemId?browserType.tabs.sendMessage(c[0].id,{name:"copy testRigor"},function(d){}):"parent5"==a.menuItemId?openLink("https://bit.ly/selectorshub_training"):"parent6"==a.menuItemId&&openLink("https://bit.ly/shub_courses")})});
var deletePreviousMenuItems=function(){if(0<oldValue.length)try{for(var a=0;a<oldValue.length;a++)browserType.contextMenus.remove(oldValue[a],function(){})}catch(b){}oldValue=[]},installURL="https://bit.ly/4_Playlist",updateURL="https://www.selectorshub.com/changelog/",uninstallURL="https://www.selectorshub.com/uninstall/",manifest=browserType.runtime.getManifest();browserType.runtime.setUninstallURL(uninstallURL,function(){});
var installedListener=function(a){"install"==a.reason?(installNotification(),browserType.notifications.onClicked.addListener(onClickInstallNoti)):"update"==a.reason&&(updateNotification(),browserType.notifications.onClicked.addListener(onClickNoti))};function onClickInstallNoti(){browserType.tabs.create({url:installURL})}function onClickNoti(){browserType.tabs.create({url:updateURL})}
var updateNotification=function(){browserType.notifications.create({title:"SelectorsHub",message:"Click here to see the Changelog of new version "+manifest.version,type:"basic",iconUrl:"logo-128.png"})},installNotification=function(){browserType.notifications.create("onInstalled",{title:"SelectorsHub",message:"Refresh the opened tab & watch the video tutorial to make best use of SelectorsHub",type:"basic",iconUrl:"logo-128.png"})};browserType.runtime.onInstalled.addListener(installedListener);
var contextMenu="active";browserType.storage.local.get("contextMenu",function(a){(contextMenu=a.contextMenu)?contextMenu.includes("inactive")?deletePreviousMenuItems():createContextMenu():createContextMenu()});function openLink(a){browserType.tabs.create({url:a})}
function createContextMenu(){contextOption=browserType.contextMenus.create({id:"parent",title:"SelectorsHub",contexts:["all"]});oldValue.push(contextOption);contextOption=browserType.contextMenus.create({title:"Copy Relative XPath",id:"parent1",parentId:"parent",contexts:["all"]});oldValue.push(contextOption);contextOption=browserType.contextMenus.create({title:"Copy Relative cssSelector",id:"parent2",parentId:"parent",contexts:["all"]});oldValue.push(contextOption);contextOption=browserType.contextMenus.create({title:"Copy JS path",
id:"parent3",parentId:"parent",contexts:["all"]});oldValue.push(contextOption);contextOption=browserType.contextMenus.create({title:"Copy testRigor Path",id:"parent7",parentId:"parent",contexts:["all"]});oldValue.push(contextOption);contextOption=browserType.contextMenus.create({title:"Copy abs XPath",id:"parent4",parentId:"parent",contexts:["all"]});oldValue.push(contextOption);contextOption=browserType.contextMenus.create({title:"Register for Training",id:"parent5",parentId:"parent",contexts:["all"]});
oldValue.push(contextOption);contextOption=browserType.contextMenus.create({title:"Advance Automation Course",id:"parent6",parentId:"parent",contexts:["all"]});oldValue.push(contextOption)}
function openStudioWindow(){browser.windows.create({url:API.runtime.getURL("testCaseStudio/studioWindow.html"),type:"popup",height:600,width:400}).then(function(a){master[a.id]=a;contentWindowId=a.id;browser.tabs.sendMessage(contentWindowId,{type:"studioId",studioId:a});browser.tabs.query({active:!0,windowId:a.id,status:"complete"}).then(function(b){1!=b.length&&(master[a.id]=a.id)})})["catch"](function(a){})}
browserType.runtime.onMessage.addListener(function(a,b,c){b=a.email.split("@")[0].replace(".","").replace("$","").replace("[","").replace("]","").replace("#","");if("register"==a.type){var d=a.email,e=a.password;b=a.email.split("@")[0].replace(".","").replace("$","").replace("[","").replace("]","").replace("#","");firebase.auth().createUserWithEmailAndPassword(d,e)["catch"](function(f){});firebase.auth().onAuthStateChanged(function(f){});database.ref("/users/"+b).set({timeStamp:a.timeStamp,browser:a.browser,
country:a.country,city:a.city,email:a.email,company:a.company,OS:a.OS});c({message:"created"})}else if("login"==a.type)firebase.database().ref("users/"+b).once("value",function(f){f.exists()?c({message:"registred"}):c({message:"not registred"})})});