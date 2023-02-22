import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-left')}>
        <div className={cx('wrapper-button')}>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="wrapper-search">
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div className={cx('wrapper-input')}>
            <input />
          </div>
        </div>
      </div>
      <div className={cx('wrapper-right')}>he</div>
    </div>
  );
}

export default Header;
