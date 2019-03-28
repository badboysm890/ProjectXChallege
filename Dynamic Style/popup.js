
function main() {
	$('.menus').hide();
	
	$('.button1').on('click', function() {
			$(this).next().slideToggle(400);
			$(this).toggleClass('active');
		});
	$('.button2').on('click', function() {
			$(this).next().slideToggle(400);
			$(this).toggleClass('active');
	});
	$('.button3').on('click', function() {
			chrome.tabs.reload();
	});
		
			$("#bar1").change(function (){
				
				var newValue= document.getElementById("bar1").value;
				document.getElementById("redRange").innerHTML=newValue;
		
				var myBrowser=chrome.tabs;
				myBrowser.executeScript(null, { 
					file: "content.js" 
				});
				console.log('sending');
				//now send the script a message
				chrome.tabs.query({active: true, currentWindow: true}, function(mytabs) {
					chrome.tabs.sendMessage(mytabs[0].id, {red: newValue, green:  document.getElementById("bar2").value, blue: document.getElementById("bar3").value}, function(response) {
						console.log("Message from the content script:");
						console.log(response.response);			
					});	
				});
			});
				
			$("#bar2").change(function (){
				var newValue= document.getElementById("bar2").value;
				document.getElementById("greenRange").innerHTML=newValue;
				
				
				var myBrowser=chrome.tabs;
				myBrowser.executeScript(null, { 
					file: "content.js" 
				});
				console.log('sending');
				//now send the script a message
				chrome.tabs.query({active: true, currentWindow: true}, function(mytabs) {
					chrome.tabs.sendMessage(mytabs[0].id, {red: document.getElementById("bar1").value, green: newValue, blue: document.getElementById("bar3").value}, function(response) {
						console.log("Message from the content script:");
						console.log(response.response);			
					});	
				});
				
			});
			
			
			$("#bar3").change(function (){
				var newValue= document.getElementById("bar3").value;
				document.getElementById("blueRange").innerHTML=newValue;
				
				var myBrowser=chrome.tabs;
				myBrowser.executeScript(null, { 
					file: "content.js" 
				});
				console.log('sending');
				//now send the script a message
				chrome.tabs.query({active: true, currentWindow: true}, function(mytabs) {
					chrome.tabs.sendMessage(mytabs[0].id, {red: document.getElementById("bar1").value, green:  document.getElementById("bar2").value, blue: newValue}, function(response) {
						console.log("Message from the content script:");
						console.log(response.response);			
					});	
				});
				
			});
			
			$("#bar4").change(function (){
				var newValue= document.getElementById("bar4").value;
				document.getElementById("redRange2").innerHTML=newValue;
				
				var myBrowser=chrome.tabs;
				myBrowser.executeScript(null, { 
					file: "content.js" 
				});
				console.log('sending');
				//now send the script a message
				chrome.tabs.query({active: true, currentWindow: true}, function(mytabs) {
					chrome.tabs.sendMessage(mytabs[0].id, {backRed: newValue, backGreen:  document.getElementById("bar5").value, backBlue: document.getElementById("bar6").value}, function(response) {
						console.log("Message from the content script:");
						console.log(response.response);			
					});	
				});
			});
			$("#bar5").change(function (){
				var newValue= document.getElementById("bar5").value;
				document.getElementById("greenRange2").innerHTML=newValue;
				
				var myBrowser=chrome.tabs;
				myBrowser.executeScript(null, { 
					file: "content.js" 
				});
				console.log('sending');
				//now send the script a message
				chrome.tabs.query({active: true, currentWindow: true}, function(mytabs) {
					chrome.tabs.sendMessage(mytabs[0].id, {backRed: document.getElementById("bar4").value, backGreen:  newValue, backBlue: document.getElementById("bar6").value}, function(response) {
						console.log("Message from the content script:");
						console.log(response.response);			
					});	
				});
			});
			$("#bar6").change(function (){
				var newValue= document.getElementById("bar6").value;
				document.getElementById("blueRange2").innerHTML=newValue;
				
				var myBrowser=chrome.tabs;
				myBrowser.executeScript(null, { 
					file: "content.js" 
				});
				console.log('sending');
				//now send the script a message
				chrome.tabs.query({active: true, currentWindow: true}, function(mytabs) {
					chrome.tabs.sendMessage(mytabs[0].id, {backRed: document.getElementById("bar4").value, backGreen:  document.getElementById("bar5").value, backBlue: newValue}, function(response) {
						console.log("Message from the content script:");
						console.log(response.response);			
					});	
				});
			});

			
			//testRequest();
		
}


// Tests the roundtrip time of sendRequest().
/*function testRequest() {
  
	var myBrowser = chrome.tabs;
	myBrowser.executeScript(null, {
		file: "content.js"
	});
}*/


$(document).ready(main);
