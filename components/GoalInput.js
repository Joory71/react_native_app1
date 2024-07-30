import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ visible, onAddGoal, onCancel, goalToEdit }) => {
  const [goal, setGoal] = useState('');

  useEffect(() => {
    if (goalToEdit) {
      setGoal(goalToEdit.value);
    } else {
      setGoal('');
    }
  }, [goalToEdit]);

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(goal);
    setGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ajouter un nouvel objectif"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={goalToEdit ? "Modifier" : "Ajouter"} onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Annuler" color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
