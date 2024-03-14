import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contactus, LiveTelecast, LatestNews, Profile, UserView, HomeScreen } from "../screens";
import CustomHeader from "../screens/CustomHeader";
import { Image, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"



const Tab = createBottomTabNavigator();


const AppTabNav = () => {

    const withCustomHeader = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => {
        return function WrappedComponent(props) {
            return (
                <View style={{ flex: 1 }}>
                    <CustomHeader />
                    <Component {...props as P} />
                </View>
            );
        };
    };

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: {
                backgroundColor: '#000',
                paddingHorizontal: 5,
                paddingTop: 0,
                position: 'absolute',
                borderTopWidth: 0,
                height: 90,
            },
        }}>
            <Tab.Screen name="Home" component={withCustomHeader(HomeScreen)}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <Image
                            source={require('../assets/home.png')}
                        />
                    )
                }}
            />
            <Tab.Screen name="News" component={withCustomHeader(LatestNews)}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <Image
                            source={require('../assets/News.png')}
                        />
                    )
                }} />
            <Tab.Screen name="Events" component={withCustomHeader(LiveTelecast)}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <Image
                            source={require('../assets/LiveVideoOn.png')}
                        />
                    )
                }} />

            <Tab.Screen name="Contact" component={withCustomHeader(Contactus)}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <MaterialCommunityIcons name='phone' style={styles.headerIcons} />
                        </View>
                    )
                }} />
            <Tab.Screen name="Profile" component={withCustomHeader(Profile)}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <MaterialCommunityIcons name='account-outline' style={styles.headerIcons} />
                        </View>
                    )
                }} />
            {/* <Tab.Screen name="Userview" component={withCustomHeader(UserView)}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <Image
                            source={require('../assets/News.png')}
                        />
                    )
                }} /> */}

        </Tab.Navigator>
    )
};

export default AppTabNav


const styles = StyleSheet.create({

    headerIcons: {
        fontSize: 28,
        color: "#fff"
    },

});
