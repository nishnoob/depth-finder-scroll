window.addEventListener('scroll',()=> indicateScrollBar());

function insertMultipleChildren() {
	var childrenAmount = 101;
	var container = document.getElementById("container");
	for( var counter = 0; counter < childrenAmount; counter++ )
	{
		var div = document.createElement( "div" ); //create div
		div.id = `stick${counter}`;
		div.style.width = (counter % 5 == 0) ? "50px" : "20px";
		div.style.height = "5px";
		div.style.marginBottom = counter === childrenAmount - 1 ? "200px" : "10px";
		div.style.marginTop = counter === 0 ? "200px" : 0;
		div.style.backgroundColor = (counter % 5 == 0) ? 'black' : 'grey';

		
		container.appendChild( div ); //append div to container
		// div.outerHTML = htmlCode.child; //set outerHTML 
	}
};

insertMultipleChildren();

window.addEventListener('scroll',()=> {
	for( var counter = 0; counter < 101; counter++ )
	{
		var aDiv = document.getElementById(`stick${counter}`);
		var distanceFromTop = aDiv.getBoundingClientRect().top - aDiv.offsetParent.getBoundingClientRect().top;
		var scrollCenter = (container.clientHeight / 2) - 2;
		
		if (
			(scrollCenter - 5) <= distanceFromTop
			&& (scrollCenter + 5) >= distanceFromTop
		) {
			aDiv.style.backgroundColor = "red";
			aDiv.style.transition = "all .2s"
			aDiv.style.width = "80px";
		} else if (
			(scrollCenter - 10) <= distanceFromTop
			&& (scrollCenter + 10) >= distanceFromTop
		) {
			// aDiv.style.backgroundColor = "green";
			aDiv.style.transition = "all .2s"
			aDiv.style.width = "54px";
		} else if (
			(scrollCenter - 15) <= distanceFromTop
			&& (scrollCenter + 15) >= distanceFromTop
		) {
			// aDiv.style.backgroundColor = "blue";
			aDiv.style.transition = "all .2s"
			aDiv.style.width ="52px"
		} else if (
			(scrollCenter - 20) <= distanceFromTop
			&& (scrollCenter + 20) >= distanceFromTop
		) {
			// aDiv.style.backgroundColor = "blue";
			aDiv.style.transition = "all .2s";
			aDiv.style.width ="50px";
		}  else {
			aDiv.style.backgroundColor = (counter % 5 == 0) ? 'black' : 'grey';
			aDiv.style.width = (counter % 5 == 0) ? "50px" : "20px";
		}
		
	}
});

function indicateScrollBar() {
	const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;

	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

	const scrolled = (distanceFromPageTop / height);

	var scrollItem = document.querySelector(".container");
	scrollItem.scroll(0, ((scrollItem.scrollHeight + scrollItem.clientHeight) * scrolled ));
}