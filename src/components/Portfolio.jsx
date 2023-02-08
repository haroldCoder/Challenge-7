import React from 'react'
import Harold from '../assets/harold-koderx.jpg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import jquery from '../assets/jquery.png';
import php from '../assets/php.png'
import react from '../assets/reactjs.png'
import angular from '../assets/angular.png'
import { GitHub } from '@mui/icons-material'
import LanguageIcon from '@mui/icons-material/Language';

export default function Portfolio() {
  const skills = [
    {
      name: "HTML5",
      cover: html
    },
    {
      name: "CSS3",
      cover: css
    },
    {
      name: "Javascript",
      cover: js
    },
    {
      name: "Jquery",
      cover: jquery
    },
    {
      name: "Php",
      cover: php
    },
    {
      name: "Reactjs",
      cover: react
    },
    {
      name: "Angularjs",
      cover: angular
    }
  ]
  return (
    <div className='text-white p-4'>    
        <section className='flex justify-center content-center flex-wrap mt-4'>
            <div>
              <img src={Harold} alt="" className='w-[270px] h-[270px] rounded-md' />
              <h2 className='text-xl bg-gradient-to-t text-transparent text-blue-400 mt-4 font-medium text-center'>Harold Castaño Alvarez</h2>
            </div>
            <div className='p-10 flex justify-around w-[15%] flex-wrap content-center'>
              <a href="https://github.com/haroldCoder/"><GitHub style={{fontSize: "36px"}}/></a>
              <a href="https://website-harold-koderx.netlify.app/"><LanguageIcon style={{fontSize: "36px"}} /></a>
            </div>
        </section>
        <section className='m-32'>
            <p className='text-md text-white font-mono text-center'>Desarrollador full stack web, autodidacta, proactivo, colaborador, aprendizaje agil, predispuesto, con 3 años de aprendizaje autonomo en el area de la programacion y el desarrollo.</p>
        </section>
        <section className='p-2 mt-6 flex'>
          {
            skills.map(e=>(
              <div className='card w-[25%] rounded-lg mr-6 bg-gray-600 p-7'>
                <h2 className='text-white text-lg mb-8 text-center'>{e.name}</h2>
                <img src={e.cover} alt="" />
              </div>
            ))
          }
        </section>
    </div>
  )
}
