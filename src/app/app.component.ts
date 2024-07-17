import { Component, OnInit } from '@angular/core';
import Player from 'openplayerjs';
import OpenPlayerJS from 'openplayerjs';

declare const google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'instream-openplayerjs';

  public openPlayer: Player | undefined;
  private adsInstance: any;
  private videoElement:any;
  private adDisplayContainer : any;
  private adsLoader: any;

  ngOnInit(): void {

    this.setUpIMA();
  }


  public setUpIMA(){
    try{
      this.openPlayer = new OpenPlayerJS('open-video-kp', {
        controls: {
          alwaysVisible: false,
          layers: {
            left: ['play', 'time', 'volume'],
            middle: ['progress'],
            right: ['settings', 'fullscreen'], // Removed 'captions'
          },
        },
        detachMenus: false,
        forceNative: true,
        mode: 'responsive',
        hidePlayBtnTimer: 350,
        step: 0,
        startVolume: 0,
        startTime: 0,
        showLoaderOnInit: false,
        onError: (e) => console.log('ERROR => ', e),
        live: {
          showLabel: true,
          showProgress: false,
        },
        progress: {
          duration: 0,
          showCurrentTimeOnly: false,
        },
        width: 0,
        height: 0,
        pauseOthers: true,
        ads: {
          src: 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=',
          autoPlayAdBreaks: true, // Enable autoplay for ad breaks
          debug: false, // Enable debug mode for better error visibility
          enablePreloading: false,
          language: 'en',
          loop: false,
          numRedirects: 4,
          sdkPath: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
          customClick: {
            enabled: false,
            label: '',
          },
          vpaidMode: 'enabled'
        },
      });

      this.videoElement = this.openPlayer.getElement();
      this.videoElement.muted = true;
      this.openPlayer.init();


      //we have getAdManager and we have getAd function unable to get load and skip and complete
      console.log('this.openPlayer?.getEvents(); => ', this.openPlayer?.getEvents())
    }catch(error){
      console.log(error);
    }
  }


}
