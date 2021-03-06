import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
  },
  toDo_text: {
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  completed: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    textDecorationLine: 'line-through',
  },
});
