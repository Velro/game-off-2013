#pragma strict
var destination : Transform;
var lookAt : Transform;

function OnTriggerEnter (player : Collider){
	if (player.gameObject.tag == "Player"){
		var playerScript = player.GetComponent(CharacterMotor);
		player.transform.position = destination.TransformPoint(Vector3.up);
		//playerScript.movement.velocity = Vector3.zero;
		player.transform.LookAt(lookAt.TransformPoint(Vector3.zero));
	}
}