
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const RankRecipe = ( props ) => {

    //const [item, setItem]  = useState([]);
    const [recipes, setRecipes] = useState([]);
    var json;
    
    useEffect(() => {
      getRankRecipes();
    }, [])

    function getRankRecipes() {
        fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/rank')
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
        <>
        <h1 className="display-4" style={{ textAlign: "center" }}>TOP 10 RECETAS</h1>
        <hr></hr>
            <Container>
            <table className="table table-striped table-light">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }} scope="col">🏆</th>
                <th scope="col" style={{ textAlign: "center" }}>Nombre</th>
                <th scope="col" style={{ textAlign: "center" }}>Tipo</th>
                <th scope="col" style={{ textAlign: "center" }}>Likes</th>
              </tr>
            </thead>
            <tbody>
                {recipes.map((it, index) => {
                    return (
                      <tr key={index}>
                      <th style={{ textAlign: "center" }}scope="row"><strong>{index+1}</strong></th>
                      <td style={{ textAlign: "center" }}>{it.recipe_name}</td>
                      <td style={{ textAlign: "center" }}>{it.recipe_type}</td>
                      <td style={{ textAlign: "center" }}>{it.likes}</td>
                      </tr>
                ); })
                }
            </tbody>
            </table>
            </Container> 

            <div className="container" >
              <div style={{ textAlign: "center" }}><b>Para ver las las instrucciones, suscribite!</b></div></div>
        </>

    )
}

export default RankRecipe;