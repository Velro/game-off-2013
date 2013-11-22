#pragma strict

var prefabMaze : Transform;

var currentMazePosition : Vector3;

@System.NonSerializedAttribute
var currentMazeRotation : Quaternion;

function Start () {
	currentMazePosition = prefabMaze.position;
	currentMazeRotation = prefabMaze.rotation;
}

function Update () {
	
}

function OnTriggerEnter (other : Collider) {
	if (other.name == "Player"){
		if (GameObject.Find("maze2(Clone)") != null){
			Destroy (GameObject.Find("maze2(Clone)"));
		}
		if (GameObject.Find("maze2") != null) {
			Destroy (GameObject.Find("maze2"));
		}
		Instantiate (prefabMaze);
	}
}