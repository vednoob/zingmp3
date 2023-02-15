import classNames from 'classnames/bind';
import styles from './SideNav.module.scss';
import images from '~/assets/images';
import Nav, { NavItem } from './Nav';

const cx = classNames.bind(styles);

function SideNav() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="ZingMp3" />
        </div>
        <div className={cx('nav')}>
          <Nav>
            <NavItem title="Personal" />
            <NavItem title="Explore" />
            <NavItem title="#zingchart" />
            <NavItem title="Radio" />
            <NavItem title="Following" />
          </Nav>
        </div>
        <div>Library</div>
        <button>Create New Playlist</button>
      </div>
    </aside>
  );
}

export default SideNav;
