// Remove.jsx
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Modal from './remove.jsx'; // Import the Modal component
import './TodoList.css';

const Remove = ({ isAdmin }) => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('Mátyás Team');
    const [deleteId, setDeleteId] = useState(null); // Track the id of the todo to delete
    const [showModal, setShowModal] = useState(false); // Control modal visibility

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const todoCollection = firebase.firestore().collection('todos');
                const snapshot = await todoCollection.get();
                const todoList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTodos(todoList);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();

        const unsubscribe = firebase.firestore().collection('todos')
            .onSnapshot(snapshot => {
                const todoList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setTodos(todoList);
            });

        return () => unsubscribe();
    }, []);

    const handleAddTodo = async () => {
        if (newTodo.trim() === '') return;

        try {
            const todoData = {
                title: newTodo.trim(),
                completed: false,
                team: selectedTeam,
                createdByAdmin: isAdmin || false // Set createdByAdmin to isAdmin if defined, otherwise false
            };

            await firebase.firestore().collection('todos').add(todoData);
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleToggleTodo = async (id, completed) => {
        try {
            await firebase.firestore().collection('todos').doc(id).update({
                completed: !completed
            });
        } catch (error) {
            console.error('Error toggling todo:', error);
        }
    };

    const handleDeleteTodo = async (todoId) => {
        console.log('Deleting todo with ID:', todoId);
        try {
            await firebase.firestore().collection('todos').doc(todoId).delete();
            console.log('Todo deleted successfully!');
            setShowModal(false); // Close the modal after confirming deletion
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleDeleteButtonClick = (todoId) => {
        console.log('Delete button clicked for todo:', todoId);
        setShowModal(true); // Ensure showModal is set to true
        setDeleteId(todoId);
    };

    return (
        <div className='todo-list'>
            <h1>Todo Lista</h1>
            <div className='todo-btns'>
                <input

                    className='input-field asd'
                    type="text"
                    placeholder="Todo hozzá adása"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <select className='dropdwn' value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                    <option value="Mátyás Team">Mátyás Team</option>
                    <option value="Hunor Team">Hunor Team</option>
                    <option value="Gáspár Team">Gáspár Team</option>
                </select>
                <button onClick={handleAddTodo}>Hozzá adás</button>
            </div>
            <ul >
                {todos.map(todo => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <input className='nyomi'
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id, todo.completed)}
                        />
                        <span>{todo.title} ({todo.team})</span>
                        <button onClick={() => handleDeleteButtonClick(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
            {showModal && (
                <Modal
                    message="Biztos vagy benne hogy ki akarod törölni?"
                    onConfirm={() => handleDeleteTodo(deleteId)} // Pass deleteId to handleDeleteTodo
                    onCancel={() => { setShowModal(false); setDeleteId(null); }}
                />
            )}
        </div>
    );
};

export default Remove;
