#pragma strict

var waaaa : Transform;
var meatspace : Transform;
var windWaaaaTransform : Transform;
var windWaaaa : Transform;
var windTransformOnce : boolean = false;
function Start () {
	
}

function Update () {
	if (windTransformOnce == true && windWaaaaTransform.audio.isPlaying == false){
		Debug.Log("HIT");
		waaaa.audio.Stop();
		windWaaaaTransform.audio.Play();
		windTransformOnce = false;
	}
	if (windTransformOnce == false && windWaaaaTransform.audio.isPlaying == false && 
		windWaaaa.audio.isPlaying == false && windWaaaaTransform.IsChildOf(transform)){
		windWaaaa.audio.Play();
	}
}

function MixMaster (other : Transform) {
	if (other.name == "windwaaaatransform"){
		windTransformOnce = true;
	}
	/*
	if ( other.transform.IsChildOf(transform) && other.name == "B"){
		
	}
	*/
}