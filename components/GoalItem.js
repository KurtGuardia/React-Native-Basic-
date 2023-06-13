import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native'

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) =>
          pressed && styles.pressedItem
        }
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text style={styles.goldText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
    // backgroundColor: '#210644',
    // borderRadius: 6,
    // margin: 8,
    // padding: 8,
    // color: '#fff',
  },
  goldText: {
    padding: 8,
    color: '#fff',
  },
})
