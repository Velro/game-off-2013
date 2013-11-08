#pragma strict

var mazeDoorA : Transform;
var lookAt : Transform;

function OnTriggerEnter (player : Collider){
	mazeDoorA.position.z += 1;
	player.transform.position = mazeDoorA.TransformPoint(Vector3(0,1,0));
	player.transform.LookAt(lookAt);
	if (transform.parent.parent == GameObject.Find("hubcubedA").transform){
		Debug.Log("teleported from A");
	}
	if (transform.parent.parent == GameObject.Find("hubcubedB").transform){
		RevertRotation();
	}
}

function RevertRotation () {
	yield WaitForSeconds (5);
	var rotate = GameObject.Find("rotate");
	rotate.transform.rotation.eulerAngles.x = 0;
	rotate.transform.rotation.eulerAngles.y = 0;
	rotate.transform.rotation.eulerAngles.z = 0;
}