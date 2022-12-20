import { useState } from 'react'

const AddExercise = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [sets, setSets] = useState(0)
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState(0)
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a exercise')
            return
        }

        onAdd({ text, sets, reps, weight, day, reminder })
        
        setText('')
        setSets(0)
        setReps(0)
        setWeight(0)
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Exercise</label>
            <input type='text' placeholder='Add Exercise' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Sets, Reps and Weight</label>
            <input type='number' placeholder='0' min='0' value={sets} onChange={(e) => setSets(e.target.value)} />
            <input type='number' placeholder='0' min='0' value={reps} onChange={(e) => setReps(e.target.value)} />
            <input type='number' placeholder='0' min='0' step='2.5' value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Day</label>
            <input type='text' placeholder='Add Day' value={day} onChange={(e) => setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value='Save Exercise' className='btn btn-block' />
    </form>

  )
}

export default AddExercise