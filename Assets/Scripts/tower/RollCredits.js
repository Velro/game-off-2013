var black : Texture2D;
var sleep : Texture2D;
var maincredits : Texture2D;
var additionalcredits : Texture2D;

var startGUI : boolean = false;

var hitTime : float;
function OnTriggerEnter (other : Collider){
	if (other.name == "Player"){
		startGUI = true;
	}
	hitTime = Time.time;
}

function OnGUI(){
	if (startGUI){
		//begin horrible hacky GUI scripting
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), sleep);
		//Insantiate (sleep);
		if (Time.time > hitTime + 4){
			GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), black);
		}
		if (Time.time > hitTime + 4.5){
			GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), maincredits);
		}
		if (Time.time > hitTime + 10.5){
			GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), black);
		}
		if (Time.time > hitTime + 11){
			GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), additionalcredits);
		}
		if (Time.time > hitTime + 25){
			GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), black);
		}
	}
}

function Fade() {
	
}
function Delay(delay : float){
	yield WaitForSeconds (delay);
}