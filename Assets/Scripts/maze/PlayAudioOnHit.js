#pragma strict
var thisAudio : AudioSource;
function Start () {
	thisAudio = transform.GetComponent("AudioSource");
}

function Update () {

}

function OnTriggerEnter (other : Collider){
	if (other.transform.name == "Player"){
		thisAudio.Play();
	}
}