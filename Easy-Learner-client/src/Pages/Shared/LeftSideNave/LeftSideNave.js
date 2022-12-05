import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';

const LeftSideNave = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://easy-learner-sarver.vercel.app/category`)
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
            <h4 className='my-5 text-sm-center'>All Category: {categories.length}</h4>
            <div>
            
            {
                categories.map(category => <ListGroup  key={category.id}>
                    <Link className='btn' to={`/category/${category.id}`}>
                           <ListGroup.Item className='mb-2 spatial-btn  pe-5 btn-social'>{category.category_name}</ListGroup.Item>
                    </Link>
                    
                    </ListGroup>)
            }


            </div>
            </div>
        </div>
    );
};

export default LeftSideNave;