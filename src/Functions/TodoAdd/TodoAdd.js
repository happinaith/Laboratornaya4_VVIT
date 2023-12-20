import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './TodoAdd.module.css'

function TodoAdd ({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo,
            {
                id: Date.now(),
                title: value,
                status: false
            }]
        )
        setValue('')
    }

    return (
        <Row>
            <Col className={s.TodoAddForm}>
                <FormControl placeholder='Имя' value={value} onChange={ (e) => setValue(e.target.value) }/>
                <Button variant="success" onClick={saveTodo} className={s.btn}>Добавить задачу</Button>
            </Col>
        </Row>
    )
}

export default TodoAdd