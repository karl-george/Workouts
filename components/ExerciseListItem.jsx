import { StyleSheet, Text, View } from 'react-native';

export default function ExerciseListItem({ item, index }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>
        {index}. {item.name}
      </Text>
      <Text style={styles.exerciseSubtitle}>
        {item.muscle} | {item.equipment}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: { fontSize: 20, fontWeight: '500' },
  exerciseSubtitle: { color: 'dimgray', textTransform: 'capitalize' },
});
