import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contactus, LiveTelecast, LatestNews, Profile, UserView, HomeScreen } from "../screens";
import CustomHeader from "../screens/CustomHeader";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"


const Tab = createBottomTabNavigator();


const AppTabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: true,
            header: () => <CustomHeader />,
            tabBarStyle: {
                backgroundColor: '#000',
                paddingHorizontal: 5,
                paddingTop: 0,
                position: 'absolute',
                borderTopWidth: 0,
                height: 90,
            },
        }}>
            <Tab.Screen name="home" component={HomeScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <Entypo name='home' style={styles.headerIcons} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="news" component={LatestNews}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <Ionicons name='newspaper-outline' style={styles.headerIcons} />
                        </View>
                    )
                }} />
            <Tab.Screen name="events" component={LiveTelecast}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <Feather name='video' style={styles.headerIcons} />
                        </View>
                    )
                }} />

            <Tab.Screen name="contact" component={Contactus}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <MaterialCommunityIcons name='phone' style={styles.headerIcons} />
                        </View>
                    )
                }} />
            <Tab.Screen name="profile" component={Profile}
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
