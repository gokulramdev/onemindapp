import React, { FC, ReactNode, useState } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import COLORS from '../constants/colors';

interface CustomTextInputProps extends TextInputProps {
    label: string;
    placeholder?: string;
    children?: ReactNode;
}

const CustomPasswordInput: FC<CustomTextInputProps> = ({
    label,
    placeholder,
    style,
    ...inputProps
}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                placeholderTextColor={inputProps.placeholderTextColor || '#494949'}
                secureTextEntry={isPasswordShown}
                {...inputProps}
            />

            <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                    position: "absolute",
                    right: 12,
                    top: "55%"
                }}
            >
                {
                    isPasswordShown ? (
                        <Text>Show</Text>
                    ) : (
                        <Text>Hide</Text>
                    )
                }
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        position: "relative"
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: '500',
        color: "#696F79",
    },
    input: {
        width: "100%",
        height: 58,
        borderColor: COLORS.lightgrey,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22
    },
});

export default CustomPasswordInput;

