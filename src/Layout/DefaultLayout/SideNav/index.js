import classNames from 'classnames/bind';
import styles from './SideNav.module.scss';

const cx = classNames.bind(styles);

function SideNav() {
  return (
    <div className={cx('wrapper')}>
      <h1>Side navvv</h1>
    </div>
  );
}

export default SideNav;
