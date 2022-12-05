import auth from '@react-native-firebase/auth';

export default {
    Login: (params) => {
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
                message:  error.message,
            }
        });
    },
    register: (params) => {
        const Email = params?.email;
        const Password = params?.password;
        return auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then(async (res) => {
            console.log('User account created & signed in!-->', res);
            return {
                status: true,
                data: res,
            }
        })
        .catch(error => {
            return {
                status: false,
                data: error,
            }
        });
    }
}