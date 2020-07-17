// The function below is executed in the context of the inspected page.
var page_getProperties = function() {
  var data = window.jQuery && $0 ? jQuery.data($0) : {};
  // Make a shallow copy with a null prototype, so that sidebar does not
  // expose prototype.
  var props = Object.getOwnPropertyNames(data);
  var copy = { __proto__: null };
  for (var i = 0; i < props.length; ++i)
    copy[props[i]] = data[props[i]];
  return copy;
}

const panels = chrome.devtools.panels

var xhr = new XMLHttpRequest(),
	stylesheet = 'styles.css';

if (/Chrome\/(\d\d)/.exec(navigator.userAgent)[1] > 43) {
	stylesheet = 'styles.css';
}

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);

panels.elements.createSidebarPane(
    "fffff",
    function(sidebar) {
  function updateElementProperties() {
    sidebar.setExpression("(" + page_getProperties.toString() + ")()");
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(
      updateElementProperties);
});