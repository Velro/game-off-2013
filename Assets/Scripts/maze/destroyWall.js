#pragma strict
var delay : float = 0;

@System.NonSerializedAttribute
var size : float = 0;

@System.NonSerializedAttribute
var whites : GameObject[];

var white1 : GameObject;
var white2 : GameObject;
var white3 : GameObject;
var white4 : GameObject;

var timeDiff : float = 1;
	var timeA : float;
	var timeB : float;

function Start () {
	size = transform.childCount;
	if (size == 7){
		whites = [transform.GetChild(0).gameObject,
			transform.GetChild(1).gameObject,
			transform.GetChild(4).gameObject,
			transform.GetChild(6).gameObject
		];
	}
}
function OnTriggerEnter (other : Collider) {
	timeA = Time.timeSinceLevelLoad;	
	if (size == 7){
		for (var i = 0; i < whites.length; i++){
			Destroy(whites[i], delay);
		}
	}
	Destroy(transform.gameObject, delay + 0.5);
}

function OnTriggerExit (other: Collider) {
	timeB = Time.timeSinceLevelLoad;
	timeDiff = timeB - timeA;
	
}	