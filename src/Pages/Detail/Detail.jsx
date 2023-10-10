import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Global/Loading/Loading';
import style from './Detail.module.css';

const Detail = () => {

    const [blogData, setBlogData] = useState();

 
    const{ id } = useParams();
    console.log(id)


    // gefilterde fetch op de titel van de blog
    useEffect(() => {
    
        let isActive = true;
    
         
          if(!blogData){
            fetch('../blogs.json')
            
            .then(response => response.json())
            .then(response => {
             
              if(isActive) {
               setBlogData(response.filter(blog => blog.title === id)[0])
              }
            })
          }
    
          
          return () => isActive = false;
      }, [])


    
    
    if(!blogData)
    return (<Loading/>)
     
    else return(
        <div className={style.container}>
          
          <img src={blogData.cover} alt="" className={style.cover}/>

          <h1>{blogData.title}</h1>
          <h4>{blogData.intro}</h4>
          <p>{blogData.description}</p>

          <div>
          <img src={blogData.album.image1} alt="" className={style.img}/>
          <img src={blogData.album.image2} alt="" className={style.img}/>
          <img src={blogData.album.image3} alt="" className={style.img}/>
          <img src={blogData.album.image4} alt="" className={style.img}/>
          <img src={blogData.album.image5} alt="" className={style.img}/>
          </div>
        </div>
    );
};

export default Detail;