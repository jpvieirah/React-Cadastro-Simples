import { useState } from "react"
import Botao from "../components/Botao"
import Cliente from "../components/core/Cliente"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Joao', 20, '1'),
    new Cliente('Rafaela', 21, '2'),
    new Cliente('Isabella', 1, '3'),
    new Cliente('Luciana', 46, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){

    setCliente(cliente)
    setVisivel('form')

  }

  function clienteExcluido(cliente: Cliente){

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')

  }

  function salvarCliente(cliente: Cliente) {
   
    setVisivel('tabela')

  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro simples">
        {visivel === 'tabela' ? (

      <>
      <div className="flex justify-end" >
      <Botao cor="green" className="mb-4" onClick={novoCliente} >
        Novo Cliente</Botao>
      </div>
      <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} ></Tabela>
      </>
       ) : (

    <Formulario 
    cliente={cliente}
    clienteMudou={salvarCliente}
    cancelado={() => setVisivel('tabela')}
    />

      )}
        
      </Layout>
    </div>
  )
}
