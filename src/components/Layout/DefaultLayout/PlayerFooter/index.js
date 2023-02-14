import classNames from 'classnames/bind';
import styles from './PlayerFooter.module.scss';

const cx = classNames.bind(styles);

function PlayerFooter() {
  return (
    <footer className={cx('wrapper')}>
      <h1>footer over here</h1>
    </footer>
  );
}

export default PlayerFooter;
