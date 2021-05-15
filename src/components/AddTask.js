import { useState } from 'react'

export const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')

    const [day, setDay] = useState('')

    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add task')
            return;
        }

        if(!day){
            alert('Please add day')
            return;
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeHolder='Add Task'
                value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeHolder='Add Day & Time'
                value={day}
                onChange={(e) => setDay(e.target.value)}
                ></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                onChange={(e) => setReminder(e.currentTarget.checked)}
                checked={reminder}
                ></input>
            </div>
            <input type="submit" className='btn btn-block' value='Save Task'/>
        </form>
    )
}
export default AddTask;