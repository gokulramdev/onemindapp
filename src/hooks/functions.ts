import Toast from 'react-native-root-toast';
import { Alert, Platform } from "react-native";


export const showToast = (message = "", isError = false,) => {
    const toast = Toast.show((message), {
        opacity: 1,
        duration: Toast.durations.SHORT,
        backgroundColor: isError ? '#EB5757' : '#6FCF97',
        position: Platform.OS === 'ios' ? 60 : Toast.positions.TOP,
        containerStyle: {
            borderRadius: 0,
            flex: 1, flexDirection: 'row', marginHorizontal: 0, marginTop: -10 - 10, minHeight: 55, alignItems: 'center', justifyContent: 'flex-start',
            width: "100%",
        },
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        textStyle: { flex: 1, fontSize: 14, color: "#fff", fontWeight: '400' },
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        },
    });

}
