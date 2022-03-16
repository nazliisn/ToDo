import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ToDolist.styles';

const ToDoCard = ({toDo, completedCheckList}) => {
  const [styleC, setStyle] = useState(styles.toDo_text);
  const [completed, setCompleted] = useState(toDo.completed);

  function press() {
    if (!completed) {
      setStyle(styles.completed);
      setCompleted(true);
      completedCheckList(toDo.id);
    } else {
      setStyle(styles.toDo_text);
      setCompleted(false);
      completedCheckList(toDo.id);
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={press}>
        <Text style={styleC}>{toDo.inputText} </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ToDoCard;
