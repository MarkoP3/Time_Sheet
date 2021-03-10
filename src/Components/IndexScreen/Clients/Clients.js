import React from 'react'
import Alpha from '../../Alpha/Alpha'
import Pagination from '../../Pagination/Pagination'
import Title from '../Title/Title'
import ClientSearchAndAdd from './ClientSearchAndAdd/ClientSearchAndAdd'
import List from './List/List'

function Clients() {
    return (
        <div className="wrapper">
        <section className="content">   
            <Title title="Clients"></Title>
            <ClientSearchAndAdd></ClientSearchAndAdd>
            <Alpha></Alpha>
            <List></List>
            <Pagination></Pagination>
        </section>
        </div>
    )
}

export default Clients
