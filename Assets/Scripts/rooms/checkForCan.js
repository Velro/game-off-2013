#pragma strict
var wateringcan : Transform;
var x : Transform;

function Start () {

}

function OnTriggerStay(other : Collider) {
	if (other.gameObject.name == "Player" && wateringcan !=null 
		&& wateringcan.parent != null && wateringcan.parent.gameObject.name == "tableSnap"
		&& x != null){
		Destroy (x.gameObject);
	}
}