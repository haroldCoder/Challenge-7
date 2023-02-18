import React from 'react'

export default function Infogeneral() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold text-gray-500 mb-6">Información General</h1>
      <table className="table-auto w-full text-gray-400">
        <thead>
          <tr>
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Misión</td>
            <td className="border px-4 py-2">Nuestra misión es proporcionar productos y servicios de alta calidad a nuestros clientes y mejorar constantemente su experiencia.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Visión</td>
            <td className="border px-4 py-2">Nuestra visión es ser una empresa líder en el mercado y ofrecer una amplia gama de productos y servicios innovadores.</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Valores</td>
            <td className="border px-4 py-2">Valoramos la integridad, la colaboración y el compromiso con nuestros clientes, empleados y comunidad.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
