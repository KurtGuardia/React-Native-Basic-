import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native'

export default function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goldText}>{props.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: '#fff',
  },
  goldText: {
    color: '#fff',
  },
})
