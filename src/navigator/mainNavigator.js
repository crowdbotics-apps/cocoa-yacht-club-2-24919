import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings213039Navigator from '../features/Settings213039/navigator';
import UserProfile213032Navigator from '../features/UserProfile213032/navigator';
import Settings213031Navigator from '../features/Settings213031/navigator';
import Settings213029Navigator from '../features/Settings213029/navigator';
import SignIn2213027Navigator from '../features/SignIn2213027/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings213039: { screen: Settings213039Navigator },
UserProfile213032: { screen: UserProfile213032Navigator },
Settings213031: { screen: Settings213031Navigator },
Settings213029: { screen: Settings213029Navigator },
SignIn2213027: { screen: SignIn2213027Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
