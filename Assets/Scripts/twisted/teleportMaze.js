#pragma strict

var mazeDoorA : Transform;

@System.NonSerialized
var twistedDoorCollider : Transform;

function Start () {
	twistedDoorCollider = transform;
}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	if (CheckForX(transform) == true)Debug.Log("WINRAR");
}

function CheckForX (twistedDoor : Transform){
	var bool = false;
	var doorB = twistedDoor.transform.Find("doorB");
	if  (doorB.transform.Find("x") != null)bool = true;
	return bool;
}