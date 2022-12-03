// --------------- LIBRARIES ---------------
import React from 'react';
import { View, Text, Pressable, ImageBackground, Image, ScrollView, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// --------------- ASSETS ---------------
import { Colors, Fonts, MainStyles, Images, Icons, Matrics } from '../../CommonConfig';
import { LoginStyle as styles } from './Styles';
import { Input, Loader } from '../../Components/Common';
import { Popup } from '../../Helpers';
import { login } from '../../Redux/Actions';

const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    // --------------- REDUCER STATE ---------------
    const { Products } = useSelector((state) => state);
    const dispatch = useDispatch();

    //----------LIFECYCLE/ HOOKS---------------
    // React.useEffect(() => {
    //     if (isLoading && Products.isLoginSuccess == true) {
    //         setIsLoading(false);
    //         Popup.success(Products.successMsg);
    //         // console.log('userdata', Products?.data?.userData?.user?.uid);
    //     } else if (isLoading && Products.isLoginSuccess == false) {
    //         setIsLoading(false);
    //         Popup.error(Products.errorMsg);
    //     }
    // }, [Products.isLoginSuccess]);
    React.useEffect(() => {
        checkUserLogin();
    },[]);
    //----------METHOD---------------
    const checkUserLogin = () => {
        AsyncStorage.getItem('userid').then(data => {
            let userid = JSON.parse(data);
            console.log('userid', userid);
            global.userId = userid;
            if(userid){
                navigateToRoot();
            }
        });
    }
    const onPressSignIn = () => {
        let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == "") {
            setEmailError('Please enter email');
        } else if (reg.test(email) === false) {
            setEmailError('Please enter valid email address');
        } else if (password == "") {
            setPasswordError('Please enter password');
        } else if (password.length < 8) {
            setPasswordError('Your password must be at least 8 characters long');
        } else {
            setIsLoading(true);
            firebaseLogin();
        }
    }

    const FirebaseSignUp = () => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
            setIsLoading(false);
            console.log('User account created & signed in!-->', res);
            Popup.success('User logged in successfully!');
            await AsyncStorage.setItem('userid', JSON.stringify(res?.user?.uid));
            global.userId = res?.user?.uid;
            navigateToRoot();
        })
        .catch(error => {
            setIsLoading(false);
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                Popup.error('That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                Popup.error('That email address is invalid!')
            }
            console.error('error signup-->',error);
            Popup.error(error.message);
        });
    }

    const firebaseLogin = () => {
        // dispatch(login.Request({
        //     "email": email,
        //     "password": password
        // }));
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(async(res) => {
            setIsLoading(false);
            console.log('User signed in!');
            Popup.success('User logged in successfully!');
            await AsyncStorage.setItem('userid', JSON.stringify(res?.user?.uid));
            global.userId = res?.user?.uid;
            navigateToRoot();
        })
        .catch(error => {
            console.error('error-->', error);
            if(error.message == '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.')
            {
                FirebaseSignUp();
            } else {
                setIsLoading(false);
                Popup.error(error.message);
            }
        });
    }

    const navigateToRoot = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                { name: 'ProductList' },
                ],
            })
        );
    }

    //----------RENDER---------------
    return (
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    bounces={false}
                    contentContainerStyle={styles.container}
                >
                    <Text style={styles.TitleText}>SignIn</Text>
                    <Text style={styles.SubTitleText}>Enter email and password to signIn</Text>
                    <View style={styles.mainView}>
                        <Text style={styles.LabelText}>Email</Text>
                        <Input
                            style={styles.input}
                            placeholder={'Enter Email'}
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text), setEmailError('');
                            }}
                            keyboardType={'email-address'}
                            errorMsg={emailError}
                            inputStyle={{ color: Colors.BLACK}}
                        />
                        <Text style={styles.LabelText}>Password</Text>
                        <Input
                            style={styles.input}
                            placeholder={'Enter Password'}
                            value={password}
                            onChangeText={(text) => {
                                setPassword(text), setPasswordError('');
                            }}
                            secureTextEntry={true}
                            errorMsg={passwordError}
                            inputStyle={{ color: Colors.BLACK}}
                        />
                        <Pressable  onPress={() => onPressSignIn()} style={styles.btnContainer}>
                            <Text style={styles.label}>Login</Text>
                        </Pressable>
                    </View>
                    <Loader visible={isLoading} />
                </KeyboardAwareScrollView>
            </View>
    )
}

export default Login;