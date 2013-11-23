#pragma strict

var potPos : Vector3 = Vector3.zero;
var flowerPos : Vector3 = Vector3.zero;
var canPos : Vector3 = Vector3.zero;

var tableThere : boolean = false; //to ensure table is there before pot
var potThere : boolean = false;
var flowerThere : boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider){
	var rigidbody : Rigidbody;
	
	if (other.name == "TableSmall") {
		other.transform.parent = transform;
		other.transform.localPosition = Vector3.zero;
		other.transform.rotation.eulerAngles = Vector3(270, 0, 0);
		
		rigidbody = other.GetComponent("Rigidbody");
		rigidbody.useGravity = false;
		rigidbody.isKinematic = true;
		other.GetComponent(OnClickMove).enabled = false;
		tableThere = true;
	}
	
	if (other.name == "PottedPlant" && tableThere == true) {
		other.transform.parent = transform;
		other.transform.localPosition = potPos;
		other.transform.rotation.eulerAngles = Vector3.zero;
		
		rigidbody = other.GetComponent("Rigidbody");
		rigidbody.useGravity = false;
		rigidbody.isKinematic = true;
		other.GetComponent(OnClickMove).enabled = false;
		potThere = true;
	}
	
	if (other.name == "flower" && potThere == true){
		other.transform.parent = transform;
		other.transform.localPosition = flowerPos;
		other.transform.rotation = Quaternion.identity;
		Destroy (other.transform.FindChild("flowerdirt").gameObject);
		rigidbody = other.GetComponent("Rigidbody");
		rigidbody.useGravity = false;
		rigidbody.isKinematic = true;
		other.GetComponent(OnClickMove).enabled = false;
		flowerThere = true;
	}
	
	if (other.name == "wateringcan" && flowerThere == true){
		other.transform.parent = transform;
		other.transform.localPosition = canPos;
		other.transform.rotation.eulerAngles = Vector3(0,270,0);
		
		rigidbody = other.GetComponent("Rigidbody");
		rigidbody.useGravity = false;
		rigidbody.isKinematic = true;
		other.GetComponent(OnClickMove).enabled = false;
		
		var animator = other.GetComponent(Animation);
		animator.Play("pour");
	}
	
	

	
	
}