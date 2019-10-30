import React, { Component } from 'react';
import { Icon } from 'antd';

 // Define Icon SVG
 const PlaySvg = () => (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M153.125 159.375C153.125 161.033 153.783 162.622 154.956 163.794C156.128 164.967 157.717 165.625 159.375 165.625C161.033 165.625 162.622 164.967 163.794 163.794C164.967 162.622 165.625 161.033 165.625 159.375C165.625 157.717 164.967 156.128 163.794 154.956C162.622 153.783 161.033 153.125 159.375 153.125C157.717 153.125 156.128 153.783 154.956 154.956C153.783 156.128 153.125 157.717 153.125 159.375Z" fill="currentColor"/>
    <path d="M100 189.062C80.408 189.059 61.3636 182.596 45.8167 170.674C30.2698 158.752 19.088 142.036 14.0031 123.115C8.91825 104.194 10.2141 84.1251 17.6901 66.0155C25.166 47.9059 38.4047 32.7668 55.3558 22.9429C72.3068 13.119 92.0242 9.15869 111.454 11.6753C130.884 14.1919 148.941 23.0451 162.83 36.8634C176.719 50.6818 185.664 68.6943 188.279 88.111C190.894 107.528 187.034 127.265 177.297 144.266C176.886 144.978 176.34 145.602 175.688 146.103C175.037 146.603 174.293 146.971 173.499 147.184C172.705 147.397 171.878 147.452 171.063 147.346C170.248 147.239 169.462 146.973 168.75 146.562C168.038 146.152 167.414 145.606 166.913 144.954C166.412 144.302 166.045 143.558 165.831 142.765C165.618 141.971 165.563 141.143 165.67 140.328C165.777 139.514 166.043 138.728 166.453 138.016C175.67 121.917 178.727 103.019 175.059 84.8346C171.39 66.6505 161.243 50.4169 146.506 39.1509C131.768 27.885 113.441 22.353 94.9311 23.5832C76.4214 24.8134 58.9878 32.7221 45.8706 45.8393C32.7533 58.9566 24.8446 76.3902 23.6145 94.8999C22.3843 113.41 27.9162 131.737 39.1821 146.474C50.4481 161.212 66.6817 171.358 84.8658 175.027C103.05 178.696 121.948 175.638 138.047 166.422C138.759 166.011 139.545 165.745 140.36 165.639C141.174 165.532 142.002 165.587 142.796 165.8C143.59 166.013 144.333 166.381 144.985 166.882C145.637 167.383 146.183 168.007 146.594 168.719C147.004 169.431 147.27 170.217 147.377 171.031C147.484 171.846 147.429 172.674 147.215 173.468C147.002 174.262 146.635 175.005 146.134 175.657C145.633 176.309 145.009 176.855 144.297 177.266C130.813 184.996 115.542 189.063 100 189.062Z" fill="currentColor"/>
    <path d="M82.8125 136.172C80.3261 136.172 77.9415 135.184 76.1834 133.426C74.4252 131.668 73.4375 129.283 73.4375 126.797V74.4688C73.4364 72.8226 73.8689 71.2052 74.6913 69.7792C75.5137 68.3532 76.697 67.1688 78.1224 66.3453C79.5478 65.5217 81.1648 65.088 82.811 65.0878C84.4572 65.0875 86.0744 65.5207 87.5 66.3438L132.813 92.5157C134.237 93.3387 135.42 94.5221 136.242 95.9469C137.064 97.3717 137.497 98.9878 137.497 100.633C137.497 102.278 137.064 103.894 136.242 105.319C135.42 106.744 134.237 107.927 132.813 108.75L87.5 134.906C86.0758 135.732 84.459 136.169 82.8125 136.172ZM85.9375 79.9219V121.375L121.875 100.641L85.9375 79.9219Z" fill="curentColor"/>
    </svg>
);

const StarSvg = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M6.30712 0.487005L4.71879 4.10687L1.1651 4.68922C0.527819 4.79311 0.272421 5.67621 0.73457 6.182L3.30558 8.99806L2.69749 12.9761C2.58803 13.6951 3.2618 14.2337 3.82611 13.8975L7.00521 12.0192L10.1843 13.8975C10.7486 14.231 11.4224 13.6951 11.3129 12.9761L10.7048 8.99806L13.2759 6.182C13.738 5.67621 13.4826 4.79311 12.8453 4.68922L9.29164 4.10687L7.7033 0.487005C7.41871 -0.158228 6.59414 -0.16643 6.30712 0.487005Z" fill="#F2C94C" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const TimeSvg = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 14.0033C4.68569 14.0033 1.9967 11.3143 1.9967 8C1.9967 4.68569 4.68569 1.9967 8 1.9967C11.3143 1.9967 14.0033 4.68569 14.0033 8C14.0033 11.3143 11.3143 14.0033 8 14.0033ZM8 3.74767C5.65496 3.74767 3.74767 5.65497 3.74767 8C3.74767 10.345 5.65497 12.2523 8 12.2523C10.345 12.2523 12.2523 10.345 12.2523 8C12.2523 5.65495 10.345 3.74767 8 3.74767ZM9.00055 8.7504C9.00055 8.89111 8.89111 9.00054 8.75041 9.00054H6.24903C6.10833 9.00054 5.99889 8.89111 5.99889 8.7504V8.25012C5.99889 8.10942 6.10833 7.99998 6.24903 7.99998H8V5.24848C8 5.10778 8.10944 4.99834 8.25014 4.99834H8.75043C8.89113 4.99834 9.00057 5.10778 9.00057 5.24848V8.7504H9.00055Z" fill="#F2C94C" />
    </svg>
  
  );

  const DownloadMp4Svg  = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M14.666 17.0001V17.82H10.666L16 23.634L21.334 17.82H17.334V17.0001H14.666ZM3.61053 14.7647C2.88166 15.865 2.462 17.2102 2.462 18.67C2.462 22.356 5.238 25.37 8.616 25.37H24.616C27.376 25.37 29.538 23.022 29.538 20.004C29.538 18.0461 28.4953 16.2653 27.0041 15.3236C27.5493 14.6479 27.903 13.8113 27.9828 12.8963C30.3512 14.2486 32 16.9712 32 20.006V20.004C32 24.466 28.746 28 24.614 28H8.614C3.872 28 0 23.8 0 18.672C0 15.7867 1.19051 13.217 3.11246 11.4959C3.03886 11.8188 3 12.1549 3 12.5001C3 13.3258 3.22238 14.0995 3.61053 14.7647ZM20.3563 8.00006C19.0972 7.1283 17.6005 6.628 16 6.628C14.4031 6.628 12.9056 7.12246 11.6552 8.00006H8.02216C9.93146 5.50558 12.8257 4 16 4C19.2215 4 22.1206 5.55185 24.0579 8.03431C23.8751 8.01171 23.6889 8.00006 23.5 8.00006H20.3563Z" fill="white"/>
  <path d="M8.70801 16L6.98926 10.3994H6.94531C7.00716 11.5387 7.03809 12.2988 7.03809 12.6797V16H5.68555V8.86133H7.74609L9.43555 14.3203H9.46484L11.2568 8.86133H13.3174V16H11.9062V12.6211C11.9062 12.4616 11.9079 12.2777 11.9111 12.0693C11.9176 11.861 11.9404 11.3076 11.9795 10.4092H11.9355L10.0947 16H8.70801ZM16.6328 12.2207H17.1309C17.5964 12.2207 17.9447 12.1296 18.1758 11.9473C18.4069 11.7617 18.5225 11.4932 18.5225 11.1416C18.5225 10.7868 18.4248 10.5247 18.2295 10.3555C18.0374 10.1862 17.7347 10.1016 17.3213 10.1016H16.6328V12.2207ZM20.0508 11.0879C20.0508 11.8561 19.8099 12.4437 19.3281 12.8506C18.8496 13.2575 18.1676 13.4609 17.2822 13.4609H16.6328V16H15.1191V8.86133H17.3994C18.2653 8.86133 18.9229 9.0485 19.3721 9.42285C19.8245 9.79395 20.0508 10.349 20.0508 11.0879ZM26.0518 14.5205H25.1924V16H23.7178V14.5205H20.6709V13.4707L23.8008 8.86133H25.1924V13.3486H26.0518V14.5205ZM23.7178 13.3486V12.1377C23.7178 11.9359 23.7259 11.6429 23.7422 11.2588C23.7585 10.8747 23.7715 10.6517 23.7812 10.5898H23.7422C23.6217 10.8568 23.4769 11.1172 23.3076 11.3711L21.999 13.3486H23.7178Z" fill="white"/>
  </svg>
  );
  const DownloadSrtSvg  = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M14.666 17V17.82H10.666L16 23.634L21.334 17.82H17.334V17H14.666ZM6.00122 12.6055C3.86736 13.711 2.462 15.9986 2.462 18.67C2.462 22.356 5.238 25.37 8.616 25.37H24.616C27.376 25.37 29.538 23.022 29.538 20.004C29.538 18.0461 28.4953 16.2653 27.0041 15.3236C27.5492 14.6479 27.9029 13.8113 27.9828 12.8963C30.3512 14.2486 32 16.9712 32 20.006V20.004C32 24.466 28.746 28 24.614 28H8.614C3.872 28 0 23.8 0 18.672C0 14.124 2.958 10.36 7.076 9.468C8.88 6.108 12.244 4 16 4C19.2215 4 22.1205 5.55182 24.0579 8.03424C23.8751 8.01164 23.6889 8 23.5 8H20.3562C19.0971 7.12827 17.6005 6.628 16 6.628C14.4032 6.628 12.9057 7.12244 11.6553 8H10.5C8.01472 8 6 10.0147 6 12.5C6 12.5353 6.00041 12.5705 6.00122 12.6055Z" fill="white"/>
  <path d="M13.1621 14.0176C13.1621 14.6621 12.9294 15.1699 12.4639 15.541C12.0016 15.9121 11.3571 16.0977 10.5303 16.0977C9.76855 16.0977 9.09473 15.9544 8.50879 15.668V14.2617C8.99056 14.4766 9.39746 14.6279 9.72949 14.7158C10.0648 14.8037 10.3708 14.8477 10.6475 14.8477C10.9795 14.8477 11.2334 14.7842 11.4092 14.6572C11.5882 14.5303 11.6777 14.3415 11.6777 14.0908C11.6777 13.9508 11.6387 13.8271 11.5605 13.7197C11.4824 13.609 11.3669 13.5033 11.2139 13.4023C11.0641 13.3014 10.7565 13.1403 10.291 12.9189C9.85482 12.7139 9.52767 12.5169 9.30957 12.3281C9.09147 12.1393 8.91732 11.9196 8.78711 11.6689C8.6569 11.4183 8.5918 11.1253 8.5918 10.79C8.5918 10.1585 8.80501 9.66211 9.23145 9.30078C9.66113 8.93945 10.2536 8.75879 11.0088 8.75879C11.3799 8.75879 11.7331 8.80273 12.0684 8.89062C12.4069 8.97852 12.7601 9.10221 13.1279 9.26172L12.6396 10.4385C12.2588 10.2822 11.943 10.1732 11.6924 10.1113C11.445 10.0495 11.2008 10.0186 10.96 10.0186C10.6735 10.0186 10.4538 10.0853 10.3008 10.2188C10.1478 10.3522 10.0713 10.5264 10.0713 10.7412C10.0713 10.8747 10.1022 10.9919 10.1641 11.0928C10.2259 11.1904 10.3236 11.2865 10.457 11.3809C10.5938 11.472 10.9144 11.638 11.4189 11.8789C12.0863 12.1979 12.5436 12.5186 12.791 12.8408C13.0384 13.1598 13.1621 13.5521 13.1621 14.0176ZM15.9697 12.0303H16.458C16.9365 12.0303 17.2897 11.9505 17.5176 11.791C17.7454 11.6315 17.8594 11.3809 17.8594 11.0391C17.8594 10.7005 17.7422 10.4596 17.5078 10.3164C17.2767 10.1732 16.917 10.1016 16.4287 10.1016H15.9697V12.0303ZM15.9697 13.2607V16H14.4561V8.86133H16.5361C17.5062 8.86133 18.224 9.03874 18.6895 9.39355C19.1549 9.74512 19.3877 10.2806 19.3877 11C19.3877 11.4199 19.2721 11.7943 19.041 12.123C18.8099 12.4486 18.4827 12.7041 18.0596 12.8896C19.1338 14.4945 19.8337 15.5312 20.1592 16H18.4795L16.7754 13.2607H15.9697ZM23.8115 16H22.2979V10.1211H20.3594V8.86133H25.75V10.1211H23.8115V16Z" fill="white"/>
  </svg>
  );
  const caution  = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.647 22.5312C14.647 23.2781 15.2532 23.8843 16.0001 23.8843C16.747 23.8843 17.3532 23.2781 17.3532 22.5312V13.4718C17.3532 12.725 16.747 12.1187 16.0001 12.1187C15.2532 12.1187 14.647 12.725 14.647 13.4718V22.5312ZM16.0001 11.05C16.747 11.05 17.3532 10.4437 17.3532 9.69685V8.34373C17.3532 7.59685 16.747 6.9906 16.0001 6.9906C15.2532 6.9906 14.647 7.59685 14.647 8.34373V9.69685C14.647 10.4437 15.2532 11.05 16.0001 11.05Z" fill="white"/>
    <path d="M23.1718 3.97808C21.1187 2.69683 18.8562 2.03121 16.6 1.93433H16.5718L16.5125 1.93121C16.475 1.93121 16.4406 1.92808 16.4031 1.92808C15.5406 1.90308 14.6781 1.95621 13.8281 2.09683C13.7937 2.10308 13.7562 2.10933 13.7218 2.11558L13.6625 2.12496L13.5968 2.13746C11.9531 2.43746 10.3781 3.03746 8.94995 3.90933L8.94683 3.91246C8.9062 3.93746 8.86245 3.96246 8.82183 3.99058L8.80308 4.00308C8.77183 4.02496 8.73745 4.04371 8.7062 4.06558L8.65308 4.09996C8.62183 4.11871 8.5937 4.14058 8.56245 4.15933L8.5187 4.18746C8.48433 4.20933 8.44995 4.23121 8.4187 4.25621L8.3937 4.27496C7.01245 5.21246 5.8187 6.39683 4.8687 7.76871C4.8437 7.80621 4.8187 7.84371 4.7937 7.87808L4.78433 7.89371C4.02183 9.02496 3.43745 10.2625 3.0437 11.5687L3.04058 11.575C3.02495 11.6218 3.01245 11.6687 2.99995 11.7156C2.99683 11.7281 2.99058 11.7437 2.98745 11.7593C2.97808 11.7968 2.96558 11.8312 2.9562 11.8687C2.94995 11.8968 2.94058 11.925 2.93433 11.9531C2.92808 11.975 2.92183 12 2.91558 12.0218L2.87808 12.1625L2.87495 12.1781C2.84683 12.2906 2.82183 12.4 2.79683 12.5125C2.77183 12.625 2.74683 12.7375 2.72495 12.8531C2.72495 12.8593 2.72183 12.8656 2.72183 12.8718C2.71245 12.9187 2.70308 12.9656 2.6937 13.0156C2.69058 13.0375 2.68433 13.0593 2.6812 13.0812C2.67495 13.1125 2.6687 13.1437 2.66558 13.1718C2.65933 13.2062 2.65308 13.2406 2.64995 13.2718C2.64683 13.2906 2.6437 13.3093 2.64058 13.325C2.63433 13.3687 2.62808 13.4125 2.6187 13.4562L2.61558 13.475C2.41558 14.8062 2.41558 16.1593 2.61558 17.4937L2.62495 17.55C2.62808 17.5687 2.6312 17.5906 2.63433 17.6093C2.92808 19.4375 3.5937 21.1875 4.59058 22.7468C5.00933 23.3656 5.85308 23.5281 6.47183 23.1062C7.07495 22.6968 7.24683 21.8875 6.86245 21.2687C6.07808 20.0312 5.55933 18.6812 5.32183 17.2531C5.3187 17.2281 5.31245 17.2 5.30933 17.175C5.11245 15.9531 5.1312 14.7062 5.35933 13.4906C5.36558 13.4625 5.3687 13.4343 5.37495 13.4062C5.37808 13.3937 5.37808 13.3812 5.3812 13.3687C5.39995 13.2812 5.4187 13.1906 5.43745 13.1031C5.4562 13.0156 5.47808 12.9281 5.49995 12.8406C5.50308 12.825 5.50933 12.8093 5.51245 12.7906C5.5187 12.7656 5.52495 12.7437 5.5312 12.7187C5.84683 11.5062 6.37183 10.3593 7.0812 9.32808L7.10308 9.29683L7.10933 9.29058L7.12495 9.26871C7.94683 8.09058 8.98433 7.09996 10.2093 6.32183C11.3968 5.56871 12.6906 5.06246 14.0562 4.81246L14.0781 4.80933H14.0843L14.1281 4.80308C14.7718 4.68746 15.4281 4.63433 16.0812 4.63746V4.64058C16.2875 4.64058 16.4906 4.64996 16.6968 4.66246C17.2625 4.69996 17.8281 4.78121 18.3812 4.90621L18.4312 4.91871V4.91558C19.6062 5.18433 20.7281 5.64996 21.75 6.29058C22.9906 7.06558 24.0437 8.05933 24.875 9.24371C26.4968 11.5531 27.1531 14.4031 26.7125 17.1906C26.4843 18.6218 25.975 19.975 25.2 21.2156C24.425 22.4562 23.4312 23.5093 22.2468 24.3406C19.9375 25.9625 17.0875 26.6187 14.3 26.1781C12.8687 25.95 11.5156 25.4406 10.275 24.6656C9.63433 24.2812 8.80308 24.4875 8.41558 25.1281C8.03745 25.7531 8.22808 26.5656 8.84058 26.9625C15.1843 30.9218 23.5375 28.9906 27.4968 22.6468C31.4562 16.3031 29.5156 7.93746 23.1718 3.97808Z" fill="white"/>
    </svg>
  );
    const lamp  = () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.1 6.98568C21.9956 5.99812 20.7253 5.26431 19.3245 4.80462C17.8618 4.32469 16.3299 4.16994 14.7711 4.3445C12.3525 4.6155 10.0728 5.74449 8.35181 7.52343C6.63232 9.30086 5.57694 11.6167 5.38032 14.0442C5.00345 18.6943 7.64781 23.007 11.9605 24.7757C12.1589 24.857 12.2921 25.0637 12.2921 25.2901V28.2922C12.2921 29.1579 12.9964 29.8621 13.862 29.8621H13.8954V30.43C13.8954 31.2957 14.5997 32 15.4653 32H16.5342C17.3999 32 18.1041 31.2957 18.1041 30.43V29.8621H18.1375C19.0032 29.8621 19.7075 29.1579 19.7075 28.2922V25.2899C19.7075 25.0609 19.8424 24.8572 20.0513 24.7713C24.063 23.1203 26.6552 19.2578 26.6552 14.931C26.6553 11.9021 25.3594 9.00617 23.1 6.98568ZM17.1021 30.43C17.1021 30.7431 16.8473 30.9978 16.5342 30.9978H15.4653C15.1522 30.9978 14.8975 30.7431 14.8975 30.43V29.8621H17.102V30.43H17.1021ZM18.7054 26.7222H18.1375C18.0046 26.7222 17.8772 26.775 17.7832 26.869C17.6893 26.9629 17.6365 27.0904 17.6365 27.2233C17.6365 27.3562 17.6893 27.4836 17.7832 27.5776C17.8772 27.6716 18.0046 27.7243 18.1375 27.7243H18.7054V28.2922C18.7054 28.6053 18.4506 28.8601 18.1375 28.8601H13.862C13.5489 28.8601 13.2941 28.6053 13.2941 28.2922V27.7243H15.9998C16.1327 27.7243 16.2601 27.6716 16.3541 27.5776C16.4481 27.4836 16.5008 27.3562 16.5008 27.2233C16.5008 27.0904 16.4481 26.9629 16.3541 26.869C16.2601 26.775 16.1327 26.7222 15.9998 26.7222H13.2942V25.5865H18.7054V26.7222ZM14.4299 16.0333H13.862C13.5489 16.0333 13.2941 15.7786 13.2941 15.4655C13.2941 15.1523 13.5489 14.8976 13.862 14.8976C14.1751 14.8976 14.4299 15.1523 14.4299 15.4655V16.0333ZM16.5677 23.4488V24.5845H15.432V23.4488H16.5677ZM15.4319 22.4467V17.0354H16.5676V22.4467H15.4319ZM19.67 23.8447C19.3236 23.9869 19.0404 24.2497 18.8726 24.5845H17.5697V17.0354H18.1376C19.0033 17.0354 19.7075 16.3312 19.7075 15.4655C19.7075 14.5998 19.0033 13.8956 18.1376 13.8956C17.2719 13.8956 16.5677 14.5998 16.5677 15.4655V16.0334H15.432V15.4655C15.432 14.5998 14.7277 13.8956 13.862 13.8956C12.9964 13.8956 12.2921 14.5998 12.2921 15.4655C12.2921 16.3312 12.9964 17.0354 13.862 17.0354H14.4299V24.5845H13.1289C12.966 24.2569 12.6914 23.9923 12.3407 23.8485C8.4335 22.2461 6.03769 18.3386 6.37913 14.1252C6.55719 11.9285 7.5135 9.83135 9.07206 8.2203C10.6315 6.6083 12.6951 5.58556 14.8827 5.3405C15.2582 5.29824 15.6357 5.277 16.0135 5.27687C18.3929 5.27687 20.6388 6.12918 22.432 7.73274C24.4791 9.56329 25.6532 12.187 25.6532 14.9311C25.6532 18.8501 23.3046 22.3488 19.67 23.8447ZM17.5697 16.0333V15.4655C17.5697 15.1523 17.8245 14.8976 18.1376 14.8976C18.4507 14.8976 18.7055 15.1523 18.7055 15.4655C18.7055 15.7786 18.4507 16.0333 18.1376 16.0333H17.5697Z" fill="white"/>
      <path d="M19.973 7.39491C19.6068 7.20153 19.227 7.03521 18.8365 6.89729C18.7745 6.87538 18.7087 6.8659 18.643 6.86941C18.5773 6.87291 18.513 6.88932 18.4536 6.9177C18.3942 6.94608 18.3411 6.98587 18.2971 7.03481C18.2531 7.08375 18.2192 7.14087 18.1973 7.20291C18.1754 7.26495 18.1659 7.3307 18.1694 7.3964C18.1729 7.4621 18.1893 7.52647 18.2177 7.58583C18.2461 7.6452 18.2859 7.69838 18.3348 7.74236C18.3837 7.78634 18.4409 7.82025 18.5029 7.84216C18.8471 7.96384 19.182 8.1105 19.5049 8.28097C19.5631 8.31171 19.6267 8.3307 19.6923 8.33683C19.7578 8.34296 19.8239 8.33612 19.8867 8.31671C19.9496 8.29729 20.008 8.26568 20.0587 8.22368C20.1094 8.18167 20.1512 8.1301 20.182 8.07191C20.2127 8.01373 20.2317 7.95008 20.2378 7.88456C20.244 7.81905 20.2371 7.75298 20.2177 7.69011C20.1983 7.62724 20.1667 7.56881 20.1247 7.51816C20.0827 7.46751 20.0311 7.42563 19.973 7.39491ZM12.9932 21.8212C11.1636 21.0217 9.70263 19.4956 8.98482 17.6341C8.96114 17.5727 8.92561 17.5166 8.88025 17.469C8.83489 17.4213 8.78059 17.383 8.72044 17.3564C8.6603 17.3297 8.59549 17.3151 8.52971 17.3135C8.46394 17.3119 8.39849 17.3232 8.3371 17.3469C8.27571 17.3706 8.21959 17.4061 8.17193 17.4515C8.12427 17.4968 8.08601 17.5511 8.05934 17.6113C8.03267 17.6714 8.01811 17.7362 8.01649 17.802C8.01486 17.8678 8.02621 17.9332 8.04988 17.9946C8.86325 20.104 10.5188 21.8335 12.5919 22.7395C12.7137 22.7926 12.8516 22.7953 12.9753 22.7468C13.0991 22.6983 13.1985 22.6027 13.2517 22.481C13.3049 22.3592 13.3076 22.2213 13.2591 22.0976C13.2106 21.9738 13.115 21.8744 12.9932 21.8212ZM24.4991 14.364C24.3559 12.1886 23.3941 10.1716 21.7908 8.68459C21.7425 8.63984 21.6859 8.60503 21.6243 8.58215C21.5626 8.55927 21.497 8.54877 21.4312 8.55125C21.3655 8.55373 21.3008 8.56914 21.241 8.5966C21.1812 8.62405 21.1274 8.66302 21.0827 8.71128C21.038 8.75952 21.0031 8.8161 20.9803 8.87779C20.9574 8.93949 20.9469 9.00508 20.9494 9.07084C20.9518 9.13659 20.9673 9.20121 20.9947 9.26101C21.0222 9.3208 21.0611 9.37461 21.1094 9.41934C22.5243 10.7316 23.3729 12.511 23.4991 14.4298C23.5079 14.5624 23.5689 14.6861 23.6689 14.7737C23.7688 14.8613 23.8994 14.9056 24.032 14.8969C24.1646 14.8882 24.2883 14.8271 24.3759 14.7272C24.4635 14.6272 24.5078 14.4966 24.4991 14.364ZM3.70771 14.43H1.56991C1.43702 14.43 1.30957 14.4828 1.2156 14.5768C1.12164 14.6707 1.06885 14.7982 1.06885 14.9311C1.06885 15.064 1.12164 15.1914 1.2156 15.2854C1.30957 15.3793 1.43702 15.4321 1.56991 15.4321H3.70771C3.8406 15.4321 3.96805 15.3793 4.06202 15.2854C4.15598 15.1914 4.20877 15.064 4.20877 14.9311C4.20877 14.7982 4.15598 14.6707 4.06202 14.5768C3.96805 14.4828 3.8406 14.43 3.70771 14.43ZM30.4299 14.43H28.2921C28.1592 14.43 28.0318 14.4828 27.9378 14.5768C27.8438 14.6707 27.7911 14.7982 27.7911 14.9311C27.7911 15.064 27.8438 15.1914 27.9378 15.2854C28.0318 15.3793 28.1592 15.4321 28.2921 15.4321H30.4299C30.5628 15.4321 30.6903 15.3793 30.7842 15.2854C30.8782 15.1914 30.931 15.064 30.931 14.9311C30.931 14.7982 30.8782 14.6707 30.7842 14.5768C30.6903 14.4828 30.5628 14.43 30.4299 14.43ZM15.9999 0C15.867 0 15.7396 0.0527902 15.6456 0.146757C15.5516 0.240724 15.4989 0.368171 15.4989 0.501061V2.63886C15.4989 2.77175 15.5516 2.8992 15.6456 2.99317C15.7396 3.08714 15.867 3.13993 15.9999 3.13993C16.1328 3.13993 16.2602 3.08714 16.3542 2.99317C16.4482 2.8992 16.501 2.77175 16.501 2.63886V0.501061C16.501 0.368171 16.4482 0.240724 16.3542 0.146757C16.2602 0.0527902 16.1328 0 15.9999 0V0ZM7.66226 5.88485L6.15064 4.37323C6.10413 4.32669 6.0489 4.28977 5.98811 4.26458C5.92732 4.23939 5.86216 4.22642 5.79636 4.22642C5.73056 4.22642 5.6654 4.23939 5.60461 4.26458C5.54382 4.28977 5.48859 4.32669 5.44208 4.37323C5.39555 4.41976 5.35864 4.47499 5.33346 4.53578C5.30828 4.59656 5.29532 4.66172 5.29532 4.72751C5.29532 4.79331 5.30828 4.85846 5.33346 4.91925C5.35864 4.98004 5.39555 5.03527 5.44208 5.08179L6.9537 6.59341C7.05151 6.69129 7.17976 6.74016 7.30795 6.74016C7.43613 6.74016 7.56438 6.69129 7.6622 6.59341C7.70874 6.5469 7.74566 6.49167 7.77085 6.43088C7.79604 6.3701 7.80901 6.30494 7.80901 6.23915C7.80902 6.17335 7.79606 6.10819 7.77088 6.0474C7.7457 5.98661 7.70879 5.93138 7.66226 5.88485ZM26.5577 24.7803L25.0461 23.2687C24.9996 23.2222 24.9444 23.1853 24.8836 23.1601C24.8228 23.1349 24.7576 23.1219 24.6918 23.1219C24.626 23.1219 24.5609 23.1349 24.5001 23.1601C24.4393 23.1853 24.3841 23.2222 24.3376 23.2687C24.291 23.3152 24.2541 23.3705 24.2289 23.4313C24.2038 23.4921 24.1908 23.5572 24.1908 23.623C24.1908 23.6888 24.2038 23.754 24.2289 23.8147C24.2541 23.8755 24.291 23.9308 24.3376 23.9773L25.8492 25.4889C25.947 25.5868 26.0752 25.6357 26.2034 25.6357C26.3316 25.6357 26.4599 25.5868 26.5577 25.4889C26.6042 25.4424 26.6411 25.3872 26.6663 25.3264C26.6915 25.2656 26.7045 25.2004 26.7045 25.1346C26.7045 25.0688 26.6915 25.0037 26.6664 24.9429C26.6412 24.8821 26.6043 24.8269 26.5577 24.7803ZM26.5577 4.37323C26.5112 4.32669 26.456 4.28977 26.3952 4.26458C26.3344 4.23939 26.2693 4.22642 26.2035 4.22642C26.1377 4.22642 26.0725 4.23939 26.0117 4.26458C25.9509 4.28977 25.8957 4.32669 25.8492 4.37323L24.3376 5.88485C24.291 5.93138 24.2541 5.98661 24.2289 6.0474C24.2038 6.10818 24.1908 6.17334 24.1908 6.23913C24.1908 6.30493 24.2038 6.37008 24.2289 6.43087C24.2541 6.49166 24.291 6.54689 24.3376 6.59341C24.4354 6.69129 24.5636 6.74016 24.6918 6.74016C24.82 6.74016 24.9483 6.69129 25.0461 6.59341L26.5577 5.08179C26.6042 5.03528 26.6411 4.98005 26.6663 4.91926C26.6915 4.85848 26.7045 4.79333 26.7045 4.72753C26.7045 4.66173 26.6915 4.59657 26.6664 4.53578C26.6412 4.47499 26.6043 4.41976 26.5577 4.37323ZM7.66226 23.2687C7.61574 23.2222 7.56051 23.1853 7.49973 23.1601C7.43894 23.1349 7.37378 23.1219 7.30798 23.1219C7.24218 23.1219 7.17702 23.1349 7.11623 23.1601C7.05544 23.1853 7.00021 23.2222 6.9537 23.2687L5.44208 24.7803C5.39555 24.8269 5.35864 24.8821 5.33346 24.9429C5.30828 25.0037 5.29532 25.0688 5.29532 25.1346C5.29532 25.2004 5.30828 25.2656 5.33346 25.3264C5.35864 25.3871 5.39555 25.4424 5.44208 25.4889C5.53989 25.5868 5.66814 25.6357 5.79633 25.6357C5.92452 25.6357 6.05276 25.5868 6.15058 25.4889L7.6622 23.9773C7.70874 23.9308 7.74566 23.8755 7.77085 23.8148C7.79604 23.754 7.80901 23.6888 7.80901 23.623C7.80902 23.5572 7.79606 23.4921 7.77088 23.4313C7.7457 23.3705 7.70879 23.3152 7.66226 23.2687ZM5.10627 19.4433C5.05542 19.3205 4.95788 19.223 4.83512 19.1721C4.71235 19.1213 4.57442 19.1213 4.45165 19.1721L3.46415 19.5812C3.40289 19.606 3.34716 19.6428 3.30016 19.6892C3.25316 19.7357 3.21582 19.7911 3.1903 19.8521C3.16478 19.913 3.15158 19.9785 3.15146 20.0446C3.15135 20.1107 3.16431 20.1762 3.18961 20.2372C3.21491 20.2983 3.25204 20.3538 3.29887 20.4004C3.3457 20.4471 3.4013 20.484 3.46247 20.5091C3.52364 20.5342 3.58916 20.5469 3.65527 20.5465C3.72138 20.5462 3.78676 20.5327 3.84765 20.507L4.83514 20.0979C4.89593 20.0727 4.95116 20.0358 4.99769 19.9893C5.04421 19.9428 5.08111 19.8876 5.10629 19.8268C5.13147 19.766 5.14442 19.7008 5.14442 19.635C5.14442 19.5692 5.13145 19.5041 5.10627 19.4433ZM28.8069 9.62628C28.756 9.50352 28.6585 9.40599 28.5357 9.35514C28.4129 9.30429 28.275 9.30427 28.1522 9.35509L27.1647 9.76415C27.104 9.78933 27.0487 9.82624 27.0022 9.87277C26.9557 9.91929 26.9188 9.97453 26.8936 10.0353C26.8684 10.0961 26.8554 10.1613 26.8554 10.2271C26.8554 10.2929 26.8684 10.358 26.8936 10.4188C26.9188 10.4796 26.9557 10.5348 27.0022 10.5814C27.0487 10.6279 27.104 10.6648 27.1648 10.69C27.2255 10.7151 27.2907 10.7281 27.3565 10.7281C27.4223 10.7281 27.4875 10.7151 27.5482 10.69L28.5357 10.2809C28.5965 10.2557 28.6518 10.2188 28.6983 10.1723C28.7448 10.1258 28.7817 10.0705 28.8069 10.0097C28.8321 9.94895 28.845 9.8838 28.845 9.81801C28.845 9.75221 28.832 9.68706 28.8069 9.62628ZM11.7587 3.3828L11.3497 2.3953C11.2979 2.27385 11.2004 2.17772 11.0781 2.1278C10.9559 2.07789 10.8189 2.07823 10.697 2.12874C10.575 2.17926 10.4779 2.27587 10.4268 2.39758C10.3756 2.51929 10.3746 2.65627 10.4239 2.77874L10.8329 3.76624C10.8838 3.88899 10.9814 3.98652 11.1041 4.03738C11.2269 4.08823 11.3648 4.08825 11.4876 4.03742C11.5484 4.01224 11.6036 3.97534 11.6502 3.92881C11.6967 3.88229 11.7336 3.82705 11.7588 3.76627C11.7839 3.70548 11.7969 3.64033 11.7969 3.57453C11.7969 3.50873 11.7839 3.44358 11.7587 3.3828ZM4.83508 9.76409L3.84759 9.35503C3.78666 9.32907 3.72119 9.31545 3.65497 9.31496C3.58875 9.31446 3.52309 9.3271 3.46178 9.35214C3.40047 9.37717 3.34473 9.41412 3.29779 9.46083C3.25085 9.50754 3.21363 9.56309 3.18829 9.62428C3.16295 9.68546 3.14999 9.75106 3.15016 9.81729C3.15033 9.88351 3.16362 9.94904 3.18928 10.0101C3.21493 10.0711 3.25243 10.1265 3.29961 10.173C3.34679 10.2195 3.40272 10.2561 3.46415 10.2808L4.45165 10.6899C4.57444 10.7407 4.71238 10.7407 4.83514 10.6898C4.95791 10.6389 5.05545 10.5414 5.10633 10.4186C5.1315 10.3579 5.14445 10.2927 5.14444 10.2269C5.14443 10.1611 5.13146 10.096 5.10628 10.0352C5.08109 9.97441 5.04417 9.91918 4.99764 9.87267C4.95111 9.82615 4.89587 9.78925 4.83508 9.76409ZM28.5357 19.5812L27.5482 19.1721C27.4874 19.1469 27.4223 19.134 27.3565 19.134C27.2907 19.134 27.2255 19.147 27.1647 19.1721C27.104 19.1973 27.0487 19.2342 27.0022 19.2808C26.9557 19.3273 26.9188 19.3826 26.8936 19.4434C26.8684 19.5042 26.8555 19.5693 26.8555 19.6351C26.8555 19.7009 26.8684 19.7661 26.8936 19.8268C26.9188 19.8876 26.9557 19.9429 27.0022 19.9894C27.0488 20.0359 27.104 20.0728 27.1648 20.098L28.1523 20.507C28.213 20.5323 28.2781 20.5453 28.3439 20.5453C28.443 20.5453 28.5399 20.5159 28.6224 20.4608C28.7048 20.4057 28.769 20.3275 28.807 20.2359C28.8578 20.1131 28.8578 19.9751 28.8069 19.8524C28.756 19.7296 28.6585 19.6321 28.5357 19.5812ZM21.3047 2.12405C21.2439 2.09887 21.1788 2.08591 21.113 2.08591C21.0472 2.08591 20.982 2.09887 20.9212 2.12406C20.8604 2.14924 20.8052 2.18615 20.7587 2.23268C20.7122 2.27921 20.6753 2.33445 20.6501 2.39524L20.241 3.38274C20.1902 3.50552 20.1902 3.64346 20.241 3.76623C20.2919 3.88901 20.3895 3.98654 20.5122 4.03739C20.635 4.08824 20.773 4.08823 20.8957 4.03737C21.0185 3.9865 21.116 3.88895 21.1669 3.76617L21.576 2.77868C21.6267 2.65589 21.6267 2.51797 21.5758 2.39522C21.525 2.27247 21.4274 2.17493 21.3047 2.12405Z" fill="white"/>
      </svg>
    );
    const watchLater  = () => (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6252 21.6253L22.6879 19.8747L16.6879 16.2493V9.31199H14.6879V17.312L21.6252 21.6253ZM15.9999 2.68799C19.6665 2.68799 22.8021 3.99021 25.4065 6.59466C28.011 9.1991 29.3132 12.3347 29.3132 16.0013C29.3132 19.668 28.011 22.8035 25.4065 25.408C22.8021 28.0124 19.6665 29.3147 15.9999 29.3147C12.3332 29.3147 9.19763 28.0124 6.59319 25.408C3.98875 22.8035 2.68652 19.668 2.68652 16.0013C2.68652 12.3347 3.98875 9.1991 6.59319 6.59466C9.19763 3.99021 12.3332 2.68799 15.9999 2.68799Z" fill="white"/>
</svg>
    );
    const CautionIcon = () => <Icon component={ caution } />;
    const LampIcon = () => <Icon component={ lamp } />;
    const WatchLaterIcon = () => <Icon component={ watchLater } />;
  const DownloadMp4 = () => <Icon component={ DownloadMp4Svg } />;
  const DownloadSrt = () => <Icon component={ DownloadSrtSvg } />;
  const TimeIcon  = () => (<Icon component={ TimeSvg } />);
  const StarIcon  = () => (<Icon component={ StarSvg } />);
  const IconPlay = () => <Icon component={ PlaySvg } />;

  

export default IconPlay;
export {IconPlay,TimeIcon,StarIcon,DownloadMp4,DownloadSrt,CautionIcon,LampIcon,WatchLaterIcon};