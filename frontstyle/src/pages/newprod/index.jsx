import React, { Component } from 'react';
import render from 'react-dom';
import api from '../../services/api';
import App from './../../App';
import request from 'superagent';
import './styles.css';
import { Link, BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import { ListAlt } from '@styled-icons/fa-regular/ListAlt';
import { CloudUpload } from '@styled-icons/boxicons-regular/CloudUpload';

export default class NewProd extends Component {
    state = {
        produtos: [],
        page: 1,
    }


    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get('/produto');
        console.log({response})
        const { docs, ...productInfo } = response.data;

        this.setState({ produtos: response.data });

        console.log(response.data.docs);
    }

    render() {

        const ListIcon = styled(ListAlt)`
            width: 25px;
            height: 30px;
        `
        const UploadIcon = styled(CloudUpload)`
            width: 35px;
            height: 50px;
        `
        const Input = styled.input
        `
        `

        return (
            <div className="container">
                <div className="sidenav">
                    <BrowserRouter>
                        <Link to='/'>
                            <ListIcon className="Icon" />
                        </Link>
                        <br />
                        <br />
                        <br />
                        <Link to='/novo-produto'>
                            <UploadIcon className="Icon" />
                        </Link>
                    </BrowserRouter>
                </div>
                <div className="page">
                    <h1>Lista de Produtos</h1>
                    <div className="TableCont">
                        
                    </div>
                </div>
            </div>
        );
    }
}