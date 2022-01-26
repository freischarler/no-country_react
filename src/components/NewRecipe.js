import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import Navbar from './Navbar'
const NewRecipe = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const [nombre, setNombre]= useState("");
  const [tipo, setTipo]= useState("");
  const [thumbnail, setThumbnail]= useState("");
  const [usuario, setUsuario]= useState("");
  const [ingredientes, setIngrediente] = useState("");
  const [descripciones, setDescripcion] = useState("");



  const [iList, setiList] = useState([]);
  const [dList, setdList] = useState([]);

  const handleIngredientsChange = (e) => {
      setIngrediente(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescripcion(e.target.value);
  }

  const handleIngredient = (e) => {
   if(ingredientes){
    setiList([...iList, ingredientes])
    setIngrediente("")
   }
    
    //console.log(iList)
  }

  const handleDescription = (e) => {
    if(descripciones){
    setdList([...dList, descripciones])
    setDescripcion("")
    //console.log(iList)
    }
  }

  const handleNameChange = (e) => {
    setNombre(e.target.value);
  };

  const handleTypeChange = (e) => {
    setTipo(e.target.value);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.value);
  };

  const handleUserChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleNewRecipe = (e) => {
    if(nombre && tipo && thumbnail && iList && dList && usuario){
      let values = {
      "recipe_name": nombre,
      "recipe_type": tipo,
      "thumbnail": thumbnail,
      "ingredients": iList,
      "description": dList,
      "user_id": parseInt(usuario)
      };
      //console.log(values)
      let json_values = JSON.stringify(values)
      console.log(json_values)
      fetch('https://nocountry-g32app.herokuapp.com/api/v1/posts/', {
      mode: 'no-cors',
      method: 'post',
      headers: {'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
      body: json_values
      });

      //resetForm();

      setFormularioEnviado(true);
      setTimeout(() => setFormularioEnviado(false), 4000);
    }
  };

  useEffect(() => {
    //let isMounted = true;               // note mutable flag 
    return () => 
    { 
      //isMounted = false 
    }; // cleanup toggles value, if unmounted
  }, []); 

  return (
    <>
    <Navbar/>
      <Formik>
     
          <div className="container">
          <h1 className="display-4" style={{ textAlign: "center" }}>Nueva receta!</h1>
            <div className="col-12" style={{ paddingBottom: "50px" }}>
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="recipe_name"
                name="recipe_name"
                placeholder="Nombre"
                className="form-control" 
                value={nombre}
                onChange={ handleNameChange }
              />
            </div>
            <div>
              <label htmlFor="apellido">Tipo</label>
              <Field
                type="text"
                id="recipe_type"
                name="recipe_type"
                placeholder="Tipo"
                className="form-control" 
                value={tipo}
                onChange={ handleTypeChange }
              />
            </div>
            <div>
              <label htmlFor="username">Imagen</label>
              <Field
                type="text"
                id="thumbnail"
                name="thumbnail"
                placeholder="Imagen"
                className="form-control" 
                value={thumbnail}
                onChange={ handleThumbnailChange }
              />
            </div>
            
            <div >
                <label>Agrega ingredientes!</label>
                <div className="input-group">
                    <Field
                      type="text"
                      name="ingredients"
                      placeholder="Ingredientes"
                      id="ingredients"
                      className="form-control"
                      value={ingredientes}
                      onChange={ handleIngredientsChange }
                    />

                  <span className="input-group-btn">
                    <button className="btn btn-primary ml-2"
                      id="enter" 
                      type="button"
                      onClick={ handleIngredient }>
                        Agregar
                    </button>
                    </span>
                </div>

                <div className="col-8 mb-4 mt-2">
                  <ul className="list-group">
                      {iList.map((it, index) => {
                      return (
                        <li key={index} className="list-group-item">{it}</li>
                      );
                      })}
                  </ul>
                 </div>
            </div>

            <div >
                <label>Pasos a seguir!</label>
                <div className="input-group">
                    <Field
                      type="text"
                      name="descriptions"
                      placeholder="Descripciones"
                      id="descriptions"
                      className="form-control"
                      value={descripciones}
                      onChange={ handleDescriptionChange }
                    />
                  <span className="input-group-btn">
                    <button className="btn btn-primary ml-2" 
                      id="enter" 
                      type="button"
                      onClick={ handleDescription }>
                        Agregar
                    </button>
                  </span>
                </div>

                <div className="col-8 mb-4 mt-2">
                  <ul className="list-group">
                    
                      {dList.map((it, index) => {
                      return (
                        <li key={index} className="list-group-item">{it}</li>
                      );
                      })}

                  </ul>
                 </div>
            </div>


            <div>
              <label htmlFor="correo">Tu #ID!</label>
              <Field
                type="text"
                name="user_id"
                placeholder="id"
                id="user_id"
                value={usuario}
                onChange={ handleUserChange }
              />
            </div>

            <button onClick={ handleNewRecipe } className="btn btn-primary btn-lg btn-block" type="button">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )
            }
          </Form>
          </div>
          </div>
      </Formik>
    </>
  );
};
export default NewRecipe;