#pragma strict

var player : GameObject;
var startingColor : Color;
var endingColor : Color;
var distance : float = 5;

function Start () {
	startingColor = renderer.material.color;
	endingColor = Color(startingColor.r, startingColor.g, startingColor.b, 0.0);
	renderer.material.color.a = 0;
}

function Update () {
	var speed = Time.deltaTime;
	if (Vector3.Distance(player.transform.position, transform.position) < distance){
		renderer.material.color.a += speed;
	} else {
		if (renderer.material.color.a > 0) {
			renderer.material.color.a -= speed;
		}
	}
}
