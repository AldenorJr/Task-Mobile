import { StatusBar } from 'expo-status-bar';
import react, { useEffect, useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Tarefa from './src/Tarefa';

export default function App() {

  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([
    {
      key: "1",
      task: "Fazer o mobile app"
    },
    {
      key: "2",
      task: "Ir para a academia"
    },
    {
      key: "3",
      task: "Fazer a A3"
    }
  ]);

  function addTask() {
    
    if(task == '') {
      return;
    }
    const dados = {
      key: Date.now(),
      task: task
    }
    setListTask(oldListkTask => [dados, ...oldListkTask]);
    setTask('');
  }

  function deleteTask(item) {
    let list = listTask.filter((task) => {
      return (task !== item)
    })
    setListTask(list);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de tarefas</Text>
      <View style={styles.cadastro}>
        <TextInput
          placeholder='Digite sua tarefa'
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        >
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <FontAwesome name={'plus'} color='#fff' size={25}></FontAwesome>
        </TouchableOpacity>
      </View>
      <FlatList
        data={listTask}
        style={styles.tasks}
        keyExtractor={ ({key}) => key}
        renderItem={ ({item}) => <Tarefa task={item.task} deleteItem={() => deleteTask(item)}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  cadastro: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: '#22272e',
    paddingHorizontal: 20,
  },
  tasks: {
    marginVertical: 20,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  titulo: {
    fontSize: 32,
    textAlign: 'left',
    color: 'white',
    marginTop: 10,
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#FFF',
    width: '75%',
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 17
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#73f7ff',
    height: 40,
    width: '15%',
    marginLeft: 10,
    borderRadius: 4
  }

});
