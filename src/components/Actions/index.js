import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MotiScrollView } from 'moti';

export function Actions() {
    return (
        <MotiScrollView 
            style={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            from={{
                translateX: -150,
                opacity: 0
            }}
            animate={{
                translateX: 0,
                opacity: 1
            }}
            transition={{
                type: 'spring',
                duration: 500,
                delay: 300
            }}
        >
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="addfolder" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="tagso" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Carteira</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={26} color="#000"/>
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>

        </MotiScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 28,
        paddingStart: 14,
        paddingEnd: 14,
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton: {
        backgroundColor: '#F4F4F4',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})