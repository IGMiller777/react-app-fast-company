import React, { useState } from "react";
import { Paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import api from '../api'
import { professions } from "../api/fake.api/professions.api";
import { useEffect } from "react";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;

    // useEffect(() => {
    //     api.professions.fetchAll().then((data) => setProfession(data))
    //     console.log('ender');
    //     return () => {
    //         console.log('iunjjjj');
    //     }
    // }, [])
    const  [currentPage, setCurrentPage] = useState(1)
    // const [professions] = useState(api.professions.fetchAll())
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleProfessonSelect = (params) => {
        console.log(params);
    }
     
  
    const userCrop = Paginate(users, currentPage, pageSize)
    
    console.log(userCrop);
    return (
        <>
        <GroupList items={professions} onItemSelect={handleProfessonSelect}/>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}

            <Pagination 
                itemsCount={count} 
                pageSize={pageSize} 
                currentPage= {currentPage}
                onPageChange = {handlePageChange}/>

        </>
    );
};

export default Users;
