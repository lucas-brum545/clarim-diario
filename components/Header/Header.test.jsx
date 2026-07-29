import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import {AuthProvider} from '../../contexts/AuthContext'
import Header from './Header'


function renderizarHeader(){
    render(
        <MemoryRouter>
            <AuthProvider>
                <Header tema='light' aoAlternarTema={() => {}}></Header>
            </AuthProvider>
        </MemoryRouter>
    )
}

describe('Header', () => {
    beforeEach(() => localStorage.clear())

    it('mostra o link ENtrar quando ninguém esta logado', () => {
        renderizarHeader()
        expect(screen.getByText('Entrar')).toBeInTheDocument()
    })

    it('mostra a saudação quando há usuário salvo', () => {
        localStorage.setItem('usuario', JSON.stringify({nome:'J. Jonah Jameson'}))
        renderizarHeader()
        expect(screen.getByText(/J. Jonah Jameson/).toBeInTheDocument()
    })
})