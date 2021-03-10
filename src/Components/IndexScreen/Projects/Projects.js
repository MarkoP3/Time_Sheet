import React from 'react'
import Alpha from '../../Alpha/Alpha'
import Pagination from '../../Pagination/Pagination'
import Title from '../Title/Title'
import List from './List/List'
import SearchAndAddBox from './SearchAndAddBox/SearchAndAddBox'

function Projects() {
    return (
        <div className="wrapper">
        <section className="content">   
            <Title title="Projects"></Title>
            <SearchAndAddBox></SearchAndAddBox>
            <Alpha></Alpha>
            <List></List>
            <Pagination></Pagination>
        </section>
        </div>
    )
}

export default Projects
