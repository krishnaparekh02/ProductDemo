// --------------- LIBRARY ---------------
import React from 'react';
import { StyleSheet, Platform, Dimensions } from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Constants, Icons, Images, Matrics, MainStyles, Fonts } from '../../CommonConfig';

export const ProductListStyle = StyleSheet.create({
    container : {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    btnAdd: {
        alignItems: 'center',
        paddingVertical: Matrics.vs(5),
        paddingHorizontal: Matrics.vs(10),
        backgroundColor: Colors.PRIMARY,
        borderRadius: Matrics.vs(5),
        marginRight: Matrics.vs(15),
        marginBottom: Matrics.vs(5)
    },
    btnLabel: {
        color: Colors.WHITE,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(18),
    },
    headerText: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(20),
        textTransform: 'capitalize',
        flex: 1,
        marginLeft: Matrics.vs(15),
        marginBottom: Matrics.vs(5)
    },
    swipeListStyle: {
        flexGrow: 1,
        marginHorizontal: Matrics.mvs(10),
        marginVertical: Matrics.vs(10)
    },
    deleteWrapper: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.RED,
        right: 0,
        position: 'absolute',
        width: Matrics.s(75)
    },
    delText: {
        color: Colors.WHITE,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(16),
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    itemInnerContainer: {
        backgroundColor: Colors.WHITE,
        padding: Matrics.vs(5)
    },
    Img: {
        height: Matrics.vs(35),
        width: Matrics.vs(35),
        borderRadius: Matrics.vs(5),
        resizeMode: 'stretch',
    },
    TitleText: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(18),
        textTransform: 'capitalize',
        fontWeight: '700',
        marginLeft: Matrics.vs(10)
    },
    priceTextLabel: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(16),
        textTransform: 'capitalize',
        marginTop: Matrics.vs(5),
    },
    priceText: {
        color: Colors.DarkGrey,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(16),
        textTransform: 'capitalize',
        marginTop: Matrics.vs(5),
    }
});

export const AddProductStyle = StyleSheet.create({
    container : {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    headerImg: {
        alignSelf: 'center',
        paddingLeft: Matrics.vs(15),
    },
    headerText: {
        color: Colors.BLACK,
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.mvs(20),
        textTransform: 'capitalize',
        textAlign: 'center',
        marginBottom: Matrics.vs(5),
        flex: 0.9
    },
    InnerContainer: {
        flex: 1,
        marginHorizontal: Matrics.vs(15),
        marginTop: Matrics.vs(20)
    },  
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        height: '100%',
        justifyContent: 'flex-end'
    },
    modalBottomView: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderTopLeftRadius: Matrics.vs(40),
        borderTopRightRadius: Matrics.vs(40),
    },
    grayBorder: {
        width: Matrics.s(50),
        backgroundColor: 'rgb(217,217,217)',
        height: Matrics.vs(5),
        marginVertical: Matrics.vs(20)
    },
    bottomButton: {
        height: Matrics.vs(150),
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    touchablePhoto: {
        borderWidth: Matrics.vs(3),
        borderColor: Colors.PRIMARY,
        borderRadius: Matrics.vs(5),
        width: '90%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cameraImg: {
        tintColor: Colors.PRIMARY,
        resizeMode: 'contain',
        height: Matrics.vs(20),
        width: Matrics.vs(20),
        marginHorizontal: Matrics.s(10),
    },  
    takPictureText: {
        paddingVertical: Matrics.vs(10),
        color: Colors.PRIMARY,
        fontSize: Matrics.mvs(16),
        fontFamily: Fonts.RobotoRegular,
        textAlign: 'center',
    },
    hintText: {
        marginTop: Matrics.vs(10),
        fontFamily: Fonts.RobotoRegular,
        fontSize: Matrics.vs(10),
        fontWeight: '700',
        color: Colors.INFO,
        textAlign: 'center'
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
    buttonImage: {
        marginVertical: Matrics.vs(20),
    },
    BtnImg: {
        height: Matrics.vs(100),
        width: Matrics.vs(100),
        borderRadius: Matrics.vs(10),
        alignSelf: 'center',
        resizeMode: 'stretch'
    }
});
