import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function Tarefa({task, deleteItem}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={deleteItem}>
                <FontAwesome name="trash" size={25} color={'#22272e'}/>
            </TouchableOpacity>
            <Text style={styles.task}>{task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'rgba(196,196,196, 0.20)',
        marginTop: 12,
        marginHorizontal: 17,
        padding: 12,
        borderRadius: 4,
    },
    task: {
        color: '#000',
        fontSize: 18,
        marginLeft: 10,
        width: 300,
    },
});