import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import exercises from "../assets/data/exercises.json";
import ExerciseListItem from '../src/components/ExerciseListItem.jsx'



export default function App() {
  let exercise = exercises[0];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={exercises}
        contentContainerStyle={{gap: 10}}
        renderItem={({item, key}) => 
          <ExerciseListItem item={item} key={key}/>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


