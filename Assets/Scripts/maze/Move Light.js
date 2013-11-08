#pragma strict

var speed : float = 0;
var location1 : Transform;
var location2 : Transform;
var location3 : Transform;
var location4 : Transform;
var location5 : Transform;

@System.NonSerialized
var origin : Vector3 = Vector3.zero;

@System.NonSerialized
var journeyLength1 : float;

@System.NonSerialized
var journeyLength2 : float;

@System.NonSerialized
var journeyLength3 : float;

@System.NonSerialized
var journeyLength4 : float;

@System.NonSerialized
var journeyLength5 : float;

@System.NonSerialized
var startTime : float;

var entered : boolean;
var exited : boolean;

@System.NonSerialized
var bool1 : boolean = true;
@System.NonSerialized
var bool2 : boolean = false;
@System.NonSerialized
var bool3 : boolean = false;
@System.NonSerialized
var bool4 : boolean = false;
@System.NonSerialized
var bool5 : boolean = false;

function Start () {
	origin = transform.position;
	journeyLength1 = Vector3.Distance(origin, location1.position);
	journeyLength2 = Vector3.Distance(location1.position, location2.position);
	journeyLength3 = Vector3.Distance(location2.position, location3.position);
	journeyLength4 = Vector3.Distance(location3.position, location4.position);
	journeyLength5 = Vector3.Distance(location4.position, location5.position);
}

function Update () {
	if (entered){
		var distCovered : float;
		var fracJourney : float;
		
		if (bool1 == true){
			distCovered = (Time.time - startTime) * speed;
			fracJourney = distCovered/journeyLength1;
			transform.position = Vector3.Lerp(origin, location1.position, fracJourney);
			if (transform.position == location1.position){
				bool1 = false;
				bool2 = true;
				startTime = Time.time;
			}
		}
		if (bool2 == true){
			distCovered = (Time.time - startTime) * speed;
			fracJourney = distCovered/journeyLength2;
			transform.position = Vector3.Lerp(location1.position, location2.position, fracJourney);
			if (transform.position == location2.position){
				bool2 = false;
				bool3 = true;
				startTime = Time.time;
			}
		}
		if (bool3 == true){
			distCovered = (Time.time - startTime) * speed;
			fracJourney = distCovered/journeyLength3;
			transform.position = Vector3.Lerp(location2.position, location3.position, fracJourney);
			if (transform.position == location3.position){
				bool3 = false;
				bool4 = true;
				startTime = Time.time;
			}
		}
		if (bool4 == true){
			distCovered = (Time.time - startTime) * speed;
			fracJourney = distCovered/journeyLength4;
			transform.position = Vector3.Lerp(location3.position, location4.position, fracJourney);
			if (transform.position == location4.position){
				bool4 = false;
				bool5 = true;
				startTime = Time.time;
			}
		}
		if (bool5 == true){
			distCovered = (Time.time - startTime) * speed;
			fracJourney = distCovered/journeyLength5;
			transform.position = Vector3.Lerp(location4.position, location5.position, fracJourney);
			if (transform.position == location5.position){
				//bool5 = false;
				//bool5 = true;
				//startTime = Time.time;
			}
		}
	}
}

function OnTriggerEnter(player : Collider){
	entered = true;
	exited = false;
	startTime = Time.time;
}

function OnTriggerExit(player : Collider){
	entered = false;
	exited = true;
}