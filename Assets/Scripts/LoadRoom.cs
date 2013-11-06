using UnityEngine;
using System.Collections;

public class LoadRoom : MonoBehaviour {

	void OnTriggerStay(Collider other) {
        if (other.attachedRigidbody)
            other.attachedRigidbody.AddForce(Vector3.up * 10);
        Application.LoadLevel ("hallway");
    }
}
