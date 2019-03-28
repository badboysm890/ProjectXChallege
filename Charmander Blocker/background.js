//no use for this bakground right now 
function blockRequest(details) 
{ 
    return {cancel: true}; 
} 
function updateFilters(urls) 
{
     if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest)) 
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest); 
     chrome.webRequest.onBeforeRequest.addListener(blockRequest, 
        {urls: ["*://*.google.com/*"]}, ['blocking']); 
} updateFilters();