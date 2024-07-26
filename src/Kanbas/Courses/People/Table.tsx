import React, { useState, useEffect } from "react";
import { FaCircleUser, FaPlus } from "react-icons/fa6";
import * as client from "./client";
import {useParams} from "react-router";
import { Link } from "react-router-dom";
import PeopleDetails from "./Details";

export default function PeopleTable() {
    const {cid} = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            loginId: `00012345${users.length + 1}`, 
            password: "password123",
            section: "S101",
            role: "STUDENT",
        });
        setUsers([...users, user]);
    };
    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await client.findUsersByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    const filterUsersByRole = async (role: string) => {
        setRole(role);
        if (role) {
            const users = await client.findUsersByRole(role);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div id="wd-people-table" className="p-2">
            <PeopleDetails fetchUsers={fetchUsers}/>
            <button onClick={createUser} className="float-end btn btn-danger">
                <FaPlus className="me-2"/>
                People
            </button>
            <input onChange={(e) => filterUsersByName(e.target.value)}
                   placeholder="Search people"
                   className="form-control float-start w-25 me-2"/>
            <select value={role}
                    onChange={(e) => filterUsersByRole(e.target.value)}
                    className="form-select float-start w-25"
            >
                <option value="">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
            </select>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user: any) => (
                    <tr key={user._id}>
                        <td className="text-nowrap">
                            <FaCircleUser className="fs-1 me-2 text-body-secondary"/>
                            <Link to={`/Kanbas/Courses/${cid}/People/${user._id}`}
                                  className="text-decoration-none text-danger"
                            >
                                {user.firstName} {user.lastName}
                            </Link>
                        </td>
                        <td>{user.loginId}</td>
                        <td>{user.section}</td>
                        <td>{user.role}</td>
                        <td>{user.lastActivity}</td>
                        <td>{user.totalActivity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};