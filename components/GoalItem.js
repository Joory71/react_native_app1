import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ id, onDelete, onEdit, title }) => {
  return (
    <View style={styles.goalItem}>
      <TouchableOpacity onPress={() => onEdit({ key: id, value: title })}>
        <Text>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '80%',
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default GoalItem;
