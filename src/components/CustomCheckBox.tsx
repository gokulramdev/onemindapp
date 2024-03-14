import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import COLORS from '../constants/colors';

interface CustomCheckBoxProps {
    label: string;
    status: "checked" | "unchecked";
    onPress: () => void
}

function CustomCheckBox({ label, status, onPress }: CustomCheckBoxProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start" }}>
                <Checkbox status={status} color={COLORS.primary} />
                <Text style={{ fontWeight: 'bold' }}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CustomCheckBox;