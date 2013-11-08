#pragma strict

var x1 : Transform;

var x2 : Transform;

function OnTriggerEnter (other : Collider){
	if (x1 != null){
		var xObject1 = x1.gameObject;
	 	Destroy (xObject1);
	 }
	 if (x2 != null){
	 	var xObject2 = x2.gameObject;
	 	Destroy (xObject2);
	 }
}