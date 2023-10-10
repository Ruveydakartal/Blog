import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Consts/Routes';
import style from './BlogCard.module.css';

const BlogCard = ({blogData}) => {
    return (
        <div >
            <Link to={`${ROUTES.detail.to}${blogData.title}`} className={style.card} >
                <img src={blogData.cover} alt=""  className={style.card_img}/>
                <div className={style.card_text}>
                <h2>{blogData.title}</h2>
                <p> {blogData.intro}</p>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;