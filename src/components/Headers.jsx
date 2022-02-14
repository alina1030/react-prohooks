

import {  NavLink } from 'react-router-dom';

const Header = () =>
{
    return (
        <header>
        <h3>ProHooks</h3>
        <nav>
          <NavLink to="/" className="links" >Home</NavLink>
          <NavLink to="/search" className="links" >Search</NavLink>
        </nav>
      </header>
    )
}
export default Header