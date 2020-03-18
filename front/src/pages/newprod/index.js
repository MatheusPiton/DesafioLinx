import React, { Component } from 'react';
import api from './../../services/api'

export default class NewProd extends Component {
    state = {
        produros: []
    }

    async componentDidMount() {
        const response = await api.get('/api');
        console.log({response})
        const { docs, ...productInfo } = response.data;

        this.setState({ produtos: response.data });

        console.log(response.data.docs);
    }

    render() {
        return (
            <h1>Teste</h1>
        );
    }
}