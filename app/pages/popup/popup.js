import {Page, NavController, Alert} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/popup/popup.html'
})

export class PopupPage {
    static get parameters() {
        return [[NavController]];
    }
    constructor(nav) {
        this.nav = nav;
        /*this.alerts = [];
        this.alerts.push({style: 'alert', des: 'Basic Alert'});
        this.alerts.push({style: 'prompt', des: 'Prompt Alert'});*/
        this.alerts = [
            {style: 'alert', des: 'Basic Alert'},
            {style: 'prompt', des: 'Prompt Alert'},
            {style: 'confirm', des: 'Confirmation Alert'}
        ];
    }

    openPopup(style) {
        switch(style){
            case 'alert':
                let alert = Alert.create({
                    title: 'Low Battery',
                    subTitle: '10% of battery remaining',
                    buttons: ['Dismiss']
                });
                this.nav.present(alert);
                break;
            case 'prompt':
                let prompt = Alert.create({
                    title: 'Login',
                    message: 'Enter a name for this new album you are so keen on adding',
                    inputs: [
                        {
                            name: 'title',
                            placeholder: 'Title'
                        }
                    ],
                    buttons: [
                        {
                            text: 'Cancel',
                            handler: data => {
                                console.log('Cancel clicked', data);
                            }
                        },
                        {
                            text: 'Save',
                            handler: data => {
                                console.log('Save clicked', data);
                            }
                        }
                    ]
                });
                this.nav.present(prompt);
                break;
            case 'confirm':
                let confirm = Alert.create({
                    title: 'You will not see me again!!!',
                    message: 'Do you indeed want to quit our community?',
                    buttons: [
                        {
                            text: 'Yes, I do',
                            handler: () => {
                                console.log('Yes clicked');
                            }
                        },
                        {
                            text: 'No, think more',
                            handler: () => {
                                console.log('No clicked');
                            }
                        }
                    ]
                });
                this.nav.present(confirm);
                break;
            default:
                break;
        }
    }
}