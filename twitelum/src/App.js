import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {

    constructor(){
        super()

        this.state = {
            newTweet: "Rolindo Adventures of React",
            tweets: []
        }

        this.url = "http://twitelum-api.herokuapp.com/tweets"


    }

    componentDidMount(){

            fetch(this.url)
            .then(resposta => resposta.json())
            .then(lista => {
    
                console.log(lista)
                this.setState({
                    tweets: lista
                }) 
                
                console.log(this.state.tweets)
    
            } )

    }

    

    mandaTweets = (e) => {
        e.preventDefault()
        //console.log(this)

        const novoTweet = this.state.newTweet

        if(novoTweet){
            fetch(this.url, {
                method: "POST",
                body: JSON.stringify({
                    login: '',
                    conteudo: novoTweet
                })
            })
            .then(resposta => resposta.json())
            .then(novaResposta =>  this.setState({
                tweets: [novaResposta, ...this.state.tweets]
            }))
            .catch(err => console.log(err)) 
        }
    }

  render() {
    return (
      <Fragment>
        <Cabecalho>
            <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet" onSubmit={this.mandaTweets}>
                        <div className="novoTweet__editorArea">
                            <span 
                                className= { `novoTweet__status 
                                              ${this.state.newTweet.length > 140 ? 'novoTweet__status--invalido' : '' }
                                           `} >
                            { this.state.newTweet.length}/140</span>
                            <textarea 
                                className="novoTweet__editor"
                                value={this.state.newTweet} 
                                onChange={(event) => {this.setState({newTweet: event.target.value})}}
                                placeholder="O que está acontecendo?">
                            </textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={this.state.newTweet.length > 140} 
                            className="novoTweet__envia">Tweetar
                        </button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>

                    <div className="tweetsArea">
                        {
                            this.state.tweets.map(tweet => <Tweet key={tweet + (Math.random() * 2)} 
                            texto={tweet.conteudo} 
                            nome={tweet.usuario.nome} 
                            login={tweet.usuario.login}
                            foto={tweet.usuario.foto}
                            />)
                        }
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
