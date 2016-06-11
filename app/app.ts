import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import * as firebase from 'firebase';

@App({
    template: '<ion-nav [root]="rootPage"></ion-nav>',
    config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform) {
        const
            fbConf = {
            apiKey: "AIzaSyD44soNIK81xzRjQXZ2Lmlb03CBIx4zVY4",
            authDomain: "fir-app-f088c.firebaseapp.com",
            databaseURL: "https://fir-app-f088c.firebaseio.com",
            storageBucket: "fir-app-f088c.appspot.com"
        };
        firebase.initializeApp(fbConf);

        platform.ready().then(() => {
            StatusBar.styleDefault();
        });
    }
}
