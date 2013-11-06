#pragma strict
var destination : Vector3 = Vector3.zero;
var lookAt : Vector3 = Vector3.zero;
var twisted : GameObject;
var doorAlocation : Vector3;
function Start () {
	twisted = GameObject.Find("rotate");
	var interim = GameObject.Find("DoorAcollider");
	doorAlocation = interim.transform.position;
	destination = Vector3(-7.5,0.4,0);
}

function Update () {

}

function OnTriggerEnter (player : Collider){
	if (player.gameObject.tag == "Player"){
		twisted.transform.eulerAngles = Vector3.zero;
		var playerScript = player.GetComponent(CharacterMotor);
		player.transform.position = destination;
		playerScript.movement.velocity = Vector3.zero;
		player.transform.LookAt(lookAt);
	}
}