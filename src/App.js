import React, {useEffect, useState } from 'react'
import './App.css';

function App() {
  const [news, setNews]=useState([])
  const updateNews=async ()=> {
    const url=`https://gnews.io/api/v4/top-headlines?category=general&apikey=fa218fbf07cc9735c465e5b13024db41`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setNews(parsedData.articles);
   
  }
  useEffect(()=>{
    updateNews();
    // console.log(news)
  },[])
  return (
    <div className="App">
      hello
      {
        news.map((e)=>{
          return <div> {e.title}</div>
        })
      }
    </div>
  );
}

export default App;


