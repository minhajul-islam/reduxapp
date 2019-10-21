import {Platform} from 'react-native'

export const IS_LIVE = true;
export const BASE_IMAGE = IS_LIVE?"https://":"https://"; // Sandbox

export const USER_PROFILE = '/user-details';
export const USER_PHOTO = '/photo-upload';

export const VERSION = Platform.OS === 'ios' ? '1.0.1' : '1.0.1';
