#pragma strict

var mazeDoorA : Transform;
var lookAt : Transform;

function OnTriggerEnter (other : Collider){
	if(other.name == "Player"){
		other.transform.position = mazeDoorA.position;
		other.transform.LookAt(lookAt.TransformPoint(Vector3.zero));
		RevertRotation();
	}
}

function RevertRotation () {
	var rotate = GameObject.Find("rotate");
	rotate.transform.rotation.eulerAngles.x = 0;
	rotate.transform.rotation.eulerAngles.y = 0;
	rotate.transform.rotation.eulerAngles.z = 0;
}