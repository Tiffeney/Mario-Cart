import React, { Component } from 'react';
import axios from 'axios';

class CreatePlayer extends Component {
    state = { 
        name: "",
        image: "" 
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let { name, image } = this.state;
        await axios.post('/api/players', { name, image });
        this.props.history.push('/');
    }

    render() {
        let { name, image } = this.state;
        let { handleChange, handleSubmit } = this;
        return (
            <div>
                <h1>Create a Player</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="name" 
                                type="text" 
                                placeholder="Mario"
                                onChange={handleChange} 
                                value={name}/>
                        </div>
                        </div>

                        <div className="field">
                        <label className="label">Image</label>
                        <div className="control">
                            <input 
                                className="input" 
                                name="image" 
                                type="text" 
                                placeholder="https://i.redd.it/416qm7xg4nf01.png" 
                                onChange={handleChange}
                                value={image}/>
                        </div>
                        <div className="control">
                            <button className="button is-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreatePlayer;