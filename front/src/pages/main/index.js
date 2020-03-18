import React, { Component } from 'react';
import render from 'react-dom';
import api from '../../services/api';
import App from '../../App';
import './styles.css';
import { Link, BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import { ListAlt } from '@styled-icons/fa-regular/ListAlt';
import { CloudUpload } from '@styled-icons/boxicons-regular/CloudUpload'
import { Trash } from '@styled-icons/fa-solid/Trash';
import { Table, Tr } from 'styled-table-component';

export default class Main extends Component {
    state = {
        produtos: [],
        page: 1,
    }


    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get('/api');
        console.log({response})
        const { docs, ...productInfo } = response.data;

        this.setState({ produtos: response.data });

        console.log(response.data.docs);
    }

    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
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
        const TrashIcon = styled(Trash)`
            width: 10px;
            height: 10px;
            padding: 5px;
            color: rgb(226, 104, 104);
        `

        return (
            <div className="container">
                <div className="sidenav">
                    <BrowserRouter>
                        <Link to={"/"}>
                            <ListIcon className="Icon" />
                        </Link>
                        <br />
                        <Link to={"/new-prod"}>
                            <UploadIcon className="Icon" />
                        </Link>
                    </BrowserRouter>
                </div>
                <div className="page">
                    <h1>Listagem de Produtos</h1>
                    <div className="TableCont">
                        <Input placeholder="Buscar por palavra-chave" />
                        <Table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Valor</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.produtos.map((produto) => (
                                    <tr>
                                    <td>{ produto.id }</td>
                                    <td>{ produto.nome }</td>
                                    <td>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.valor) }</td>
                                    <td><TrashIcon /></td>
                                </tr>
                                ))
                            }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colspan="4">
                                        <center>
                                            1-4 de 4
                                        </center>
                                    </th>
                                </tr>
                            </tfoot>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}