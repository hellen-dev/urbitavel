import './Login.css'

export default function Login() {
    return(
        <div>
            <div className="login">
                <h2>Seja bem-vindo a sua página de login</h2> <br/><br/>
        
                <form action="login" name="login" method="get">
                    <fieldset>
                    <label for="c-usuario">Usuário: </label>
                    <input type="text" name="usuario" className="c-usuario"/> <br/>
        
                    <label for="c-senha">Senha:</label>
                    <input type="password" name="senha" className="c-senha"/> <br/>
                    </fieldset>
                </form> <br/><br/>
        
                <div className="espacamento">
                    <a to="#">Esqueceu a senha?</a>
        
                    <div className="cadastro">
                    <p>Não tem cadastro?</p>
                    <a to="#"> Cadastre-se</a>
                    </div>
                </div>
            </div>
        </div>
    )
}