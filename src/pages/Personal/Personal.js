import classNames from 'classnames/bind';
import styles from './Personal.module.scss';

const cx = classNames.bind(styles);

function Personal() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}></div>
    </div>
  );
}

export default Personal;
