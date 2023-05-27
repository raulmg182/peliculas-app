import { useState, useEffect } from "react";
import axios from "axios";

const BooksPage = () => {
    const [libros, setLibros] = useState([]);

    const obtenerLibros = async () => {
        console.log("Obteniendo Libros");

        const resp = await axios.get("https://fakerapi.it/api/v1/books");
        console.log(resp.data.data);
        setLibros(resp.data.data);
    };

    useEffect(() => {
        obtenerLibros();
    }, []);

  return (
    <>
      <h1>Books Page</h1>
        <article className="col">
          <table className="table">
            <thead>
                <th scope="col">#</th>
                <th scope="col">Titulo</th>
                <th scope="col">Autor</th>
                <th scope="col">Descripción</th>
            </thead>
            <tbody>
                {libros.map((libro) => (
                <tr key={libro.isbn}>
                <th scope="row">{libro.isbn}</th>
                <th>{libro.title}</th>
                <th>{libro.author}</th>
                <th>{libro.description}</th>
                </tr>
                ))}
            </tbody>
          </table>
        </article>
    </>
  );
};

export default BooksPage;
