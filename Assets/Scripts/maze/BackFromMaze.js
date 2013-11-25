#pragma strict
var destination : Transform;
var lookAt : Transform;

function OnTriggerEnter (player : Collider){
	if (player.name == "Player"){
		player.transform.position = destination.position;
		if (lookAt != null){
			player.transform.LookAt(lookAt);
		}
	}
}