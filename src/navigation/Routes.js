import HomeScreen from "../containers/DashboardScreen";
import SearchFlightScreen from "../containers/SearchFlightScreen";
import FlightListScreen from "../containers/FlightListScreen";
import PaymentScreen from "../containers/PaymentScreen";
import SuccessScreen from "../containers/SuccessScreen";
import LoginScreen from "../containers/LoginScreen";

const Routes = {
    HomeScreen: HomeScreen,
    SearchFlightScreen: SearchFlightScreen,
    FlightListScreen: FlightListScreen,
    PaymentScreen: PaymentScreen,
    SuccessScreen: SuccessScreen,
};

const RoutesLogin = {
    LoginScreen: LoginScreen,
};

const RoutesWithLogin ={...RoutesLogin,...Routes};

export {RoutesWithLogin,Routes};
