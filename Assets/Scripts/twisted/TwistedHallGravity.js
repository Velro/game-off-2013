#pragma strict

var speed : float = 0;
var player : GameObject;
var entered : boolean = false;
var exited : boolean = false;

function Start () {
	player = GameObject.Find("Player");
}

function Update () {
	if (entered){
		var playerScript = player.GetComponent(CharacterMotor);
		var velocity = playerScript.movement.velocity;
		var rotateRate = velocity.x * (Time.deltaTime * speed);
		if (transform.parent.transform.eulerAngles.x < 180){
		transform.parent.transform.Rotate(Vector3.right * rotateRate);
		}
	}
}


function OnTriggerStay (other : Collider){
	
}

function OnTriggerEnter (other: Collider){
	entered = true;
	exited = false;
}

function OnTriggerExit (other: Collider){
	entered = false;
	exited = true;
	var rotate = transform.parent;
	if (rotate.transform.eulerAngles.x > 180 && rotate.transform.eulerAngles.y == 0){
		rotate.transform.eulerAngles.x = 0;
	}
	if (rotate.transform.eulerAngles.x > 180 && rotate.transform.eulerAngles.y == 180){
		rotate.transform.eulerAngles.x = 0;
	}
}