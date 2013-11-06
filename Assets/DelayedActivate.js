#pragma strict

function Start () {
	
}

function Update () {

}

function OnTriggerEnter (player : Collider) {
	transform.parent = player.transform;
}