var currentStyle={font_weight:null,font_style:null,font_family:{name:null,type:!1},font_size:null};
chrome.storage.local.get("styles",function(a){a&&a.styles&&a.styles.domain_styles&&a.styles.domain_styles[document.location.host]?"global"===a.styles.domain_styles[document.location.host].type?a.styles.global_style&&(currentStyle=a.styles.global_style,
  updateStyle(currentStyle)):"custom"===a.styles.domain_styles[document.location.host].type&&(currentStyle=a.styles.domain_styles[document.location.host],
  updateStyle(currentStyle)):a&&a.styles&&a.styles.global_style&&(currentStyle=a.styles.global_style,updateStyle(currentStyle))});var style=document.createElement("style");style.type="text/css";var wf=document.createElement("link");chrome.extension.onMessage.addListener(function(a,b,c){if("style"==a.msg){if(!a.value)return;currentStyle=a.value,updateStyle(a.value),c()}else c()});var updateStyle=function(a){var b="* {";for(var c in a)if("font_style"==c&&a[c])b+="font-style:"+a[c]+" !important;";
  else if("font_weight"==c&&a[c])b+="font-weight:"+a[c]+" !important;";
  else if("font_family"==c&&a[c]&&a[c].name&&a[c].type)
  {if("google"===a[c].type)wf.href=("https:"==document.location.protocol?"https":"http")+"://fonts.googleapis.com/css?family="+a[c].name.replace(/\s/g,"+"),
  wf.type="text/css",
  wf.rel="stylesheet",
  document.head?document.head.appendChild(wf):document.documentElement.appendChild(wf);
  else if("standard"===a[c].type)document.head?document.head.appendChild(wf):document.documentElement.appendChild(wf);
  else if("custom"===a[c].type){var d="@font-face{  font-family: '"+a[c].name+"';src: url("+a[c].url+");} ";
  b=d+b}b+="font-family: '"+a[c].name+"' !important;"}else"font_size"==c&&a[c]&&(b+="font-size:"+a[c]+"px !important;",
  b+="line-height: normal !important;");b+="}",
  style.innerText=b,
  document.head?document.head.appendChild(style):document.documentElement.appendChild(style)};
