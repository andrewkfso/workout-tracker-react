import { useState } from 'react'
import Header from './components/Header'
import Exercises from './components/Exercises';
import AddExercise from './components/AddExercise';

const App = () => {
  const [showAddExercise, setShowAddExercise] = useState(false)
  const [exercises, setExercises] = useState([
    {
        id: 1,
        text: 'Barbell Chest Press',
        weight: 135,
        sets: 5,
        reps: 6,
        day: 'Feb 5th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Barbell Squats',
        sets: 5,
        reps: 3,
        weight: 185,
        day: 'Feb 6th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Deadlifts',
        sets: 5,
        reps: 7,
        weight: 225,
        day: 'Feb 5th',
        reminder: false,
    },
  ])

  // Add Exercise
  const addExercise = (exercise) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newExercise = { id, ...exercise }
    setExercises([...exercises, newExercise])
    console.log(id)
  }

  // Delete Exercise
  const deleteExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setExercises(exercises.map((exercise) => exercise.id === id ? { ...exercise, reminder: !exercise.reminder } : exercise))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddExercise(!showAddExercise)} showAdd={showAddExercise} />
      {showAddExercise && <AddExercise onAdd={addExercise} />}
      {exercises.length > 0 ? (<Exercises exercises={exercises} onDelete={deleteExercise} 
      onToggle={toggleReminder} />
      ) : (
        'No Exercises To Show')}
    </div>
  )
}



export default App
