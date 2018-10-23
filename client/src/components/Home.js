import React, { Component } from 'react';
import axios from 'axios';

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
                <div key={p._id} class="card">
                    <div class="card-image">
                        <figure class="image is-square">
                        <img alt={`${p.name} image`} src={p.image}/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-4">{p.name}</p>
                        </div>
                    </div>
                     <div class="content">
                        <button className="button is-primary">Edit</button>
                        <button className="button is-danger">Delete</button>
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
                {this.renderPlayers()}
            </div>
        );
    }
}

export default Home;