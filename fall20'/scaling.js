function load()	{
	var parentHeight = (document.getElementById('intro-height').clientHeight) * .8
	document.getElementById('intro-height-applied').style.height = parentHeight + "px"

	var parentHeight2 = (document.getElementById('content-height').clientHeight) * .9
	document.getElementById('content-height-applied').style.height = parentHeight2 + "px"
}

function resize()	{
	w = document.body.clientWidth;
	var targetWidth = 1190;
	if ( w >= targetWidth) {     
		var parentHeight = (document.getElementById('intro-height').clientHeight) * .8
		document.getElementById('intro-height-applied').style.height = parentHeight + "px"
	} else	{
		var parentHeight = (document.getElementById('intro-height').clientHeight) * .6
		document.getElementById('intro-height-applied').style.height = parentHeight + "px"
	}
}