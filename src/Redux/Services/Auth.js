import auth from '@react-native-firebase/auth';

export default {
    Login: (params) => {
        console.log('params-->', params);
        const Email = params?.email;
        const Password = params?.password;
        return auth()
        .signInWithEmailAndPassword(Email, Password)
        .then((res) => {
            // setIsLoading(false);
            console.log('User signed in!',typeof  res);
            return {
                status: true,
                data: res,
            }
        })
        .catch(error => {
            console.error('error-->', error);
            console.error('msg-->',  error.message);
            return {
                status: false,
                data: error,
            }
            // if(error.message == '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.')
            // {
            //     // FirebaseSignUp();
            // } else {
            //     // setIsLoading(false);
            //     console.log('else')
            //     Popup.error(error.message);
            // }
        });
    },
}