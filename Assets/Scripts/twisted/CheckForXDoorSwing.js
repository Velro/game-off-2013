#pragma strict

@System.NonSerialized
var twistedDoorCollider : Transform;

var entered : boolean = false;
var exited : boolean = false;
var childDoor : Transform;
var startingAngle : float;
var boolAngle : float;
function Start () {
	twistedDoorCollider = transform;
	startingAngle = childDoor.localEulerAngles.y;
}

function Update () {
	if (entered){
		if (Mathf.Abs(childDoor.localEulerAngles.y) > 1 && (Mathf.Abs(childDoor.localEulerAngles.y)<=181)){
			var rotateAmount : float;
			rotateAmount = -60 * Time.deltaTime;
			childDoor.Rotate(Vector3.up, rotateAmount);
		}
	}
	
	if (exited){
		var reverseRotateAmount : float;
		var differenceAngle = Mathf.DeltaAngle(startingAngle, boolAngle);
		var delta = Mathf.Abs(Mathf.DeltaAngle(startingAngle, childDoor.localEulerAngles.y));
		if (delta <=Mathf.Abs(differenceAngle) && (delta >= 1)){
			reverseRotateAmount = 60 * Time.deltaTime;
			childDoor.Rotate(Vector3.up, reverseRotateAmount);
		}
	}
}

function OnTriggerEnter(other : Collider) {
	if (CheckForX(transform) == true)entered = true;
	exited = false;
	//boolAngle = childDoor.localEulerAngles.y;
}

function OnTriggerExit(other : Collider) {
	entered = false;
	exited = true;
	boolAngle = childDoor.localEulerAngles.y;
}

function CheckForX (twistedDoor : Transform){
	var bool = false;
	if  (childDoor.Find("x") == null)bool = true;
	return bool;
}