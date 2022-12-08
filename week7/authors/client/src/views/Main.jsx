import React, {useState} from 'react';

import DisplayAuthors from '../components/DisplayAuthors';
import View from '../components/ViewAuthor';

const Main = (props) => {

    const [authors, setAuthors] = useState([]);

    const removeFromDom = id => {
        setAuthors(authors.filter(author => author._id !== id))
    }

    return (
        <div>
            <DisplayAuthors authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;