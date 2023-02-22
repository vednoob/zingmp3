import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import PlayerFooter from './PlayerFooter';
import SideNav from './SideNav';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('row-wrapper')}>
        <SideNav />
        <div className={cx('content-wrapper')}>
          <Header />
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
      <PlayerFooter />
    </div>
  );
}

export default DefaultLayout;
