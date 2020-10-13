import React from 'react'

const SearchBar = props => {
    return (
        <form>
            <input value={props.searchTerm} onChange={props.searchHandler}/>
        </form>
    )
}

export {SearchBar}