// --------------- LIBRARIES ---------------
import React from 'react';
import { StyleSheet, Image, Text, Dimensions } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --------------- ASSETS ---------------
import { MainStyles, Images, Icons, Matrics, Colors, Fonts } from './CommonConfig';

// --------------- SCREENS ---------------
import Login from './screens/Auth/Login';
import ProductList from './screens/Product/ProductList';
import AddProduct from './screens/Product/AddProduct';
import EditProduct from './screens/Product/EditProduct';

// --------------- ROUTES ---------------
const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ProductList'
                    component={ProductList}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='AddProduct'
                    component={AddProduct}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='EditProduct'
                    component={EditProduct}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;