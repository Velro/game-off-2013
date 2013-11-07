#pragma strict
var destination : Vector3 = Vector3.zero;
var lookAt : Vector3 = Vector3.zero;

function Start () {

}

function Update () {

}

function OnTriggerEnter (player : Collider){
	if (player.gameObject.tag == "Player"){
		var playerScript = player.GetComponent(CharacterMotor);
		player.transform.position = destination;
		//playerScript.movement.velocity = Vector3.zero;
		player.transform.LookAt(lookAt);
	}
}