/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {StyleSheet, View} from 'react-native';
import Todos from './src/components/Todos';
import Form from './src/components/Form';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = Props => {
  const [editFormVisibility, setFormVisibility] = useState(false);
  const [editToDo, setEditTodo] = useState('');
  const handleEditClick = todo => {
    setFormVisibility(true);
    setEditTodo(todo);
  };
  const cancelUpdate = () => {
    setFormVisibility(false);
  };
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Form
          editFormVisibility={editFormVisibility}
          editToDo={editToDo}
          cancelUpdate={cancelUpdate}
        />
        <Todos
          handleEditClick={handleEditClick}
          editFormVisibility={editFormVisibility}
        />
      </Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
});
