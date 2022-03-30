import Botao from "../components/Botao"
import Cliente from "../components/core/Cliente"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"

export default function Home() {

  const clientes = [
    new Cliente('Joao', 20, '1'),
    new Cliente('Rafaela', 21, '2'),
    new Cliente('Isabella', 1, '3'),
    new Cliente('Luciana', 46, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){

  }

  function clienteExcluido(cliente: Cliente){

  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro simples">
        <div className="flex justify-end" >
        <Botao cor="green" className="mb-4" >Novo Cliente</Botao>
        </div>
     <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} ></Tabela>
    <Formulario cliente={clientes[2]} ></Formulario>
      </Layout>
    </div>
  )
}
