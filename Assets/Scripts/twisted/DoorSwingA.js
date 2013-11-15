#pragma strict

var entered : boolean = false;
var exited : boolean = false;
var childDoor : Transform;

function Start () {
	childDoor = transform.GetChild(0);
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
		if (Mathf.Abs(childDoor.localEulerAngles.y) < 90){
			var reverseRotateAmount : float;
			reverseRotateAmount = 60 * Time.deltaTime;
			childDoor.Rotate(Vector3.up, reverseRotateAmount);
		}
	}
}

function OnTriggerEnter (player : Collider) {
	entered = true;
	exited = false;
}

function OnTriggerExit (player : Collider) {
	exited = true;
	entered = false;
}
function OnTriggerStay (player : Collider) {
		
}