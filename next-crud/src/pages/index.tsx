import Cliente from "../components/core/Cliente"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"

export default function Home() {

  const clientes = [
    new Cliente('Joao', 20, '1'),
    new Cliente('Rafaela', 21, '2'),
    new Cliente('Isabella', 1, '3'),
    new Cliente('Luciana', 46, '4'),
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro simples">
      <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
