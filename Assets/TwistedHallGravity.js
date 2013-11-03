#pragma strict
var normal : Vector3 = Vector3.zero;

function Start () {

}

function Update () {
	
}

function OnTriggerEnter(player : Collider){
	var playerScript = player.GetComponent(CharacterMotor);
	playerScript.isTwistedHall = true;
}

function OnTriggerStay (player : Collider){
	if (player.gameObject.tag == "Player"){
		var playerScript = player.GetComponent(CharacterMotor);
		var velocity = playerScript.movement.velocity;
		transform.parent.transform.Rotate(-velocity.x/8.1,0,0);
	}
}

function OnTriggerExit(player : Collider){
	var playerScript = player.GetComponent(CharacterMotor);
	playerScript.isTwistedHall = false;
}