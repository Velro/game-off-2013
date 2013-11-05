#pragma strict
var normal : Vector3 = Vector3.zero;

function Start () {

}

function Update () {
	
}


function OnTriggerStay (player : Collider){
	if (player.gameObject.tag == "Player"){
		var playerScript = player.GetComponent(CharacterMotor);
		var velocity = playerScript.movement.velocity;
		var rotateRate = velocity.x/7;
		if (transform.parent.transform.eulerAngles.x < 180){
		transform.parent.transform.Rotate(Vector3.right * rotateRate);
		}
	}
}

