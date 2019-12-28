import HomeScreen from "../containers/DashboardScreen";
import SearchFlightScreen from "../containers/SearchFlightScreen";
import FlightListScreen from "../containers/FlightListScreen";
import FlightInfoScreen from "../containers/FlightInfoScreen";
import PersonalInfoScreen from "../containers/PersonalInfoScreen";
import PaymentModeScreen from "../containers/PaymentModeScreen";
import NetBankingScreen from "../containers/NetBankingScreen";
import SuccessScreen from "../containers/SuccessScreen";
import LoginScreen from "../containers/LoginScreen";

const Routes = {
    HomeScreen: HomeScreen,
    SearchFlightScreen: SearchFlightScreen,
    FlightListScreen: FlightListScreen,
    FlightInfoScreen: FlightInfoScreen,
    PersonalInfoScreen: PersonalInfoScreen,
    PaymentModeScreen: PaymentModeScreen,
    NetBankingScreen: NetBankingScreen,
    SuccessScreen: SuccessScreen,
};

const RoutesLogin = {
    LoginScreen: LoginScreen,
};

const RoutesWithLogin ={...RoutesLogin,...Routes};

export {RoutesWithLogin,Routes};
