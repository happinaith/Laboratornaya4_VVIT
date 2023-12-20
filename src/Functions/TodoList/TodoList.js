import React, { useState } from 'react'
import { Row, Col, Button,ButtonGroup, FormControl } from 'react-bootstrap'
import s from './TodoList.module.css'

function TodoList ({ todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo)

    

    function todoFilter(status) {
        if(status === 'all')  {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter( item => item.status === status)
            setFiltered(newTodo)
        }
    }

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if(item.id === id)
            {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id === id)
            {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }


    return (
        <div>
            <ButtonGroup aria-label="Filter">
                <Button variant="secondary" onClick={ ()=>todoFilter('all')}>Все</Button>
                <Button variant="secondary" onClick={ ()=>todoFilter(true)}>Невыполнены</Button>
                <Button variant="secondary" onClick={ ()=>todoFilter(false)}>Выполнены</Button>
            </ButtonGroup>
            {
                filtered.map(item => (
                    <div key={item.id} className={s.ItemList}>
                        {
                            edit === item.id ? 
                                <div>
                                    <input value={value} onChange={(e) => setValue(e.target.value)}/>
                                </div> :
                                <div className={ !item.status ? s.close: ''}> {item.title} </div>
                        }

                        {
                            edit === item.id ?
                                <div>
                                    <button onClick = { () => saveTodo(item.id)}>Сохранить</button>
                                </div> :
                                <div>
                                    <button onClick={ () => deleteTodo(item.id)}> Удалить </button>
                                    <button onClick={ () => statusTodo(item.id)}> Выполнена/Невыполнена </button>
                                    <button onClick={ () => editTodo(item.id, item.title)}> Изменить </button>
                                </div>
                        }
                        
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList