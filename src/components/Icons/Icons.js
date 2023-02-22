export const DownloadIcon = ({ width = '2rem', height = '2rem', className }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path
      d="M17.4966 13.4203V13.6633C17.4966 14.5857 16.7489 15.3333 15.8266 15.3333H4.16658C3.24427 15.3333 2.49658 14.5857 2.49658 13.6633V5.00334C2.49658 4.08103 3.24427 3.33334 4.16658 3.33334H9.99658"
      stroke="currentColor"
      strokeLinecap="round"
    ></path>
    <path
      filRule="evenodd"
      cliRule="evenodd"
      d="M14.4979 11.6247C14.4103 11.7021 14.2955 11.7493 14.1696 11.75C14.1687 11.75 14.1678 11.75 14.1668 11.75C14.1659 11.75 14.165 11.75 14.1641 11.75C14.0382 11.7493 13.9233 11.7021 13.8358 11.6247L10.5043 8.70963C10.2964 8.52779 10.2754 8.21191 10.4572 8.00409C10.6391 7.79627 10.9549 7.77521 11.1628 7.95705L13.6668 10.1481V3.33334C13.6668 3.0572 13.8907 2.83334 14.1668 2.83334C14.443 2.83334 14.6668 3.0572 14.6668 3.33334V10.1481L17.1709 7.95705C17.3787 7.77521 17.6946 7.79627 17.8765 8.00409C18.0583 8.21191 18.0372 8.52779 17.8294 8.70963L14.4979 11.6247Z"
      fill="currentColor"
    ></path>
    <path d="M6 16.8333H14" stroke="currentColor" strokWidth="2" strokeLinecap="round"></path>
  </svg>
);

export const ThemeIcon = ({ width = '2rem', height = '2rem', className }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 20 20">
    <defs>
      <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
        <stop offset="0%" stopColor="#F81212"></stop>
        <stop offset="100%" stopColor="red"></stop>
      </linearGradient>
      <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
        <stop offset="0%" stopColor="#00F"></stop>
        <stop offset="100%" stopColor="#0031FF"></stop>
      </linearGradient>
      <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
        <stop offset="0%" stopColor="#FFA600"></stop>
        <stop offset="100%" stopColor="orange"></stop>
      </linearGradient>
      <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
        <stop offset="0%" stopColor="#13EFEC"></stop>
        <stop offset="100%" stopColor="#00E8DF"></stop>
      </linearGradient>
      <filter id="4a7imk8mze" width="230%" height="230%" x="-65%" y="-65%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
      </filter>
      <filter id="301mo6jeah" width="312.7%" height="312.7%" x="-106.4%" y="-106.4%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
      </filter>
      <filter id="b2zvzgq7fj" width="295%" height="295%" x="-97.5%" y="-97.5%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
      </filter>
      <filter id="a1wq161tvl" width="256%" height="256%" x="-78%" y="-78%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
      </filter>
      <path
        id="qtpqrj1oda"
        d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
      ></path>
      <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
      <path
        id="2eiwxjmc7m"
        d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
      ></path>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2 3)">
      <mask id="tinejqaasb" fill="#fff">
        <use xlinkHref="#qtpqrj1oda"></use>
      </mask>
      <use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
      <g mask="url(#tinejqaasb)">
        <g transform="translate(-2 -3)">
          <mask id="uf3ckvfvpf" fill="#fff">
            <use xlinkHref="#jggzvnjgfc"></use>
          </mask>
          <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
          <circle
            cx="8.9"
            cy="6.8"
            r="9"
            fill="url(#j32lhg93hd)"
            filter="url(#4a7imk8mze)"
            mask="url(#uf3ckvfvpf)"
          ></circle>
          <circle
            cx="9.3"
            cy="13.7"
            r="5.5"
            fill="url(#hjoavsus6g)"
            filter="url(#301mo6jeah)"
            mask="url(#uf3ckvfvpf)"
          ></circle>
          <circle
            cx="15.9"
            cy="6.9"
            r="6"
            fill="url(#la1y5u3dvi)"
            filter="url(#b2zvzgq7fj)"
            mask="url(#uf3ckvfvpf)"
          ></circle>
          <circle
            cx="16.4"
            cy="17.7"
            r="7.5"
            fill="url(#2dsmrlvdik)"
            filter="url(#a1wq161tvl)"
            mask="url(#uf3ckvfvpf)"
          ></circle>
        </g>
      </g>
      <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
    </g>
  </svg>
);
