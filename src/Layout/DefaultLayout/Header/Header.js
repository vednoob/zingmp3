import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DownloadIcon, ThemeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('nested-wrapper')}>
        <div className={cx('wrapper-left')}>
          <div className={cx('wrapper-button')}>
            <button className={cx('left-btn')}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className={cx('right-btn')}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className={cx('wrapper-search')}>
            <button className={cx('search-button')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <div className={cx('wrapper-input')}>
              <input placeholder="Search for songs, composers, lyrics..." />
            </div>
          </div>
        </div>
        <div className={cx('wrapper-right')}>
          <div className={cx('wrapper-item', 'download-window')}>
            <a href="/">
              <DownloadIcon className={cx('download-icon')} />
              <span className={cx('item-text')}>Try Window</span>
            </a>
          </div>
          <div className={cx('wrapper-item', 'theme')}>
            <ThemeIcon />
          </div>
          <div className={cx('wrapper-item', 'vip-upgrade')}></div>
          <div className={cx('wrapper-item', 'settings')}>4</div>
          <div className={cx('wrapper-item', 'avatar')}>5</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
