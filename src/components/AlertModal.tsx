import React, { useCallback } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import theme from '../theme';

const AlertModal = ({ modalVisible, setModalVisible, onSubmit }: any) => {


    const onConfirm = useCallback(() => {
        (onSubmit) && onSubmit()
        setModalVisible(!modalVisible)
    }, [])

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={[theme.H1]}>Are you sure want delete account?</Text>

                    <View style={[theme.flexRow, theme.marginTop20]}>
                        <View style={{ marginRight: 20 }}>
                            <TouchableOpacity
                                style={[theme.primarybutton]}
                                onPress={onConfirm}
                            >
                                <Text style={{ color: "#fff" }}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <TouchableOpacity
                                style={[theme.secondarybutton]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{ color: "#6D6D6D" }}>Cancel</Text>
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

export default AlertModal;