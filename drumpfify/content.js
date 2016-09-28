// adding #drumpf to end of <p>

// stretch
// click to view picture
setTimeout(function () {
  changeTitle()
	traverseDown(document.body);
}, 500);

function changeTitle() {
  var oldTitle = $(document).attr('title')
  $(document).attr("title", megaRegex(oldTitle));
}

function traverseDown(node) {
	var child, nextSib;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				nextSib = child.nextSibling;
				traverseDown(child);
				child = nextSib;
			} 
			break;

		case 3: // Text node
			replacementTime(node);
			break;
	}
}

function replacementTime(textNode) {
	var text = textNode.nodeValue;
	textNode.nodeValue = megaRegex(text);
}

function megaRegex(text) {
  text = text.replace(/Trump/g, "Drumpf");
  text = text.replace(/TRUMP/g, "DRUMPF");
  text = text.replace(/Make America Great Again/g, "Make Donald Drumpf Again");
  return text
}
