import { FaTimes } from 'react-icons/fa'

const Exercise = ({ exercise, onDelete, onToggle }) => {
  return (
    <div className={`task ${exercise.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(exercise.id)}>
        <h3>
            {exercise.text}
            <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                onClick={() => onDelete(exercise.id)} />
        </h3>
        <p>{exercise.sets + ' sets x ' + exercise.reps + ' reps, ' + exercise.weight + ' lbs'}</p>
        <p>{exercise.day}</p>
    </div>
  )
}

export default Exercise