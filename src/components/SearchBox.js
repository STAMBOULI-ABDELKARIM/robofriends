import React from "react";

const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div className="pd2">
            <input 
                onChange={searchchange}
                className="pd3 ba b--green bg-lightest-blue"
                type='search' 
                placeholder="search robots" 
            />
        </div>
        
    );
}

export default SearchBox;