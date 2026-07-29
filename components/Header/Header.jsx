import '../Header/header.css'
import { useAuth } from '../../contexts/AuthContext'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Header({tema, aoAlternarTema}) {
    const {usuario, logout} = useAuth()

    const hoje = new Date().toLocaleDateString('pt-BR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    })

    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        // Atualiza o horário a cada segundo
        const timer = setInterval(() => {
        setHoraAtual(new Date());
        }, 1000);

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(timer);
    }, []);

    // Formata a hora no padrão local (ex: 14:35:07)
    const horaFormatada = horaAtual.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })

    return (
        <header className="cabecalho">
            <div className="cabecalho__faixa">
                <span>Edição de Nova York</span>
                <span>{hoje} | {horaFormatada}</span>

                {usuario ? (
                    <span className='cabecalho__sessao'>
                        Olá {usuario.nome} -
                        <Link to='/painel'>Painel</Link>
                        <button className='cabecalho__sair' onClick={logout}> - Sair</button>
                    </span>
                ) : (
                    <Link to='/login' className='cabecalho__entrar'>Entrar</Link> 
                )
                }

                <span>U$ 1,50</span>
                <button className='cabecalho__tema' onClick={aoAlternarTema}>
                    {tema === 'light' ? '🌙 Escuro' : '☀️ Claro'}
                </button>
            </div>

            <h1 className="cabecalho__titulo">O CLARIM DIÁRIO</h1>
            <p className="cabecalho__lema">A verdade, doa a quem doer - inclusive a certos aracnídeos.</p>
            <nav className="cabecalho__menu">
                <Link to="/">Capa</Link>
                <a href="">Cidade</a>
                <a href="">Ameaças Urbanas</a>
                <a href="">Opinião do Editor</a>
                <a href="">Esportes</a>
                <a href="">Classificados</a>
                <Link to="/cadastro">Assine</Link>
            </nav>
        </header>
    )
}

export default Header