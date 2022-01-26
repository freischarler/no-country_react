import React from "react";
import { Container, Table } from "react-bootstrap";

const recipe = [
  {
    id: 1,
    title: "Pollo con papas fritas",
    type: "Vegana",
    thumbnail:
      "https://www.recetasdecocina.com/wp-content/uploads/2018/10/pollo-con-papas-fritas-vegana-1.jpg",
    user_id: 1,
  },
  {
    id: 2,
    title: "Pasta con pollo",
    type: "Vegana",
    thumbnail:
      "https://www.recetasdecocina.com/wp-content/uploads/2018/10/pollo-con-papas-fritas-vegana-1.jpg",
    user_id: 1,
  },
  {
    id: 3,
    title: "Pasta con pollo",
    type: "Vegana",
    thumbnail:
      "https://www.recetasdecocina.com/wp-content/uploads/2018/10/pollo-con-papas-fritas-vegana-1.jpg",
    user_id: 1,
  },
  {
    id: 4,
    title: "Pasta con pollo",
    type: "Vegana",
    thumbnail:
      "https://www.recetasdecocina.com/wp-content/uploads/2018/10/pollo-con-papas-fritas-vegana-1.jpg",
    user_id: 1,
  },
];

class RecipeUser extends React.Component {
  state = {
    data: recipe,
  };

  eliminar = (data) => {
    var opcion = window.confirm(
      "¿Estas seguro de eliminar esta receta?" + data.id
    );
    if (opcion) {
      var contador = 0;
      var lista = this.state.data;
      lista.map((registro) => {
        if (registro.id == data.id) {
          lista.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: lista });
    }
  };

  render() {
    return (
      <>
        <Container>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Tipo</th>
                <th>Thumbnail</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.thumbnail}</td>
                  <td>
                    <button className="btn btn-primary">Editar</button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => this.eliminar(item)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default RecipeUser;