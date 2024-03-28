import React, { useCallback } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import theme from '../theme';

const CameraModal = ({ isShow, setIsShow, openImagePicker, openCamera }: any) => {


    const onConfirm = useCallback(() => {
        setIsShow(!isShow)
    }, [])

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={isShow}
            onRequestClose={() => {
                setIsShow(false);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <View style={[theme.flexRow, theme.marginTop20]}>
                        <View style={{ marginRight: 20 }}>
                            <TouchableOpacity
                                style={[theme.primarybutton]}
                                onPress={openImagePicker}
                            >
                                <Text style={{ color: "#fff" }}>open Gallery</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity
                                style={[theme.secondarybutton]}
                                onPress={openCamera}
                            >
                                <Text style={{ color: "#6D6D6D" }}>Open Camera</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
    },
    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
});

export default CameraModal;