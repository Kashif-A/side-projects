var x = new XMLHttpRequest();
console.log('d')
x.open('GET', './styles.css');
x.send();
x.onload = function() {
	chrome.tabs.insertCSS(x.responseText);
};
