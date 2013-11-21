#pragma strict
var emptyPot : Transform;
var filledPot : Transform;
var player : Transform;
function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	if (other.transform == emptyPot){
		//replace empt with filled and put in same state
		filledPot.parent = player;				
		filledPot.rigidbody.useGravity = false;
		filledPot.rigidbody.isKinematic = true;
		filledPot.position = emptyPot.position;
		filledPot.rotation = emptyPot.rotation;
		filledPot.rotation.eulerAngles.x += 270;
		Destroy (emptyPot.gameObject);
	}
}