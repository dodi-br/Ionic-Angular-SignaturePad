import { Component, ViewChild } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { HomePage } from '../home/home';


/**
 * Generated class for the SignaturePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {

  @ViewChild(SignaturePad) public signaturePad: SignaturePad;
  constructor(public navParams: NavParams, public navCtrl: NavController) {
  }
  public signatureImage : string;
  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 340,
    'canvasHeight': 200
  };

  canvasResize(){
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }
  ngAfterViewInit(){
    this.signaturePad.clear()
    this.canvasResize();

  }

  drawComplete(){
    this.signatureImage = this.signaturePad.toDataURL();
    console.log(this.signatureImage);
    this.navCtrl.push(HomePage, { signatureImage: this.signatureImage});
  }

  drawClear(){
    this.signaturePad.clear();
  }

  drawCancel(){
    this.navCtrl.push(HomePage, { signatureImage: ''});
  }

}
