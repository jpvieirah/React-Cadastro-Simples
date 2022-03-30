import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../components/core/Cliente"
import ClienteRepositorio from "../components/core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo:ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
  
    useEffect(obterTodos, [])
  
    function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente){
  
      setCliente(cliente)
      exibirFormulario()
  
    }
  
    async function excluirCliente(cliente: Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario()
  
    }
  
    async function salvarCliente(cliente: Cliente) {
     await repo.salvar(cliente)
      obterTodos()
    }
    return {
        exibirTabela,
        tabelaVisivel,
        clientes,
        cliente,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,

    }
  
}