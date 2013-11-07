#pragma strict

var hub1 : GameObject;
var otherDoorCollider1 : Transform;
var otherDoor1 : Transform;
var x1 : Transform;

var hub2 : GameObject;
var otherDoorCollider2 : Transform;
var otherDoor2 : Transform;
var x2 : Transform;

function Start () {
	hub1 = GameObject.Find("hubcubedA");
	otherDoorCollider1 = hub1.transform.FindChild("doorBcollider");
	otherDoor1 = otherDoorCollider1.transform.FindChild("doorB");
	x1 = otherDoor1.transform.Find("x");
	
	hub2 = GameObject.Find("hubcubedB");
	otherDoorCollider2 = hub2.transform.FindChild("doorBcollider");
	otherDoor2 = otherDoorCollider2.transform.FindChild("doorB");
	x2 = otherDoor2.transform.Find("x");
}

function Update () {

}

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