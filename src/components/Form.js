import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';
// import {addTodo, handleEditSubmit} from '../redux/todoapp/actions';
import { addTodo,handleEditSubmit } from '../store/action';
import {useDispatch} from 'react-redux';
const Form = ({editFormVisibility, editToDo, cancelUpdate}) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');
  const [editValue, setEditValue] = useState('');
  useEffect(() => {
    setEditValue(editToDo.todo);
  }, [editToDo]);

  const handleSubmit = e => {
    e.preventDefault();
    let todoObj = {
      id: Math.ceil(Math.random() * 100),
      todo: todoValue,
    };
    setTodoValue('');
    dispatch(addTodo(todoObj));
  };
  const editSubmit = e => {
    e.preventDefault();
    let editedObj = {
      id: editToDo.id,
      todo: editValue,
    };
    setEditValue('');
    dispatch(handleEditSubmit(editedObj));
  };
  return (
    <>
      {editFormVisibility === false ? (
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.input}
              value={todoValue}
              onChangeText={text => setTodoValue(text)}
            />
            <Button title="ADD" onPress={handleSubmit} disabled={!todoValue} />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.input}
              value={editValue}
              onChangeText={text => setEditValue(text)}
            />
            <View style={styles.displayFlex}>
              <View style={styles.button}>
                <Text style={styles.display} onPress={editSubmit} disabled={!editValue}>
                  Update
                </Text>
              </View>
              <View style={styles.button}>
                <Text style={styles.display} onPress={cancelUpdate} >
                  Add
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default Form;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginBottom: 20,
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%',
  },
  container: {
    marginBottom: 40,
  },
  display: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  displayFlex: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
