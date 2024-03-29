import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Contactus, LiveTelecast, LatestNews, Profile, UserView, HomeScreen, LatestNewsDetail, ChangePassword, BusinessEnquiry, UserEnquiry } from "../screens";
import CustomHeader from "../screens/CustomHeader";
import { StyleSheet, Text, View } from "react-native";
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
        <Stack.Navigator initialRouteName='homesearch' screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="homesearch" component={HomeScreen} />
            <Stack.Screen name="homesearchdetail" component={UserView} />
            <Stack.Screen name="userenquiry" component={UserEnquiry} />
        </Stack.Navigator>

    )
}

const NewsScreen = () => {
    return (
        <Stack.Navigator initialRouteName='newslist' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="newslist" component={LatestNews} />
            <Stack.Screen name="latestnewsdetail" component={LatestNewsDetail} />
        </Stack.Navigator>

    )
}

const ContactUsScreen = () => {
    return (
        <Stack.Navigator initialRouteName='contactus' screenOptions={{
            animationEnabled: false,
            headerShown: false
        }}>
            <Stack.Screen name="contactus" component={Contactus} />
            <Stack.Screen name="businessenquiry" component={BusinessEnquiry} />
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
            <Tab.Screen name="homesearchtab" component={UseView}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: (iconProps) => (
                        <View>
                            <Entypo name='home' style={styles.headerIcons} />
                        </View>
                    ),

                }}
            />
            <Tab.Screen name="newstab" component={NewsScreen}
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

            <Tab.Screen name="contacttab" component={ContactUsScreen}
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
            <Tab.Screen name="changepassword" component={ChangePassword}
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
