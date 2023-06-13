import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native'
import { useState } from 'react'

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Enter your goal'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title='Cancel'
            color='red'
            onPress={props.onCancel}
          />
          <Button
            style={styles.button}
            title='Add Goals'
            onPress={addGoalHandler}
            color='#b180f0'
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})
