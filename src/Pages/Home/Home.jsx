import style from "./Home.module.css"
import { useEffect, useState } from 'react';
import Loading from "../../Components/Global/Loading/Loading";
import ROUTES from "../../Consts/Routes";
import { Link } from "react-router-dom";
import BlogCard from "../../Components/Home/BlogCard/BlogCard";


function Home() {

  
  const [blogData, setBlogData] = useState();
  const [filteredData, setFilteredData] = useState();
  
  const [formData, setFormdata] = useState("")

//   filter op titel en intro
  const filter = () => {
    
    let dataCopy = structuredClone(blogData);
   
    dataCopy = dataCopy.filter(dataItem => dataItem.title.toLowerCase().includes(formData.toLocaleLowerCase()) && dataItem.description.toLowerCase().includes(formData.toLocaleLowerCase()));
   
    setFilteredData(dataCopy)
  }
//   fetch op alle data
  useEffect(() => {
    
    let isActive = true;

     
      if(!blogData){
        fetch("./blogs.json")
        
        .then(response => response.json())
        .then(response => {
         
          if(isActive) {
            setBlogData(response);
            setFilteredData(response);
          }
        })
      }

      
      return () => isActive = false;
  }, [])
//  weergave wanneer we de zoek functie gebruiken 
  useEffect(() => {
  
    if(blogData)filter();

  }, [formData])


  
  if(!blogData)
    return (<Loading/>)
 
  else return (
    <article className={style.container}>

      <label className={style.filter} htmlFor="title">
        zoek:
        <input id='title' name='title' type={'text'} value={formData} onChange={e => setFormdata(e.currentTarget.value)}/>
      </label>

      
        {filteredData.map((blog, index) => {
          return (
           <BlogCard key={index} blogData={blog}/>
        )})}
    </article>
  );
}

export default Home;
