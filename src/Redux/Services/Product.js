const BASE_URL = '';

export default {
    Login: (params) => {
        return fetch(BASE_URL + 'Login', {
            method: 'POST',
            headers: {
                ...Headers,
                Accesskey: global.accesskey == "" || global.accesskey == undefined ? 'nousername' : global.accesskey,
                Secretkey: global.secretkey,
            },
            // headers: {
            //     'Content-Type': 'application/json',
            //     accesskey: 'nousername',
            //     secretkey: global.secretkey,
            //     'User-Agent': Constants.USER_AGENT,
            //     devicetype: Constants.DEVICE_TYPE,
            //     devicetoken: null,
            // },
            body: JSON.stringify(params),
        })
            .then((response) => Ajax.handleResponse(response))
            .then((data) => data);
    },
}