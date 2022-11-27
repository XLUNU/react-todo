import { useState } from "react"
import { Row, Col, Button, FormControl } from "react-bootstrap"
import style from "./ListTodo.module.css"

const ListTodo = ({todo, setTodo}) => {
    
    const [edit, setEdit] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    const deleteHandle = (id) => {
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }
    
    const statusTodo = (id) => {
        let newTodo = [...todo].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    const editTodo = (id, title, description) => {
        setEdit(id);
        setEditTitle(title);
        setEditDescription(description);
    }

    const saveTodo = (id) => {
        let editTodo = [...todo].map(item => {
            if (item.id == id) {
                item.title = editTitle;
                item.description = editDescription;
            }
            return item
        })
        setEdit(null);
        setTodo(editTodo);
    }

    return(    
            todo.map(item => 
                    <div key={item.id} className={style.listItems}>
                        {/* <h2>Задача {item.id}</h2> */}
                        {
                            edit == item.id ? 
                            <div>
                                <FormControl className={style.input} value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                                <FormControl className={style.input} value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                            </div>
                                :
                            <div className={!item.status ? style.close : ''}>
                                <h3>{item.title}</h3>
                                <span>{item.description}</span>
                            </div>
                        }
                        {
                            edit == item.id ? 
                            <div>
                                <Button variant="outline-success" onClick={() => saveTodo(item.id)}>Сохранить</Button>
                            </div> : 
                            <div>
                                <Button variant="outline-primary" className = {style.btn} onClick={() => editTodo(item.id, item.title, item.description)}>Изменить</Button>
                                <Button variant="outline-success" className = {style.btn} onClick={() => statusTodo(item.id)}>Выполнено</Button>
                                <Button variant="outline-danger" className = {style.btn} onClick={() => deleteHandle(item.id)}>Удалить</Button>
                            </div>
                        }
                    </div>
                    )
        
    )
}

export default ListTodo