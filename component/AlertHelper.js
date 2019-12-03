export class AlertHelper {
    static dropDown;
    static onClose;

    static setDropDown(dropDown) {
        this.dropDown = dropDown;
    }

    // payload = { message: 'HelloWorld', source: ReactNativeLogo };
    static show(type, title, message) {
        if (this.dropDown) {
            this.dropDown.alertWithType(type, title, message,this.getIcon(type,message));
        }
        // this.dropDownAlertRef.alertWithType(
        //     item.type,
        //     title,
        //     item.message,
        //     payload,
        //     interval
        // );
    }

    static getIcon(type, message) {
        switch (type) {
            case 'info':
                return {message: message, source:require('../src/assets/icon/ic_information.png')};
            case 'warn':
                return  {message: message, source:require('../src/assets/icon/ic_information.png')};
            case 'error':
                return  {message: message, source:require('../src/assets/icon/ic_information.png')};
            case 'success':
                return {message: message, source:require('../src/assets/icon/ic_information.png')};
            default:
                return {message: message, source:require('../src/assets/icon/ic_information.png')};

        }
    }

    static setOnClose(onClose) {
        this.onClose = onClose;
    }

    static invokeOnClose() {
        if (typeof this.onClose === 'function') {
            this.onClose();
        }
    }
}
