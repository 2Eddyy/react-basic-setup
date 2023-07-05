import React, { useEffect, useState } from 'react';
import "./TableList.css";
import { Modal, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TableList() {
    const [employe, setEmploye] = useState([]);
    const [isShow, setShow] = useState(false);
    const [isShows, setShows] = useState(false);
    const [name, setName] = useState("");
    const [deleteuser, setDeleteUser] = useState("");

    useEffect(() => {
        fetch('https://dummyjson.com/users', {
            method: "get"
        })
            .then((res) => res.json())
            .then((result) => {
                setEmploye(result.users)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const initModal = () => {
        return setShow(false)
    }
    const deleteModal = () => {
        return setShows(false)
    }

    const EditData = (data) => {
        setName(data.firstName)
        setShow(!false)
    }
    const DeleteData = (data) => {
        setDeleteUser(data.id);
        setShows(!false);
    }
    return (
        <div className='body'>
            <div>
                <h4 className='text-center mt-3'>Employe Data Lists</h4>
            </div>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Employe Details Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form name='popForm'>
                        <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                UserId
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type='text' value={name} />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={initModal}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={initModal}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={isShows}>
                <Modal.Header closeButton onClick={deleteModal}>
                    <Modal.Title>Employe Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure delete employe id  {deleteuser}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteModal}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={deleteModal}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='test'>
                <table className='container table'>
                    <thead>
                        <tr>
                            <th>Employe Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employe.map((user, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><button className='table-btn' onClick={(() => EditData(user))}>Edit</button> <button className='table-btn' onClick={(() => DeleteData(user))}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableList