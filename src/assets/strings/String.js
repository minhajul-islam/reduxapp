import LocalizedStrings from 'react-native-localization';
import React from 'react';

let String = new LocalizedStrings({
    en: {
        apps_name: 'MY APP',
        title_login: 'Login',
        phone_number: 'Phone Number',
        send_login_code: 'Send login code',
        continue: 'Continue',
        no:'NO',
        yes:'YES',
        privacy_policy:'Privacy policy'
    },
    bn: {
        apps_name: 'MY APP',
        title_login: 'Login',
        phone_number: 'Phone Number',
        send_login_code: 'Send login code',
        continue: 'Continue',
        no:'NO',
        yes:'YES',
        privacy_policy:'Privacy policy'

    },
});
module.exports = String;
