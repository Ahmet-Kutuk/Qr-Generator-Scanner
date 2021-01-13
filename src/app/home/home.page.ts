import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  qrData = null;
  createdCode = null;
  scannedCode = null;
  
  constructor(private barcodeScanner: BarcodeScanner,private AngularFireStore:AngularFirestore,AngularFirebaseAuth:AngularFireAuth) {

  }
  
  createCode () {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
   
  }

  scanCode () {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    })
  }

}
