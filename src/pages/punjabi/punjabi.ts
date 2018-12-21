import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

@Component({
  selector: 'page-punjabi',
  templateUrl: 'punjabi.html'
})
export class PunjabiPage {

  constructor(private platform:Platform,private cameraPreview: CameraPreview,public navCtrl: NavController) {
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    
   
    this.platform.ready().then((readySource) => {
       // start camera
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log('Got Camera access ',res)
      },
      (err) => {
        console.log('Problem accessing camera',err)
      });
    });
  }

}
