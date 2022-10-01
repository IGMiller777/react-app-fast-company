import React, {useState} from "react";
import api from "../api"

const Users = () => { 
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleIt = (userId) => { 
        return setUsers(users.filter((user) => user._id !==  userId))
    }

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        return "человек тусанет";
    };

    return (
        <>
        <h2> 

        <span 
        className={"badge " + (users.length > 0 ? "bg-primary" : "bg-danger")}
        >
           {users.length > 0
            ? `${users.length + " " + renderPhrase(users.length)} с тобой сегодня`
            : "Никто с тобой не тусанет"}
             </span>
             </h2>

        {users.length > 0 && ( 
        <table className="table" striped bordered hover>
            <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Qualities</th>
            <th scope="col">Job</th>
            <th scope="col">Count meetings</th>
            <th scope="col">Rate</th>
            <th/>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <tr>

                    <td>{user.name}</td>
                    <td>{user.qualities.map((item) => (
                        <span className={"badge m-1 bg-" + item.color} 
                        key={item._id}>
                        {item.name}
                         </span>
                    ))}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate} /5</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => handleIt(user._id)}>Delete</button>
                    </td>
                </tr>
                    ))}
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
                </table>
                )}
        </>
    )
}

export default Users;