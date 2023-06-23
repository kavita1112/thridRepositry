


const Todo=()=>{
    return <div>
        <h1>heloo</h1>
    </div>
}
export default Todo














// import { useState } from 'react'
// import './todo.css'

// const Todo = () => {
//     let [text, settext] = useState('');
//     let [arr, setarr] = useState([])
//     let[editId,seteditId]=useState(null)
//     const handler = (e) => {
//         settext(e.target.value)

//     }

//     const Sumbithandler = (e) => {
//         e.preventDefault()
     
//        if(editId===null){
//          setarr((prevalue) => {
//             return [...prevalue, {id:arr.length+1,text:text}]
//         })
//         settext('')
//        }
//        else{
//         setarr((prevalue)=>prevalue.map((a)=>a.id===editId?{...a,text:text}:a))
//         settext("");
//         seteditId(null)
//        }
//     }

//     const deletehandler = (id) => {
//         setarr((prevalue) => {
//             return prevalue.filter((data) => {
//                 return data.id !== id
//             })
//         })
//     }

//     const edithandler=(id,value)=>{
//         settext(value);
//         seteditId(id)
//     }

//     return (
//         <div>
//             <div>
//                 <form onSubmit={Sumbithandler}>
//                     <input type='text' placeholder="text" onChange={handler} value={text} />
//                     <button>{editId?"Update":"ToDo"}</button>
//                 </form>
//             </div>
//             {
//                 arr.map((data) => {
//                     return <div key={data.id}>
//                         <h5>{data.text} <button onClick={() => { deletehandler(data.id) }}>Delete</button>
//                             <button onClick={()=>{edithandler(data.id,data.text)}}>Edit</button>
//                         </h5>
//                     </div>
//                 })
//             }

//         </div>
//     )
// }

// export default Todo