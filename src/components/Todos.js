import React from 'react';
import {View, Text, ScrollView, Image, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
// import {removeTodo} from '../redux/todoapp/actions';
import { removeTodo } from '../store/action';
const Todos = ({handleEditClick, editFormVisibility}) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.operationsReducer);
  console.warn(todos);
  return (
    <View>
      {todos.map(todo => (
        <View key={todo.id} style={styles.displayFlex}>
          <View style={styles.todoList}>
            <Text style={styles.display}>{todo.todo}</Text>
          </View>
          <View style={styles.button}>
            <Text
              style={styles.display}
              onPress={() => dispatch(removeTodo(todo.id))}>
              Delete
            </Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.display} onPress={() => handleEditClick(todo)}>
              Update
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default Todos;

const styles = StyleSheet.create({
  display: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  displayFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    height: 45,
    width: '30%',

    backgroundColor: 'lightblue',
  },
  todoList: {
    height: 50,
    width: '30%',
  },
});
