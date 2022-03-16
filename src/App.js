import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  Alert,
} from 'react-native';
import ToDoCard from './components/ToDoCard';
import Header from './components/Header';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState();
  const [id, setId] = useState(0);
  const [toDoArray, setToDoArray] = useState([]);

  useEffect(() => {
    getunCompledToList(toDoArray);
  }, [toDoArray]);

  function increaseToDo() {
    if (!inputText) {
      Alert.alert('Yapılacaklar', 'Yapılacaklara olmayan görev girilemez!');
      return;
    } else {
      setToDoArray([...toDoArray, {id, inputText, completed: false}]);
      setId(id + 1);
    }
  }
  function renderItem({item}) {
    return <ToDoCard toDo={item} completedCheckList={completedCheckList} />;
  }

  const completedCheckList = id => {
    setToDoArray(
      toDoArray.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : {...todo},
      ),
    );
  };

  function getunCompledToList(tasks) {
    const unCompledToList = tasks.filter(task => task.completed === false);
    setCounter(unCompledToList.length);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header counter={counter}></Header>
      <FlatList
        keyExtractor={item => item.id}
        data={toDoArray}
        renderItem={renderItem}></FlatList>
      <View style={styles.save_container}>
        <TextInput
          placeholder="Yapılacak.."
          style={styles.input}
          onChangeText={setInputText}
        />
        <Button title="Kaydet" style={styles.button} onPress={increaseToDo} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212F3C',
  },
  save_container: {
    margin: 20,
    marginBottom: 25,
    backgroundColor: '#BFC9CA',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    padding: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  button: {
    margin: 10,
    borderRadius: 20,
  },
});

export default App;
