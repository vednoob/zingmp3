import PropsTypes from 'prop-types';

function Nav({ children }) {
  return <nav>{children}</nav>;
}

Nav.propsType = {
  children: PropsTypes.node.isRequired,
};

export default Nav;
