#pragma strict

var hinge : Vector3;
var entered : boolean = false;
function Start () {

}

function Update () {
	if (entered){
	}
	
}

function OnTriggerEntered (player : Collider){
	entered = true;
}
function OnTriggerStay (player : Collider) {
	var rotateAmount : float;
	if (Mathf.Abs(rotateAmount) < 90){
		rotateAmount = rotateAmount - 60 * Time.deltaTime;
	}
	transform.parent.transform.RotateAround(transform.parent.position, Vector3.up, rotateAmount);
}