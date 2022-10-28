import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import RecipesContext from '../context/RecipesContext';
import Search from './Search';

export default function Header() {
  const { tituloPagina, searchBar, showSearch,
    redirectToProfile } = useContext(RecipesContext);

  const history = useHistory();
  return (
    <header>
      <div className="header-icons">
        <div>
          Main Group 8
        </div>
        <div className="header-profile-search">
          <button
            type="button"
            onClick={ redirectToProfile }
            className="search-top"
          >
            <img
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="Profile"
            />
          </button>
          { ((history.location.pathname === '/meals')
          || (history.location.pathname === '/drinks'))
          && (
            <button
              type="button"
              onClick={ showSearch }
              className="search-top"
            >
              <img
                src={ searchIcon }
                data-testid="search-top-btn"
                alt="Search"
              />
            </button>)}
        </div>
      </div>
      <div>
        <h1 data-testid="page-title">
          { tituloPagina(history) }
        </h1>
      </div>
      <div>
        { searchBar && <Search /> }
      </div>
    </header>
  );
}