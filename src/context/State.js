import { AlertState } from "./alert/alertState";
import { FirebaseState } from "./firebase/FirebaseState";

const State = ({ children }) => {
    return (
        <FirebaseState>
        <AlertState>
            {children}
        </AlertState>
        </FirebaseState>
    )
}

export default State;