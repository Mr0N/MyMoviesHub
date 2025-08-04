import React, { Component } from 'react';
import './App.css'
import Head from './header-site/head';
import Menu from "./menu-site/menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewPage from "../src/pages/NewPage";
import MainPage from "../src/pages/MainPage";
import AnnouncePage from "../src/pages/AnnouncePage"
import PaginationPage  from './pages/PaginationPage';

export default class App extends Component {


  render() {
    return <Router>
      <div className='app'>
        <Head />
        <Menu />
        <Routes>
          <Route element={<NewPage />} path='/new/' />
          <Route element={<AnnouncePage />} path='/announce' />
          <Route element={<MainPage />} path='/' />
          <Route element={<PaginationPage/>} path='/data/:category/:subcategory'/>
        </Routes>

      </div>

    </Router>
  }
}