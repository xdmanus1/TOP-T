import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import DevlogPage from './DevlogAddForm.jsx';
// import DevlogManager from './DevlogManager.jsx';
import './AdminPanel.css'; // Assuming you have a CSS file for styling

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [devlogs, setDevlogs] = useState([]);
    const [newDevlogHeader, setNewDevlogHeader] = useState('');
    const [newDevlogChanges, setNewDevlogChanges] = useState('');
    const [loadingDevlogs, setLoadingDevlogs] = useState(true);
    const [experimentalBackground, setExperimentalBackground] = useState(false); // State for experimental background

    const toggleExperimentalBackground = () => {
        setExperimentalBackground(!experimentalBackground); // Toggle experimental background state
        const body2 = document.querySelector('.body2');
        if (body2) {
            body2.classList.toggle('show'); // Toggle .show class on body2 div
        }
    };
    // users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Simulate delay for testing
                setTimeout(async () => {
                    const usersSnapshot = await firebase.firestore().collection('users').get();
                    const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setUsers(usersData);
                    setLoadingUsers(false);
                }, 1000); // Delay of 2000 milliseconds (2 seconds)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    // orders
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Simulate delay for testing
                setTimeout(async () => {
                    const ordersSnapshot = await firebase.firestore().collection('orders').get();
                    const ordersData = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setOrders(ordersData);
                    setLoadingOrders(false);
                }, 1000); // Delay of 2000 milliseconds (2 seconds)
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const updateRole = async (userId, newRole) => {
        try {
            // Update role in the "users" collection
            await firebase.firestore().collection('users').doc(userId).update({ role: newRole });

            // If the new role is "admin", add the user to the "admins" collection
            if (newRole === 'admin') {
                await firebase.firestore().collection('admins').doc(userId).set({ isAdmin: true });
            } else {
                // If the new role is not "admin", remove the user from the "admins" collection if they exist
                await firebase.firestore().collection('admins').doc(userId).delete();
            }

            // Update the state to reflect the change
            setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    const toggleDone = async (orderId, currentStatus) => {
        const newStatus = currentStatus === 'Kész' ? 'Elfogadás Alatt' : 'Kész';
        try {
            await firebase.firestore().collection('orders').doc(orderId).update({ status: newStatus });
            setOrders(orders.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
        } catch (error) {
            console.error(`Error marking order as ${newStatus}:`, error);
        }
    };

    const deleteOrder = async (orderId) => {
        try {
            await firebase.firestore().collection('orders').doc(orderId).delete();
            setOrders(orders.filter(order => order.id !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };
    // devlog

    return (
        <div className='body2'>
            <div className="admin-panel-container">
                {loadingOrders || loadingUsers ? (
                    <div className="loading-spinner-container">
                        <span className="loader"></span>
                    </div>
                ) : (
                    <>
                        <div className="orders-management">
                            <h2 className="section-title">Rendelések kezelés</h2>
                            <ul className="orders-list">
                                {orders.map(order => (
                                    <li key={order.id} className="order-item">
                                        <div className="order-info">
                                            <span className={`order-name status-${order.status}`}>Név: {order.name}</span>
                                            <span className={`order-email status-${order.status}`}>Email: {order.email}</span>
                                            <span className={`order-email status-${order.status}`}>Tel.: {order.phoneNumber}</span>
                                            <span className={`order-email status-${order.status}`}>Típus: {order.product}</span>
                                            <span className={`order-email status-${order.status}`}>További Szöveg: {order.additionalText}</span>
                                            <span className={`order-status status-${order.status}`}>Státusz: {order.status}</span>
                                        </div>
                                        <div className="order-actions">
                                            <input
                                                type="checkbox"
                                                checked={order.status === 'Kész'}
                                                onChange={() => toggleDone(order.id, order.status)}
                                                className="order-done-checkbox"
                                            />
                                            <div className='xthing'>                                    <FontAwesomeIcon
                                                icon={faTimes}
                                                className="order-delete-icon"
                                                onClick={() => deleteOrder(order.id)}
                                            />
                                            </div>

                                        </div>
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="users-management">
                            <h2 className="section-title">Felhasználók kezelése</h2>
                            <ul className="users-list">
                                {users.map(user => (
                                    <li key={user.id} className="user-item">
                                        <div className="user-info">
                                            <span className="user-name"> {user.name}</span>
                                            <span className="user-email">Email: {user.email}</span>
                                            <span className="user-role">Rang: {user.role}</span>
                                        </div>
                                        <select
                                            onChange={(e) => updateRole(user.id, e.target.value)}
                                            value={user.role}
                                            className="user-role-select"
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="dev">Dev</option>
                                            <option value="user">User</option>
                                        </select>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <DevlogPage />
                        {/* <DevlogManager /> */}
                        <button className="experimental-background-button" onClick={toggleExperimentalBackground}>
                            {experimentalBackground ? "Turn off Experimental Background" : "Turn on Experimental Background"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
