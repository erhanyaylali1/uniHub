import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    return (
        <div>
           Home Page
           <Link to="teachers/2">
               GO
           </Link>
        </div>
    )
}

export default HomePage
