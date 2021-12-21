import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  constructor(private firestore: AngularFirestore) { }
  isLinear = false;


  form = new FormGroup({

    firstName: new FormControl(""),
    lastName: new FormControl(""),
    chatgiName: new FormControl(""),
    gender: new FormControl(""),
    phoneNumber: new FormControl(""),
    state: new FormControl(""),
    city: new FormControl(""),
    strategy: new FormControl(""),
    eventName: new FormControl(""),
    chatgiCategroy: new FormControl(""),
  });

  //Firestore CRUD actions example
  createZtsForms(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("chatgi-organization")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  // updateCoffeeOrder(data) {
  //   return this.firestore
  //     .collection("coffeeOrders")
  //     .doc(data.payload.doc.id)
  //     .set({ completed: true }, { merge: true });
  // }

  getChatgiEntries() {
    return this.firestore.collection("chatgi-organization").snapshotChanges();
  }

  // deleteCoffeeOrder(data) {
  //   return this.firestore
  //     .collection("coffeeOrders")
  //     .doc(data.payload.doc.id)
  //     .delete();
  // }
}
