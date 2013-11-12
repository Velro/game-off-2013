#pragma strict

function OnTriggerEnter (other : Collider) {
	Destroy(transform.gameObject);
}	