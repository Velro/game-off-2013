#pragma strict
var music : GameObject;
private var originalPosition : Vector3;

function Start () {
	originalPosition = music.transform.position;
}

function OnTriggerEnter (other : Collider){
	if (other.name == "Player"){
		music.transform.parent = other.transform;
		music.transform.position = other.transform.position;
		music.GetComponent(AudioSource).enabled = true;
	} else {
		
	}
}

function OnTriggerExit (other : Collider){
	Debug.Log("exited");
	music.transform.parent = null;
	yield WaitForSeconds(2);
	music.transform.position = originalPosition;
	music.GetComponent(AudioSource).enabled = false;
}