import { NavLink, useLocation } from 'react-router-dom';
import { SidebarContainer } from './styles';
import { Star, Heart, Popcorn, ChartLineUp } from 'phosphor-react';
import React from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import TmdbLogo from '../../assets/tmdb-logo.svg';
import { BiCameraMovie } from 'react-icons/bi';

export const Sidebar = () => {
  const { mobileMenu, setMobileMenu } = React.useContext(GlobalContext);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname, setMobileMenu]);

  return (
    <SidebarContainer className={mobileMenu ? 'active' : ''}>
      <div className="logo">
        <NavLink to="/movies/popular">
          <BiCameraMovie />
          <span>MovieLibrary</span>
        </NavLink>
      </div>
      <nav>
        <p>Movies</p>
        <ul>
          <li>
            <NavLink to="/movies/popular">
              <Heart />
              <span>Popular</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies/top_rated">
              <Star />
              <span>Top Rated</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies/now_playing">
              <Popcorn />
              <span>Now Playing</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies/upcoming">
              <ChartLineUp />
              <span>Upcoming</span>
            </NavLink>
          </li>
        </ul>
        <p>TV Series</p>
        <ul>
          <li>
            <NavLink to="/tvseries/popular">
              <Heart />
              <span>Popular</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tvseries/top_rated">
              <Star />
              <span>Top Rated</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tvseries/airing_today">
              <Popcorn />
              <span>Airing Today</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tvseries/on_the_air">
              <ChartLineUp />
              <span>Airing Soon</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer>
        <a href="https://www.themoviedb.org/" target="_blank">
          <img src={TmdbLogo} alt="" />
        </a>
        <span></span>
        <p>
          Copyright &copy;{' '}
          <a href="https://github.com/julianachagas" target="_blank">
            Juliana Chagas
          </a>
        </p>
        <p>2024</p>
      </footer>
    </SidebarContainer>
  );
};
