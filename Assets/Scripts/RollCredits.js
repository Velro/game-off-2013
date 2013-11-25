var backgroundTexture : Texture2D;
var startGUI : boolean = false;

function OnTriggerEnter (other : Collider){
	if (other.name == "Player"){
		startGUI = true;
	}
}

function OnGUI(){
	if (startGUI){
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), backgroundTexture); //background
		//Insantiate (sleep);
		delay();
		GUI.Label(Rect((Screen.width/2)-40,(Screen.height/2)-10,(Screen.width/2)+40,(Screen.height/2)+10),
			 "Creator");
		GUI.Label(Rect((Screen.width/2)-42,(Screen.height/2)+25,(Screen.width/2)+38,(Screen.height/2)),
			 "James Fulop");
		
	}
}

function delay(){
	yield WaitForSeconds (10);
}