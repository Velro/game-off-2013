#pragma strict

@System.NonSerialized
var twistedDoorCollider : Transform;

var entered : boolean = false;
var exited : boolean = false;
var childDoor : Transform;

function Start () {
	twistedDoorCollider = transform;
}

function Update () {
	if (entered){
		if (Mathf.Abs(childDoor.localEulerAngles.y) > 1){
			var rotateAmount : float;
			rotateAmount = -60 * Time.deltaTime;
			childDoor.Rotate(Vector3.up, rotateAmount);
		}
	}
	if (exited){
		if (Mathf.Abs(childDoor.localEulerAngles.y) > 270 || Mathf.Abs(childDoor.localEulerAngles.y) < 90){
			var reverseRotateAmount : float;
			reverseRotateAmount = 60 * Time.deltaTime;
			childDoor.Rotate(Vector3.up, reverseRotateAmount);
		}
	}
}

function OnTriggerEnter(other : Collider) {
	if (CheckForX(transform) == true)entered = true;
	exited = false;
}

function OnTriggerExit(other : Collider) {
	entered = false;
	exited = true;
}

function CheckForX (twistedDoor : Transform){
	var bool = false;
	var doorB = twistedDoor.transform.Find("doorB");
	if  (doorB.transform.Find("x") == null)bool = true;
	return bool;
}