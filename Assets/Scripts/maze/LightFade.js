#pragma strict
var entered : boolean = false;
var exited : boolean = false;
var lightGradient : float = 0;
var thisLight : Light;
function Start () {
	thisLight = GetComponent.<Light>();
}

function Update () {
	if (entered && lightGradient < 5){
		lightGradient += 0.01;
		thisLight.intensity = lightGradient;
	}
	if (exited && lightGradient > 0){
		lightGradient -= 0.01;
		thisLight.intensity = lightGradient;
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