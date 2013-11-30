#pragma strict
var music : GameObject;
private var originalPosition : Vector3;
private var once : boolean = false;

function Start () {
	originalPosition = music.transform.position;
}

function OnTriggerEnter (other : Collider){
	if (other.name == "Player"){
		music.transform.parent = other.transform;
		music.transform.position = other.transform.position;
		music.GetComponent(AudioSource).enabled = true;
	} 
}

function OnTriggerStay (other : Collider){
	if (other.name == "Player" && !once){
		music.transform.parent = other.transform;
		music.transform.position = other.transform.position;
		music.GetComponent(AudioSource).enabled = true;
		once = true;
	} 
}

function OnTriggerExit (other : Collider){
	music.transform.parent = null;
	yield WaitForSeconds(2);
	music.transform.position = originalPosition;
	music.GetComponent(AudioSource).enabled = false;
}