import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

export default function App() {
  const [goals, setGoals] = useState(sampleGoals.map((goal, index) => ({ key: `${index}`, value: goal })));
  const [isAddMode, setIsAddMode] = useState(false);
  const [goalToEdit, setGoalToEdit] = useState(null);

  const addGoal = (goalTitle) => {
    if (goalToEdit) {
      setGoals(goals.map(goal => goal.key === goalToEdit.key ? { ...goal, value: goalTitle } : goal));
      setGoalToEdit(null);
    } else {
      setGoals([...goals, { key: `${goals.length + 1}`, value: goalTitle }]);
    }
    setIsAddMode(false);
  };

  const deleteGoal = (goalKey) => {
    setGoals(goals.filter(goal => goal.key !== goalKey));
  };

  const editGoal = (goal) => {
    setGoalToEdit(goal);
    setIsAddMode(true);
  };

  const cancelAddGoal = () => {
    setIsAddMode(false);
    setGoalToEdit(null);
  };

  return (
    <View style={styles.container}>
      <Button title="Ajouter un nouvel objectif" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoal} onCancel={cancelAddGoal} goalToEdit={goalToEdit} />
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <GoalItem id={item.key} onDelete={deleteGoal} onEdit={editGoal} title={item.value} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
