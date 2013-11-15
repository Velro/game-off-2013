#pragma strict

var x1 : Transform;
var x2 : Transform;
var entered : boolean;

function Update () {
	if (entered){
		if (x1 != null){
			var xObject1 = x1.gameObject;
		 	Destroy (xObject1);
		 }
		 if (x2 != null){
		 	var xObject2 = x2.gameObject;
		 	Destroy (xObject2);
		 }
	}
}
function OnTriggerEnter (other : Collider){
	if (other.name == "Player"){
		entered = true;
	}
}