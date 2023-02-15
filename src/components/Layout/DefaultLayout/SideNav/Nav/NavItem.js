import classNames from 'classnames/bind';
import PropsTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function NavItem({ title, icon }) {
  return (
    <NavLink className={cx('nav-item')}>
      {icon}
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

NavItem.propsType = {
  title: PropsTypes.string.isRequired,
  icon: PropsTypes.node.isRequired,
};

export default NavItem;
