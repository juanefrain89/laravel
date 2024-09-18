import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import karely from "./karely.webp"
import "./dash.css"
import "./per.css"
import kk from "./kk.webp"
const Perfill = () => {
    const [publicaciones ,setpublicaciones]=useState([])
    const idd= window.location.pathname;
    const id = idd.split("/")[2]
    useEffect(()=>{
        console.log(id);

        axios.get(`/usuario/${id}`)
        .then(response =>{
            setpublicaciones(...publicaciones, response.data)
            console.log(publicaciones);
            console.log(Array.isArray(publicaciones)); // Debe ser true
    console.log(publicaciones);

        })
        .catch(err=>{
            console.log(err);

        })
    })
    useEffect(()=>{
        console.log('Tipo de publicaciones:', typeof publicaciones);
        console.log(publicaciones);
    },[publicaciones])
    return (
        <>
        <div className="padree">
            <div className="hijo">

                <div className="conimagen">
                <img src={karely} alt="" />
                <div className="imagenportada">
                    <img src={kk} alt="" />
                </div>
                <h1 className='nombre'>karely ruiz</h1>
                </div>


<div className="pp">
    <div className="descripcion">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quos eligendi exercitationem nisi ex et? Reprehenderit similique architecto magnam minus, hic eos eius id nostrum velit nam rem ex dignissimos?</p>
    </div>

<div className="contenedorimagenperfil">
    <img src={karely} alt="" />
</div>

</div>




<div className="pp">
    <div className="descripcion">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quos eligendi exercitationem nisi ex et? Reprehenderit similique architecto magnam minus, hic eos eius id nostrum velit nam rem ex dignissimos?</p>
    </div>

<div className="contenedorimagenperfil">
    <img src={karely} alt="" />
</div>

</div>

                </div>




</div>
        </>
     );
}

export default Perfill;
