var red=0;
var green=0;
var blue=0;
var backRed=0;
var backGreen=0;
var backBlue=0;

var tagArray = [ "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];


function updateFont() {

		for(var i in tagArray){
			var fontList = document.getElementsByTagName(tagArray[i]);
			for (var j=0; j < fontList.length; j++){
				fontList[j].style.color= "rgb("+red+","+ green+","+ blue+")";
			}
		}
		
}

function checkcolors(redv,greenv,bluev) {
		if (typeof redv != undefined) {
			red = redv;
		}
		if (typeof greenv != undefined) {
			green = greenv;
		}
		if (typeof bluev != undefined) {
			blue = bluev;
		}
}


function fontColor(request) {
	checkcolors(request.red,request.green, request.blue);
	updateFont();
}


//////////////////////////////////////////////////// END OF FONT COLOR ////// START OF BACKGROUND COLOR///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateBack() {
		for(var i in tagArray){
			var list = document.getElementsByTagName(tagArray[i]);
			for (var j=0; j < list.length; j++){
				list[j].style.backgroundColor= "rgb("+backRed+","+ backGreen+","+ backBlue+")";
			}
		}		
}

function checkBackgroundColors(backRedv,backGreenv,backBluev) {
		if (typeof backRedv != undefined) {
			backRed = backRedv;
		}
		if (typeof backGreenv != undefined) {
			backGreen = backGreenv;
		}
		if (typeof backBluev != undefined) {
			backBlue = backBluev;
		}
}


function backColor(request) {
	checkBackgroundColors(request.backRed,request.backGreen, request.backBlue);
	updateBack();
}



function choose(request,sender,sendResponse) {
	console.log('content script sent a message!' );
	sendResponse({response: "My response fromn page is complete"});
	
	if(typeof request.red != undefined) {
			fontColor(request);
	}
	if(typeof request.backRed != undefined) {
			backColor(request);
	}

	chrome.runtime.onMessage.removeListener(choose);
}


chrome.runtime.onMessage.addListener(choose);
