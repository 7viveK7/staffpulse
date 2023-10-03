import { View, Text } from "react-native";


export default function StyledView({ w = 40, h = 40, r = 5, value }) {
    return (
        <View style={{ width: w, height: h, borderRadius: r, backgroundColor: '#c2e9fc', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#095c85', fontWeight: 'bold', fontSize: 22 }}>{value}</Text>
        </View>

    )
}