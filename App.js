import { useState } from 'react'
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] =
    useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ])
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== key)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color='#5e0acc'
        onPress={startAddGoalHandler}
      />
      {modalIsVisible && (
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
          )}
          data={courseGoals}
          // alwaysBounceVertical={true}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
})
