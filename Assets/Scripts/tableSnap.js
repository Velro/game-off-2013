#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	other.transform.parent = transform;
	other.transform.localPosition = Vector3.zero;
	other.transform.rotation.eulerAngles = Vector3(270, 0, 0);
	var rigidbody : Rigidbody = other.GetComponent("Rigidbody");
	rigidbody.useGravity = false;
	rigidbody.isKinematic = true;
	other.GetComponent(OnClickMove).enabled = false;
}