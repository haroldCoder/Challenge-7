import React from 'react';

function Infogeneral() {
  return (
    <div className="max-w-5xl mx-auto my-8">
      <h1 className="text-3xl font-bold text-center mb-8">Información General</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Acerca de mí</h2>
          <p className="text-gray-600">
            Soy un desarrollador Full Stack especializado en la creación de aplicaciones web modernas y escalables. Me encanta trabajar en proyectos desafiantes y encontrar soluciones creativas a los problemas.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Más de 2 años de experiencia en desarrollo web</li>
            <li>Experiencia en múltiples tecnologías, como React, Node.js, y MongoDB</li>
            <li>Comprometido en la mejora continua y aprendizaje de nuevas tecnologías</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Mi enfoque</h2>
          <p className="text-gray-600">
            Mi objetivo es crear aplicaciones web que sean fáciles de usar, rápidas y escalables. Me enfoco en el desarrollo de una arquitectura limpia y estructurada, así como en la implementación de buenas prácticas y patrones de diseño. También me aseguro de que el usuario final tenga una experiencia agradable y fluida al utilizar la aplicación.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Desarrollo orientado al usuario y centrado en la experiencia del usuario</li>
            <li>Arquitectura limpia y estructurada para facilitar el mantenimiento y escalabilidad</li>
            <li>Implementación de buenas prácticas y patrones de diseño</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Infogeneral;