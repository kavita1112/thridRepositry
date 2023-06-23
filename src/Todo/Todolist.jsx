import { useState } from "react"

const Todolist = () => {
    const [text, settext] = useState('')
    const [arr, setarr] = useState([])
    const [editId, seteditId] = useState(null)
    const sumbitHandler = (e) => {
        e.preventDefault();
        if (editId === null) {
            setarr((prevalue) => [...prevalue, { id: arr.length, text: text }])
            settext("")
        } else {
            setarr((prevalue) => prevalue.map((a) => a.id === editId ? { ...a, text: text } : a))
            settext('')
            seteditId(null)
        }
    }

    const deletehandler = (index) => {
        setarr((prevalue) => prevalue.filter((a) => a.id !== index))
     }

    const edithandler = (id, text) => {
        settext(text)
        seteditId(id)
    }
    return (
        <div>
            <form onSubmit={sumbitHandler}>
                <input type="text" value={text} onChange={(e) => { settext(e.target.value) }} />
                <button>{editId ? "Update" : "ToDo"}</button>
            </form>

            <div>
                {
                    arr.map((a, index) => {
                        return <div key={index}>
                            <h5>{a.text} <button onClick={() => { deletehandler(a.id) }}>Delete</button>
                                <button onClick={() => { edithandler(a.id, a.text) }}>Edit</button>
                            </h5>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Todolist