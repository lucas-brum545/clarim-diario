import {useState} from 'react'
import { buscarCep } from '../../services/viacep.js'


export default function Cadastro() {
  const [form, setForm] = useState({
    nome: '', email: '', cep: '',
    logradouro: '', numero: '', bairro: '', cidade: '', uf: '',
  })

  const [aviso, setAviso] = useState('')   // mensagens de erro/status
  
  function atualizarCampo(e) {
    const { id, value } = e.target          
    setForm(f => ({ ...f, [id]: value }))
  }

  async function preencherEndereco() {
    if (!form.cep) return
    try {
      setAviso('Buscando CEP…')             // feedback de carregamento
      const end = await buscarCep(form.cep)
      setForm(f => ({
        ...f,
        logradouro: end.logradouro,
        bairro: end.bairro,
        cidade: end.localidade,             // atenção: a ViaCEP chama cidade de "localidade"
        uf: end.uf,
      }))
      setAviso('')
    } catch (erro) {
      setAviso(erro.message)                // "CEP não encontrado." etc.
    }
  }

  function enviar(e) {
    e.preventDefault()                       // o velho conhecido!
    alert(`Assinatura registrada, ${form.nome}! Bem-vindo ao Clarim.`)
  }

    return (
        <main>
          <br></br>
        <div className='auth'>
            <form className="formulario" onSubmit={enviar}>
                <h1>Assine o Clarim</h1>
                <label for="nome">Nome completo</label>
                <input type="text" id="nome" value={form.nome} onChange={atualizarCampo} required></input>

                <label for="email">E-mail</label>
                <input type="email" id="email" type="email" value={form.email} onChange={atualizarCampo} required></input>

                <label for="cep">CEP</label>
                <input type="text" id="cep" value={form.cep} onChange={atualizarCampo}
               onBlur={preencherEndereco} placeholder="00000-000" required></input>

                
                <label for="logradouro">Rua</label>
                <input type="text" id="logradouro" value={form.logradouro} onChange={atualizarCampo}></input>
                    

                <label for="bairro">Bairro</label>
                <input type="text" id="bairro" value={form.bairro} onChange={atualizarCampo}></input>

                
                <label for="cidade">Cidade</label>
                <input type="text" id="cidade" value={form.cidade} onChange={atualizarCampo}></input>

                <label for="uf">UF</label>
                <input type="text" id="uf" value={form.uf} onChange={atualizarCampo} maxlength={2}></input>
                
                {aviso && <p className="aviso">{aviso}</p>}
                <button type="submit" class="btn">Assinar</button>
            </form>
            </div>
            <br></br>
        </main>
    )
}