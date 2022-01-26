import { Carousel } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Carrousel = () => {
  
  const [recipes, setRecipes] = useState([]);
    var json;
    
    useEffect(() => {
      getRecipes();
    }, [])
  
  function getRecipes() {
    fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/')
      .then(response => {
        return response.text();
      })
      .then(data => {
        if(data.includes('"recipe":null')){
            console.log('NO DATA');
            return (<Navigate to="/home" />);
        }
        json=JSON.parse(data)['recipe']; //convert JSON to array javascript
        console.log(json);
        setRecipes(json);
      });
  }

  return (
    <Carousel>
      {
        recipes ?
        ( 
          recipes.map((it, index) => {
            return (
            <>
             <Carousel.Item>
                <img
                src={it.thumbnail}
                />
                <Carousel.Caption>
                  <h3>{it.name}</h3>
                  <p>index</p>
                </Carousel.Caption>
              </Carousel.Item>
            </>
            )
          })
        )
        :
        (
          <div>NO RECIPES</div>
        )
      }
    </Carousel>
  );
};

export default Carrousel;