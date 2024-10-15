import { StatuBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function App() {
    return (
        <View style={style.container}>
            <View style={style.headContainer}>
        <Text> Open up App.js Hola mundo ! </Text>
        </View>
        <StatuBar style="auto" />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headContainer: {
        backgroundColor: 'pink'
    }
})