import React from 'react';
import store from '../store/index.js';
import Grid from "../template/grid";

const TopBar = () => {
    return <nav>
        <div className="nav-wrapper #cfd8dc blue-grey lighten-4">
        <Grid cols='12 9 10'>
        <a href='#/todos' className="waves-effect waves-light btn #1565c0 blue darken-3">
        Menu
        </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a className="waves-effect waves-light btn #1565c0 blue darken-3"
                        onClick={() => store.dispatch({
                            type: 'LOGOUT'
                        })}>
                        Sair
                        <i className="material-icons right">exit_to_app</i>
                    </a>
                </li>
            </ul>
            </Grid>
        </div>
    </nav>;
}

export default TopBar;