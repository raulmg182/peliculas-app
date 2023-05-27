import React from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs, getDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

const CrudPage = () => {
  const crearPeliculas = async () => {
    const pelicula = {
      name: "Scream",
      category: "Terror",
      image:
        "https://wallpapercrafter.com/desktop/383324-Movie-Scream-2022-Phone-Wallpaper.jpg",
    };

    const collectionPeliculas = collection(db, "peliculas")
    await addDoc(collectionPeliculas, pelicula)
    await obtenerPeliculas();
  };

  const obtenerPeliculas = async () => {
    const collectionPeliculas = collection(db, "peliculas");
    const resp = await getDocs(collectionPeliculas);
    const peliculas = resp.docs.map((pelicula) => ({
        id: pelicula.id,
        ...pelicula.data(),
    }));

    console.log(peliculas);
    const autor = import.meta.env.VITE_NAME
    console.log(autor);
  };

  const actualizarPelicula = async () => {
    const pelicula = {
        name: "Scream",
      category: "Terror",
      image:
        "https://wallpapercrafter.com/desktop/383324-Movie-Scream-2022-Phone-Wallpaper.jpg",
    }

    const registro = doc(db, "peliculas" )
    await updateDoc(registro, pelicula);
    await obtenerPeliculas();
  }

  const eliminarPelicula = async () => {
    const registro = doc(db, "peliculas", "zoYXXa10VBGg5mMybjwC")
    await deleteDoc(registro)
    await obtenerPeliculas();
  }

  return (
    <>
      <main className="row">
        <article className="col">
          <h1>CRUD</h1>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <button type="button" className="btn btn-success" onClick={crearPeliculas}>
            Agregar
          </button>
          <button type="button" className="btn btn-info" onClick={obtenerPeliculas}>
            Obtener
          </button>
          <button type="button" className="btn btn-warning" onClick={actualizarPelicula}>
            Editar
          </button>
          <button type="button" className="btn btn-danger" onClick={eliminarPelicula}>
            Eliminar
          </button>
        </article>
      </section>
    </>
  );
};

export default CrudPage;
