chrome.storage.local.get("version",function(a)
{
  a.version?a.version<4&&chrome.tabs.create({url:"/upgraded.html"}):chrome.tabs.create({url:"/installed.html"}),
  chrome.storage.local.set({version:4})}),
  chrome.storage.local.get("installed",function(a){a.installed||(chrome.tabs.query({},
  function(a){for(var b in a)chrome.tabs.executeScript(a[b].id,{file:"cs.js"})}),
  chrome.storage.local.set({installed:!0}))
  });
