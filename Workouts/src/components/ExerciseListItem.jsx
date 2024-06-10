import { Dimensions, StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView } from 'react-native'; 



export default function ExerciseListItem({item, key}) {
    return (
      <View style={styles.exerciseContainer} key={key}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <View style={styles.exerciseGroup}>
        <Text style={{color: '#855E5E',   textTransform: 'capitalize'}}>{item.muscle}</Text> 
        <Text>|</Text> 
        <Text style={{color: '#493434',   textTransform: 'capitalize'}}>{item.equipment}</Text>
      </View>
    </View>
    )
  }
  

  const styles = StyleSheet.create({
    exerciseContainer: {
      width: Dimensions.get('window').width / 1.1,
      backgroundColor: '#D0D7E8',
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#222",
    },
    exerciseName: {
      color: '#4D7C7D',
      fontSize: 25,
      textTransform: 'capitalize',
    },
    exerciseGroup: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
      fontSize: 15,
      color: '#222',
      opacity: 0.5
    }
  });
  