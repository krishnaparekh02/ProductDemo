// --------------- LIBRARIES ---------------
import React from 'react';
import {
    View,
    Modal,
    ActivityIndicator,
    StyleSheet,
    Text,
    Animated,
} from 'react-native';

// --------------- ASSETS ---------------
import { Colors, Fonts, MainStyles, Matrics } from '../../CommonConfig';

// --------------- COMPONENT DECLARATION ---------------
const Loader = ({
    visible,
    label,
    springConfig = {
        damping: 25,
        mass: 0.8,
        stiffness: 500,
    },
}) => {
    const animations = {
        backdrop: React.useRef(new Animated.Value(0)).current,
        scale: React.useRef(new Animated.Value(0)).current,
    };
    const animationStyles = {
        backdrop: {
            opacity: animations.backdrop,
        },
        card: {
            transform: [
                {
                    scale: animations.scale.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1.25, 1],
                    }),
                },
            ],
            opacity: animations.scale.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
            }),
        },
    };

    React.useEffect(() => {
        if (visible == true) showAnimation();
        else if (visible == false) hideAnimation();
    }, [visible]);

    const showAnimation = () => {
        Animated.parallel([
            Animated.timing(animations.backdrop, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.spring(animations.scale, {
                toValue: 1,
                useNativeDriver: true,
                ...springConfig,
            }),
        ]).start();
    };

    const hideAnimation = () => {
        Animated.parallel([
            Animated.timing(animations.backdrop, {
                toValue: 0,
                duration: 80,
                useNativeDriver: true,
            }),
            Animated.timing(animations.scale, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true,
            }),
        ]).start();
    };

    return (
        <Modal
            visible={visible}
            transparent
            statusBarTranslucent={true}>
            <View style={styles.container}>
                <Animated.View
                    style={[styles.backdrop, animationStyles.backdrop,{backgroundColor: Colors.OVERLAY_DARK_50,}]}
                />
                <Animated.View
                    style={[styles.card, animationStyles.card,{ backgroundColor: Colors.WHITE,}]}>
                    <ActivityIndicator
                        size={'large'}
                        color={Colors.PRIMARY}
                    />
                    <Text style={[styles.label,{ color: Colors.BLACK}]}>
                        {label ?? 'Loading...'}
                    </Text>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
    },
    card: {
        height: Matrics.mvs(55),
        paddingHorizontal: Matrics.s(20),
        justifyContent: 'center',
        alignItems: 'center',
        ...MainStyles.shadow(),
        borderRadius: Matrics.mvs(12),
        flexDirection: 'row',
        maxWidth: '90%',
    },
    label: {
        fontSize: Matrics.mvs(14),
        fontFamily: Fonts.NexaBook,
        marginLeft: Matrics.s(8),
    },
});
export default Loader;
