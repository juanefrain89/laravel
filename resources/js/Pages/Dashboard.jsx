
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Menu from './Menu';
import "./dash.css"
import karely from "./karely.webp"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import messidos from "./messidos.webp"
import messi from "./messi.webp"
import meta from "./meta.webp"

export default function Dashboard({ auth }) {
    const token = localStorage.getItem('authToken');


axios.get('http://127.0.0.1:8000/api/up', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    console.log('Users:', response.data);
  })
  .catch(error => {
    console.error('Error fetching users:', error);
  });

    const [publicar , setpublicar] =useState(false)
    const id =5;
    const funcion =(e)=>{
        setpublicar(!publicar)
        console.log(publicar);
        console.log('jsjsj');
        const bodi = document.querySelector(".padre")
    }
const [publicaciones, setpublicaciones]=useState([])
useEffect(()=>{
    axios.get("/datos")
    .then(response =>{

        setpublicaciones(response.data); // Corregir la forma en que se establece el estado
        console.log(publicaciones);
console.log(publicaciones);

    })
    .catch(err=>{
        console.log(err);

    })
},[])

useEffect(()=>{
    console.log('Tipo de publicaciones:', typeof publicaciones);
    console.log(publicaciones);
},[publicaciones])

    return (
        <>
<div className="padre">

       <div className="menu">
        <div className="mm">
        <img className="meta" src={meta} alt="" />
        <div className="iconos">
            <p>nm lo</p>
            <p>dsddssa</p>
            <p>asdsa</p>
            <p>asddsasd</p>
            <p>asdas</p>
        </div>
    </div>

       </div>
        <div className="derecha">
            <div className="grid">
            <div className="publicaciones">

                <div className="publicar" onClick={funcion}>
                    <textarea name="" id="text" placeholder="comparte algo puto"></textarea>
             <div className="abajopublicar">
                 <button className="postboton">post</button>
             </div></div>




{Array.isArray(publicaciones.user) ? (
        publicaciones.user.map(e => (
            <a href={`/perfil/${e.user_id}`}>



    <div className="publicacion">
    <div className="arribapublicacion">
        <div className="imagenpublicacion">
            <div className="iim">
                <img src={messi} alt=""/>
            </div> <div className="nombreperfil"><p>leo messi</p></div>
        </div>
    </div>
    <p className="descripcionpublicacion">{e.content}</p>


    <img  src={messidos} alt=""/>
    <div className="abajopublicacion">
        <div className="reacciones">
            <div className="likes">
            <FontAwesomeIcon icon={faThumbsUp} style={{ color: '#74C0FC', fontSize: '2em' }} />

    <p>345</p>
    </div>
    <div className="comentarios">

      <FontAwesomeIcon icon={faComment} style={{ color: '#74C0FC', fontSize: '2em' }} />

    <p>12</p>

    </div>
    </div>
    <div className="comentar"><img src={messi} alt="" /> <textarea name="" id="textcomentar" placeholder="dile algo al putito este"></textarea> <button className="comentarboton">comentar</button></div>
    </div>
</div>



        </a>
        ))
      ) : (
        <p>No hay publicaciones disponibles.</p>
      )}




                <div className="publicacion">
                    <div className="arribapublicacion">
                        <div className="imagenpublicacion">
                            <div className="iim"><img src={messi} alt=""/></div> <div className="nombreperfil"><p>leo messi</p></div>
                        </div>
                    </div>
                    <p className="descripcionpublicacion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste illum ea debitis. Illum suscipit eos aperiam quidem earum hic culpa fuga illo. Atque, molestiae doloremque cupiditate ducimus rerum cumque.</p>


                    <img  src={messidos} alt=""/>
                    <div className="abajopublicacion">
                        <div className="reacciones">
                            <div className="likes">
                            <FontAwesomeIcon icon={faThumbsUp} style={{ color: '#74C0FC', fontSize: '2em' }} />

                    <p>345</p>
                    </div>
                    <div className="comentarios">

                      <FontAwesomeIcon icon={faComment} style={{ color: '#74C0FC', fontSize: '2em' }} />

                    <p>12</p>

                    </div>
                    </div>
                    <div className="comentar"><img src={messi} alt="" /> <textarea name="" id="textcomentar" placeholder="dile algo al putito este"></textarea> <button className="comentarboton">comentar</button></div>
                    </div>
                </div>



















            </div>
            <div className="sugerencias">
                <div className="nose">
                <input type="text" className="buscar" placeholder="busca personas aqui" />

                <div className="contenedorsugerencias">
                    <div className="sg">
                    <div className="sugerenciauno">
                        <div className="abs">
                        <p className="pp">Lorem </p>
                        </div>
                        <div className="perfilsugerencia">
                            <img className="kareli" src={karely} alt=""/>
                        </div>
                        <img src={messidos} className="portadasugerencia" alt=""/>

                    </div>
                    </div>
                </div>

                <div className="contenedorsugerencias">
                    <div className="sg">
                    <div className="sugerenciauno">
                        <div className="abs">
                        <p className="pp">Lorem </p>
                        </div>
                        <div className="perfilsugerencia">
                            <img className="kareli" src={karely} alt=""/>
                        </div>
                        <img src={messidos} className="portadasugerencia" alt=""/>

                    </div>
                    </div>
                </div>

                <div className="contenedorsugerencias">
                    <div className="sg">
                    <div className="sugerenciauno">
                        <div className="abs">
                        <p className="pp">Lorem </p>
                        </div>
                        <div className="perfilsugerencia">
                            <img className="kareli" src={karely} alt=""/>
                        </div>
                        <img src={messidos} className="portadasugerencia" alt=""/>

                    </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    </div>


        </>

    );
}
