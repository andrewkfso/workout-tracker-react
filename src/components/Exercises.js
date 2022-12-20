import Exercise from "./Exercise"

const Exercises = ({ exercises, onDelete, onToggle }) => {
    

  return (
    <>
        {exercises.map((exercise) => (
            <Exercise key={exercise.id} 
            exercise={exercise} 
            onDelete={onDelete} 
            onToggle={onToggle} />
        ))}
    </>
  )
}

export default Exercises