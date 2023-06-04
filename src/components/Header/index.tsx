import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { FormContainer, HeaderContainer } from './styles';
import React, { FormEvent } from 'react';
import { IoClose } from 'react-icons/io5';
import { GlobalContext } from '../../contexts/GlobalContext';

export const Header = () => {
  const [mobileForm, setMobileForm] = React.useState(false);
  const { mobileMenu, setMobileMenu } = React.useContext(GlobalContext);
  const [query, setQuery] = React.useState('');
  const navigate = useNavigate();
  const inputElement = React.useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();

  function toggleMobileForm() {
    setMobileForm(prevState => !prevState);
  }

  function toggleMobileMenu() {
    setMobileMenu(prevState => !prevState);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query.trim()}`);
      setQuery('');
      setMobileForm(false);
      setMobileMenu(false);
    }
  }

  React.useEffect(() => {
    setMobileForm(false);
  }, [pathname]);

  React.useEffect(() => {
    if (mobileForm) {
      inputElement.current?.focus();
    }
  }, [mobileForm]);

  return (
    <HeaderContainer>
      <button
        className={`toggle-menu${mobileMenu ? ' active' : ''} `}
        onClick={toggleMobileMenu}
        aria-label={mobileMenu ? 'Close Menu' : 'Open Menu'}
        aria-expanded={mobileMenu ? 'true' : 'false'}
      >
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div className="logo">
        <NavLink to="/movies/popular">
          <BiCameraMovie />
          <span>MovieLibrary</span>
        </NavLink>
      </div>
      <FormContainer
        role="dialog"
        aria-label="Search"
        className={`${mobileForm ? 'mobile-form' : ''} `}
      >
        <form onSubmit={handleSubmit} role="search">
          <label htmlFor="search" className="visually-hidden">
            Search
          </label>
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              ref={inputElement}
            />
            <button type="submit" aria-label="Search">
              <FaSearch />
            </button>
          </div>
        </form>
        <button
          className="close-form"
          onClick={toggleMobileForm}
          aria-label="Close Search Form"
        >
          <IoClose />
        </button>
      </FormContainer>
      <button
        className="open-form"
        onClick={toggleMobileForm}
        aria-label="Open Search Form"
        aria-haspopup="dialog"
      >
        <FaSearch />
      </button>
    </HeaderContainer>
  );
};
