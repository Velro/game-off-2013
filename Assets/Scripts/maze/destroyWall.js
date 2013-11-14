#pragma strict
var delay : float = 0;

@System.NonSerializedAttribute
var size : float = 0;

function Start () {
	
}
function OnTriggerEnter (other : Collider) {
	Destroy(transform.gameObject, delay);
	
	/*
	for (var child : Transform in transform) {
		yield WaitForSeconds(0.25);
    	Destroy(child.gameObject);
	}
	if (transform.childCount == 0){
		yield WaitForSeconds(0.25);
		Destroy(transform.gameObject);
	}
	*/
}	