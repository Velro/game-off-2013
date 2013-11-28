#pragma strict
var markedWalls : GameObject;
var blankWalls : GameObject;
var door1 : GameObject;
var door2 : GameObject;
var door3 : GameObject;
var table : GameObject;

function Start () {
	blankWalls.GetComponent(Renderer).enabled = true;

	markedWalls.GetComponent(Renderer).enabled = false;
	door1.GetComponent(Renderer).enabled = false;
	door2.GetComponent(Renderer).enabled = false;
	door3.GetComponent(Renderer).enabled = false;
	table.GetComponent(Renderer).enabled = false;
}

function Update () {

}

function OnTriggerEnter (other : Collider){
	if (other.name == "Player"){
		blankWalls.GetComponent(Renderer).enabled = false;
	
		markedWalls.GetComponent(Renderer).enabled = true;
		door1.GetComponent(Renderer).enabled = true;
		door2.GetComponent(Renderer).enabled = true;
		door3.GetComponent(Renderer).enabled = true;
		table.GetComponent(Renderer).enabled = true;
	}
}

function OnTriggerExit (other : Collider){
	if (other.name == "Player"){
		blankWalls.GetComponent(Renderer).enabled = true;
	
		markedWalls.GetComponent(Renderer).enabled = false;
		door1.GetComponent(Renderer).enabled = false;
		door2.GetComponent(Renderer).enabled = false;
		door3.GetComponent(Renderer).enabled = false;
		table.GetComponent(Renderer).enabled = false;
	}
}