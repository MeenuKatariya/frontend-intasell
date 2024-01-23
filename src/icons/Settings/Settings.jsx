/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Settings = ({ className }) => {
  return (
    <svg
      className={`settings ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10ZM11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z"
        fill="#4A4A4A"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M9.37662 2.5C8.45098 2.5 7.7006 3.25038 7.7006 4.17601V4.86371C7.7006 4.92017 7.65837 5.03405 7.5034 5.11502C7.34955 5.1954 7.20009 5.28295 7.05548 5.37722C6.90777 5.47352 6.78653 5.45337 6.73714 5.42486L6.13733 5.07856C5.33571 4.61574 4.31067 4.8904 3.84786 5.69202L3.22458 6.77157C2.76176 7.57319 3.03642 8.59823 3.83804 9.06105L4.48553 9.43487C4.53418 9.46296 4.61041 9.55468 4.60491 9.7258C4.60303 9.78431 4.60208 9.84302 4.60208 9.90193C4.60208 9.99837 4.60462 10.0943 4.60964 10.1896C4.61889 10.3654 4.54087 10.4604 4.4914 10.4889L3.83805 10.8661C3.03642 11.329 2.76177 12.354 3.22459 13.1556L3.84786 14.2352C4.31068 15.0368 5.33572 15.3114 6.13734 14.8486L6.83779 14.4442C6.88631 14.4162 7.00401 14.3959 7.14992 14.4868C7.2649 14.5584 7.3828 14.6258 7.5034 14.6888C7.65837 14.7698 7.7006 14.8837 7.7006 14.9401V15.7512C7.7006 16.6768 8.45098 17.4272 9.37662 17.4272H10.6232C11.5488 17.4272 12.2992 16.6768 12.2992 15.7512V14.9402C12.2992 14.8837 12.3414 14.7699 12.4964 14.6889C12.617 14.6259 12.7349 14.5585 12.8499 14.4868C12.9958 14.396 13.1135 14.4163 13.162 14.4443L13.8624 14.8486C14.664 15.3114 15.6891 15.0368 16.1519 14.2352L16.7752 13.1556C17.238 12.354 16.9633 11.329 16.1617 10.8661L15.5085 10.489C15.459 10.4604 15.381 10.3655 15.3903 10.1897C15.3953 10.0944 15.3978 9.9984 15.3978 9.90193C15.3978 9.84299 15.3969 9.78425 15.395 9.72572C15.3895 9.5546 15.4657 9.46288 15.5144 9.43479L16.1617 9.06105C16.9633 8.59823 17.238 7.57319 16.7752 6.77157L16.1519 5.69202C15.6891 4.8904 14.6641 4.61574 13.8624 5.07856L13.2627 5.42481C13.2133 5.45332 13.0921 5.47347 12.9444 5.37718C12.7997 5.2829 12.6503 5.19534 12.4964 5.11496C12.3414 5.03399 12.2992 4.92011 12.2992 4.86364V4.17601C12.2992 3.25038 11.5488 2.5 10.6232 2.5H9.37662ZM9.2006 4.17601C9.2006 4.0788 9.27941 4 9.37662 4H10.6232C10.7204 4 10.7992 4.0788 10.7992 4.17601V4.86364C10.7992 5.5921 11.2611 6.16196 11.8018 6.44446C11.9128 6.50245 12.0207 6.56566 12.1252 6.63377C12.6422 6.97075 13.375 7.09204 14.0127 6.72385L14.6124 6.3776C14.6966 6.32899 14.8043 6.35784 14.8529 6.44202L15.4761 7.52157C15.5247 7.60576 15.4959 7.7134 15.4117 7.76201L14.7644 8.13575C14.1412 8.49556 13.8763 9.16964 13.8958 9.77392C13.8971 9.8164 13.8978 9.85907 13.8978 9.90193C13.8978 9.97209 13.896 10.0417 13.8923 10.1109C13.8599 10.7264 14.1217 11.4204 14.7585 11.788L15.4117 12.1652C15.4959 12.2138 15.5247 12.3214 15.4761 12.4056L14.8529 13.4852C14.8043 13.5693 14.6966 13.5982 14.6124 13.5496L13.912 13.1452C13.2877 12.7848 12.5706 12.8937 12.057 13.2136C11.974 13.2653 11.8888 13.3139 11.8018 13.3594C11.2611 13.6419 10.7992 14.2117 10.7992 14.9402V15.7512C10.7992 15.8484 10.7204 15.9272 10.6232 15.9272H9.37662C9.27941 15.9272 9.2006 15.8484 9.2006 15.7512V14.9401C9.2006 14.2117 8.73872 13.6419 8.198 13.3593C8.111 13.3139 8.0259 13.2652 7.94286 13.2135C7.42926 12.8937 6.71212 12.7847 6.08779 13.1452L5.38734 13.5496C5.30315 13.5982 5.19551 13.5693 5.1469 13.4852L4.52362 12.4056C4.47502 12.3214 4.50386 12.2138 4.58805 12.1652L5.2414 11.788C5.87819 11.4203 6.13997 10.7263 6.10757 10.1108C6.10393 10.0417 6.10208 9.97207 6.10208 9.90193C6.10208 9.85909 6.10277 9.81643 6.10414 9.77398C6.12356 9.16971 5.85874 8.49564 5.23553 8.13583L4.58804 7.76201C4.50386 7.7134 4.47501 7.60576 4.52362 7.52157L5.14689 6.44202C5.1955 6.35784 5.30315 6.32899 5.38733 6.3776L5.98714 6.7239C6.62487 7.09209 7.3577 6.97079 7.87464 6.6338C7.97912 6.56569 8.08701 6.50249 8.198 6.4445C8.73872 6.162 9.2006 5.59215 9.2006 4.86371V4.17601Z"
        fill="#4A4A4A"
        fillRule="evenodd"
      />
    </svg>
  );
};
