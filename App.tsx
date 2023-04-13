import NavigationProvider from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux/index";

// Installare dipendenze per la navigazione
// npm i @react-navigation/stack && @react-navigation/native && react-native-gesturehandler && react-native-safe-area-context
// Riferimento Slide 4

// git checkout feature/exercise-1
// git checkout feature/exercise-2
// git checkout feature/exercise-3
// git checkout feature/exercise-4
// git checkout feature/drawer-menu

// npm install @react-navigation/drawer
// babel.config.js plugins: ['react-native-reanimated/plugin'],
// Nel package.json debtro dependencies aggiungere
// "react-native-reanimated": "~2.14.4",
// alla fine npm i

// git checkout feature/tab-navigation
// npm i @react-navigation/bottom-tabs && react-native-vector-icons
// npm i --save-dev @types/react-native-vector-icons

// git checkout feature/redux
// npm install redux react-redux --save

// npm install -g eas-cli

const App = () => {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
  );
};
export default App;
