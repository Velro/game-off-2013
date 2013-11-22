#pragma strict
var player : GameObject;
var clickableDistance : float;
var floatDist : float;
var timeDelay : float;	//prevents both and grab and release happening at the same time
@System.NonSerializedAttribute
var timeA : float;

var xAngle : float;
var yAngle : float;
var zAngle : float;

@System.NonSerializedAttribute
var originalPosition : Vector3;
var originalRotation : Vector3;
function Start () {
	//player = GameObject.FindGameObjectWithTag("Player");
	timeA = Time.time;
	originalPosition = transform.position;
	originalRotation = transform.rotation.eulerAngles;
}

function Update () {
	if (Input.GetMouseButtonDown (0) == true && transform.parent == player.transform && Time.time - timeA > timeDelay){
		transform.parent = null;
		rigidbody.useGravity = true;
		rigidbody.isKinematic = false;
		transform.rotation.eulerAngles.x = xAngle;
		transform.rotation.eulerAngles.y = yAngle;
		transform.rotation.eulerAngles.z = zAngle;
	}
	if (transform.position.y < -5){  //bring the object back up if it clips through the floor
		transform.position = originalPosition;
		transform.rotation.eulerAngles = originalRotation;
	}
}

function OnMouseDown () {
	if (Vector3.Distance(transform.position, player.transform.position) < clickableDistance && Time.time - timeA > timeDelay
			&& transform.parent != player && transform.Find("pottedplant") == null && transform.Find("TableSmall") == null
			&& transform.Find("wateringcan") == null && transform.Find("flower") == null && transform.Find ("emptypot") == null){
		transform.parent = player.transform;
		var ray : Ray;
		ray.origin = player.transform.position;
		ray.direction = player.transform.forward;
		var point = ray.GetPoint(floatDist);
		transform.position = point;
		rigidbody.useGravity = false;
		rigidbody.isKinematic = true;
		timeA = Time.time;
	}
	
	
}