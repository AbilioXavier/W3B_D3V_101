function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}



function myFunction(e){
    var image = getElementById("image");

	var x = e.clientX;
	var y = e.clientY;

	image.style.top = lerp(image.top, x, 0.1);
	image.style.left = lerp(image.left, y, 0.1);
}