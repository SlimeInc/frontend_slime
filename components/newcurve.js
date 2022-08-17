import styles from "../styles/Home.module.scss";
const newcurve = () => {
  return (
    <div className={styles.newpage}>
      <svg
        width="1440"
        height="975"
        viewBox="0 0 1440 975"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_59_32)">
          <path
            d="M-28 830.858C585.293 1090.1 1206.21 938.876 1440 830.858L1440 1L-28 1L-28 830.858Z"
            fill="url(#paint0_linear_59_32)"
          />
        </g>
        <path
          d="M-28 830.858C585.293 1090.1 1206.21 938.876 1440 830.858L1440 1L-28 1L-28 830.858Z"
          stroke="black"
        />
        <defs>
          <filter
            id="filter0_i_59_32"
            x="-28.5"
            y="0.5"
            width="1469"
            height="978"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="7" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_59_32"
            />
          </filter>
          <linearGradient
            id="paint0_linear_59_32"
            x1="1090.9"
            y1="974"
            x2="793.109"
            y2="-24.9667"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#48060B" />
            <stop offset="1" stop-color="#70131B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default newcurve;
