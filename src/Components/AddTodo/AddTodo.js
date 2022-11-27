import { useState } from "react"
import { Row, Col, Button, FormControl } from "react-bootstrap"
import style from "./AddTodo.module.css"

const AddTodo = ({todo, setTodo}) => {

    const [currentTitle, setCurrentTitle] = useState('')
    const [currentDescription, setCurrentDescription] = useState('')
    
    const newTask = () => {
        setTodo([...todo,
            {
                id: Date.now(),
                title: currentTitle,
                description: currentDescription,
                status: true,
              },
        ]);
        setCurrentTitle('');
        setCurrentDescription('');
    }  

    return(
        <Row>
            <Col className={style.AddForm}>
                <div>
                    <FormControl className={style.input} 
                    type="text"
                    value={currentTitle}
                    onChange={(e) => setCurrentTitle(e.target.value)}
                    placeholder="Название задачи">
                    </FormControl>
                </div> 
                <div>
                    
                    <FormControl className={style.input} 
                    value={currentDescription}
                    type="text"
                    onChange={(e) => setCurrentDescription(e.target.value)}
                    placeholder="Описание">
                    </FormControl>
                </div> 
                <Button className={style.btn} variant="outline-success" onClick={() => newTask()}>Сохранить</Button>
            </Col>
        </Row>
    )
}

export default AddTodo