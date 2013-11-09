#pragma strict

var waaaa : AudioSource;
var meatspace : AudioSource;
var windWaaaTransform :AudioSource;
var windWaaa : AudioSource;

function Start () {

}

function Update () {


}

function OnTriggerEnter(other : Collider) {
	if (other.transform.IsChildOf(transform) && other.name == "meatspace"){
		meatspace.mute= true;
		Debug.Log(meatspace.volume);
	}
	
	if ( other.transform.IsChildOf(transform) && other.name == "B"){
		
	}
}