#pragma strict
var wateringcan : Transform;
var x : Transform;
function Start () {

}

function Update () {
	if (wateringcan.parent == "tableSnap"){
		Destroy (x.gameObject);
	}
}
