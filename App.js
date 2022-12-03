import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// --------------- ASSETS ---------------
import Routes from './src/Routes';
import { snackBarRef } from './src/Helpers/Popup';
import { MainStyles, Images, Icons, Matrics, Colors } from './src/CommonConfig';
import { Store, Persistor } from './src/Redux/Store';
import { SnackBar } from './src/Components/Common';
/**
 * Font scalling configuration for Android :)
 */
 if (Text.defaultProps == null) Text.defaultProps = {};
 Text.defaultProps.allowFontScaling = false;
 if (TextInput.defaultProps == null) TextInput.defaultProps = {};
 TextInput.defaultProps.allowFontScaling = false;

const App = ()  => {
  return (
    <Fragment>
      <Provider store={Store}>
        <PersistGate persistor={Persistor}>
          <SafeAreaProvider>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE}/>
            <Routes />
            <SnackBar ref={snackBarRef} />
          </SafeAreaProvider>
        </PersistGate>
        </Provider>
    </Fragment>
    
  );
};

const styles = StyleSheet.create({
});

export default App;
