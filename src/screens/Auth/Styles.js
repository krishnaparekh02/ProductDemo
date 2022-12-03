// --------------- LIBRARY ---------------
import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Constants, Icons, Images, Matrics, MainStyles, Fonts } from '../../CommonConfig';

export const LoginStyle = StyleSheet.create({
    container : {
        flex: 1,
        marginHorizontal:  Matrics.s(10),
        marginBottom:  Matrics.vs(0),
        marginTop:  Matrics.vs(30),
    },
    TitleText: {
        marginTop: Matrics.vs(30),
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.vs(24),
        fontWeight: '700',
        color: Colors.PRIMARY
    },
    SubTitleText: {
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.vs(13),
        fontWeight: '600',
        color: Colors.SUBTITLE,
        marginTop: Matrics.vs(20) 
    },
    mainView: {
        flex: 0.9,
        justifyContent: 'center'
    },
    LabelText: {
        marginTop: Matrics.vs(10),
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.vs(13),
        fontWeight: '700',
        color: Colors.LABEL
    },
    input: {
        marginBottom: Matrics.vs(10),
    },
    btnContainer: {
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        // padding: Matrics.vs(5),
        width: '70%',
        alignSelf: 'center',
        borderRadius: Matrics.vs(10),
        marginTop: Matrics.vs(30),
    },
    label: {
        fontSize: Matrics.mvs(16),
        fontFamily: Fonts.RobotoRegular,
        paddingVertical:Matrics.ms(10),
        fontWeight: '700',
        textAlign: 'center',
        color: Colors.PRIMARY,
	},
});