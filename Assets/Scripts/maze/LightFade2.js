#pragma strict

var entered : boolean = false;
var exited : boolean = false;
var lightGradient : float = 0;
var thisLightA : Light;
var thisLightB : Light;
var childA : Transform;
var childB : Transform;

function Start () {
	childA = transform.GetChild(0);
	childB = transform.GetChild(1);
	thisLightA = childA.GetComponent("Light");
	thisLightB = childB.GetComponent("Light");
}

function Update () {
	if (entered && lightGradient < 5){
		lightGradient += 0.01;
		thisLightA.intensity = lightGradient;
		thisLightB.intensity = lightGradient;
	}
	if (exited && lightGradient > 0){
		lightGradient -= 0.05;
		thisLightA.intensity = lightGradient;
		thisLightB.intensity = lightGradient;
	}
}

function OnTriggerEnter (player : Collider) {
	entered = true;
	exited = false;
}

function OnTriggerExit (player : Collider) {
	entered = false;
	exited = true;
}