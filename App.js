import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseListItem from './components/ExerciseListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 5 }}
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item, index }) => (
          <ExerciseListItem item={item} index={index} />
        )}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,
  },
});
