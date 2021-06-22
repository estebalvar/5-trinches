import React from "react";
import { Navigation Container } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Restaurantes from 

const Tab = createBottomTabNavigator();

export default function Navegacion(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen />
            </Tab.Navigator>
        </NavigationContainer>
    )
}