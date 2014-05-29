// Version 1.0
// Modified by Harvey Williams

// This script works out the time it takes for the page to load and it
// creates a div which by default is located at the top left of the page

// This script is a modified version of the script available in The
// Smashing Book #4 on page 133

window.onload=function() {
	var now = new Date().getTime();
	// Get the performance object
	window.performance = window.performance || window.mozPerformance || window.msPerformace || window.webkitPerformance || {};
	var timing = performance.timing || {};
	if (timing) {
		var load_time = now - timing.navigationStart;
		// Create a div
		var div = document.createElement('div');
		document.body.appendChild(div);
		div.style.zIndex = '5';
		div.style.position = 'absolute';
		div.style.top = '0';
		div.style.left = '0';
		div.style.margin = '5px';
		div.style.color = 'white';
		div.innerHTML = load_time + 'ms';
	}
}