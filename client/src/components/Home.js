import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = { 
        players: [],
        message: "Loading"
    };

    async componentDidMount() {
        let response  = await axios.get('/api/players');
        let { players } = response.data;
        if (players.length > 0) {
            this.setState({ players, message: "Players Loaded" });
        } else {
            this.setState({ message: "No players to display." })
        }
    }

    renderPlayers = () => {
        return this.state.players.map(p => {
            return (
                <div key={p._id} className="card is-light column is-one-quarter">
                    <div className="card-image">
                        <img src={p.image}/>
                    </div>
                    <div className="card-content">
                        <div className="media-content" style={{ textAlign: "center" }}>
                            <div className="columns">
                                <p className="title is-4" style={{ textAlign: "center" }}>{p.name}</p>
                            </div>
                            <div className="columns is-multiline">
                            <div className="column">
                                <Link className="button is-primary" style={{ width: "100%" }} to={`/players/${p._id}`}>Show</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
        let { players, message } = this.state;
        if (players.length === 0) return <h2>{message}</h2>
        return (
            <div>
                <h1>Welcome to Mario Kart!</h1>
                <div className="columns is-multiline" style={{ marginTop: "20px" }}>
                    {this.renderPlayers()}
                </div>
            </div>
        );
    }
}

export default Home;