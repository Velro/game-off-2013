using UnityEngine;
using System.Collections;

public class LoadRoom : MonoBehaviour {
	void OnTriggerEnter(Collider other) {
        if (other.name == "Player"){
        	Application.LoadLevel ("tower");
		}
    }
}
