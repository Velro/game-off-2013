#pragma strict

var hinge : Vector3 = Vector3.zero;
var loaded : boolean = false;
var entered : boolean = false;

function Start () {
	Application.LoadLevelAdditive (1);
}

function Update () {
	if (entered){
		var rotateAmount : float;
		if (Mathf.Abs(transform.parent.transform.localEulerAngles.y - 360)< 180 ){
			rotateAmount = rotateAmount - 60 * Time.deltaTime;
			transform.parent.transform.RotateAround(transform.parent.position, Vector3.up, rotateAmount);
		}
		Debug.Log(Mathf.Abs(transform.parent.transform.localEulerAngles.y - 360));
	}
}

function OnTriggerEnter (player : Collider) {
	entered = true;
}

function OnTriggerStay (player : Collider) {
		
}