#pragma strict
var player : GameObject;
var dirt : GameObject;

var range : float;

var loopable : AudioClip;
private var once : boolean = false;
function Update (){
	CheckDistance();
}

function CheckDistance () {
	if (Vector3.Distance(player.transform.position, dirt.transform.position) < range){
		GetComponent(AudioSource).enabled = true;
		if(once == false){
			Debug.Log("hit");
			Loop();
			once = true;		
		}	
	}
}
function Loop(){
	Debug.Log("begin wait");
	yield WaitForSeconds (audio.clip.length);
	Debug.Log("start loop");
	audio.clip = loopable;
	audio.Play();
	audio.loop = true;
}