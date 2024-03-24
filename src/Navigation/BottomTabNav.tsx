import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contactus, LiveTelecast, LatestNews, Profile, UserView, HomeScreen, LatestNewsDetail, ChangePassword, BusinessEnquiry, UserEnquiry } from "../screens";
import CustomHeader from "../screens/CustomHeader";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import { createStackNavigator } from "@react-navigation/stack";
import { useAtom } from "jotai";
import { tokenAtom } from "../store/tokenAtom";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const UseView = () => {
    return (
        <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="userview" component={UserView} />
        </Stack.Navigator>

    )
}

const NewsScreen = () => {
    return (
        <Stack.Navigator initialRouteName='news' screenOptions={{ headerShown: true, animationEnabled: false }}>
            <Stack.Screen name="news" component={LatestNews} />
            <Stack.Screen name="latestnewsdetail" component={LatestNewsDetail} />
        </Stack.Navigator>

    )
}
const BottomTabNav = () => {

    const [userToken] = useAtom(tokenAtom)

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
            tabBarHideOnKeyboard: true
        }}>
            <Tab.Screen name="home" component={UseView}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <Entypo name='home' style={styles.headerIcons} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="news" component={NewsScreen}
                options={{
                    headerShown: false,
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
            {userToken
                && <Tab.Screen name="profile" component={Profile}
                    options={{
                        tabBarLabel: () => null,
                        tabBarIcon: (iconProps) => (
                            <View>
                                <MaterialCommunityIcons name='account-outline' style={styles.headerIcons} />
                            </View>
                        ),
                    }} />
            }
            {/* <Tab.Screen name="userview" component={UserView}
                options={{ tabBarLabel: () => null, tabBarButton: () => null, header: () => null }}
            /> */}
            {/* <Tab.Screen name="latestnewsdetail" component={LatestNewsDetail}
                options={{ tabBarLabel: () => null, tabBarButton: () => null, header: () => null }}
            /> */}
            <Tab.Screen name="changepassword" component={ChangePassword}
                options={{ tabBarLabel: () => null, tabBarButton: () => null, header: () => null }}
            />
            <Tab.Screen name="userenquiry" component={UserEnquiry}
                options={{ tabBarLabel: () => null, tabBarButton: () => null, header: () => null }}
            />
            <Tab.Screen name="businessenquiry" component={BusinessEnquiry}
                options={{ tabBarLabel: () => null, tabBarButton: () => null, header: () => null }}
            />
        </Tab.Navigator>
    )
};

export default BottomTabNav


const styles = StyleSheet.create({

    headerIcons: {
        fontSize: 28,
        color: "#fff"
    },

});
