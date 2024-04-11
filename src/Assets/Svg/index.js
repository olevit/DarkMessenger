import React from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle, Defs, Ellipse, G, Line, LinearGradient, Mask, Path, Rect, Stop } from 'react-native-svg';

export const Logo = ({width = 200, height = 200, color = "white", ...props}) => (
  <Svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M118.75 18.75H31.25C27.7982 18.75 25 21.5482 25 25V63.5303C25 109.665 64.2135 127.197 73.1863 130.605C74.3752 131.057 75.6248 131.057 76.8137 130.605C85.7865 127.197 125 109.665 125 63.5303V25C125 21.5482 122.202 18.75 118.75 18.75Z" stroke="#3EB489" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M81.25 93.75C81.25 97.2018 78.4518 100 75 100C71.5482 100 68.75 97.2018 68.75 93.75C68.75 90.2982 71.5482 87.5 75 87.5C78.4518 87.5 81.25 90.2982 81.25 93.75Z" fill="#3EB489"/>
    <Path d="M75 75L75 43.75" stroke="#3EB489" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const ArrowLeft = () => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M16.9999 7.08337L7.08325 17M7.08325 17L16.9999 26.9167M7.08325 17H26.9166" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const LockIcon = () => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M11.3333 15.5833V11.1759C11.3333 9.71478 11.9304 8.31348 12.9931 7.28029C14.0558 6.2471 15.4971 5.66666 17 5.66666C18.5029 5.66666 19.9442 6.2471 21.0069 7.28029C22.0696 8.31348 22.6667 9.71478 22.6667 11.1759V15.5833" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M7.08333 17C7.08333 16.2176 7.71759 15.5833 8.5 15.5833H25.5C26.2824 15.5833 26.9167 16.2176 26.9167 17V28.3333C26.9167 29.1157 26.2824 29.75 25.5 29.75H8.5C7.71759 29.75 7.08333 29.1157 7.08333 28.3333V17Z" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const StopIcon = () => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M12.3009 4.25H21.6991C22.0749 4.25 22.4352 4.39926 22.7009 4.66493L29.3351 11.2991C29.6008 11.5648 29.75 11.9251 29.75 12.3009V21.6991C29.75 22.0749 29.6008 22.4352 29.3351 22.7009L22.7009 29.3351C22.4352 29.6007 22.0749 29.75 21.6991 29.75H12.3009C11.9251 29.75 11.5648 29.6007 11.2991 29.3351L4.66494 22.7009C4.39926 22.4352 4.25001 22.0748 4.25001 21.6991V12.3009C4.25001 11.9251 4.39926 11.5648 4.66494 11.2991L11.2991 4.66493C11.5648 4.39926 11.9251 4.25 12.3009 4.25Z" stroke="white" strokeWidth={1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M8.14583 8.14583L25.8542 25.8542" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const ChatIcon = () => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M14.1667 19.1249L19.8333 13.4583" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M14.1667 13.4584L19.8333 19.125" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M29.75 22.6667C29.75 23.4181 29.4515 24.1388 28.9201 24.6701C28.3888 25.2015 27.6681 25.5 26.9167 25.5H9.91667L4.25 29.75V9.91666C4.25 9.16521 4.54851 8.44455 5.07986 7.91319C5.61122 7.38184 6.33189 7.08333 7.08333 7.08333H26.9167C27.6681 7.08333 28.3888 7.38184 28.9201 7.91319C29.4515 8.44455 29.75 9.16521 29.75 9.91666V22.6667Z" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const AppleIcon = () => (
  <Svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M18.9673 17.924C18.6195 18.7275 18.2078 19.4672 17.7308 20.1472C17.0805 21.0743 16.5481 21.716 16.1378 22.0724C15.5018 22.6573 14.8204 22.9568 14.0906 22.9739C13.5667 22.9739 12.935 22.8248 12.1996 22.5224C11.4617 22.2214 10.7837 22.0724 10.1637 22.0724C9.51348 22.0724 8.81611 22.2214 8.0702 22.5224C7.32315 22.8248 6.72133 22.9824 6.2612 22.998C5.56143 23.0278 4.86393 22.7197 4.1677 22.0724C3.72333 21.6848 3.16752 21.0204 2.50167 20.0791C1.78727 19.0739 1.19994 17.9084 0.739811 16.5795C0.24703 15.1442 0 13.7543 0 12.4087C0 10.8673 0.333064 9.53789 1.00019 8.42385C1.52448 7.529 2.22199 6.82312 3.09497 6.30493C3.96795 5.78674 4.9112 5.52267 5.92701 5.50578C6.48282 5.50578 7.2117 5.6777 8.11748 6.01559C9.02069 6.35462 9.60065 6.52655 9.85492 6.52655C10.045 6.52655 10.6893 6.32552 11.7815 5.92473C12.8143 5.55305 13.686 5.39916 14.4001 5.45978C16.3352 5.61595 17.789 6.37876 18.7558 7.75303C17.0252 8.80163 16.1691 10.2703 16.1861 12.1544C16.2017 13.622 16.7341 14.8432 17.7804 15.8129C18.2546 16.2629 18.7842 16.6107 19.3734 16.8578C19.2456 17.2283 19.1107 17.5832 18.9673 17.924ZM14.5293 0.460131C14.5293 1.61039 14.1091 2.68439 13.2714 3.67847C12.2606 4.86023 11.038 5.54311 9.71209 5.43536C9.6952 5.29736 9.6854 5.15213 9.6854 4.99951C9.6854 3.89526 10.1661 2.71349 11.0198 1.74724C11.446 1.25801 11.988 0.851218 12.6454 0.526714C13.3013 0.207053 13.9217 0.0302728 14.5052 0C14.5222 0.153772 14.5293 0.307554 14.5293 0.460116V0.460131Z" fill="black"/>
  </Svg>
);

export const GoogleIcon = () => (
  <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fillRule="evenodd" clipRule="evenodd" d="M22.54 11.7614C22.54 10.9459 22.4668 10.1618 22.3309 9.40909H11.5V13.8575H17.6891C17.4225 15.295 16.6123 16.513 15.3943 17.3284V20.2139H19.1109C21.2855 18.2118 22.54 15.2636 22.54 11.7614Z" fill="#4285F4"/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M11.5 22.9998C14.605 22.9998 17.2081 21.9701 19.1109 20.2137L15.3943 17.3283C14.3645 18.0183 13.0472 18.426 11.5 18.426C8.50474 18.426 5.96951 16.403 5.06519 13.6848H1.22314V16.6644C3.11542 20.4228 7.00451 22.9998 11.5 22.9998Z" fill="#34A853"/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M5.06523 13.6851C4.83523 12.9951 4.70455 12.258 4.70455 11.5001C4.70455 10.7421 4.83523 10.0051 5.06523 9.31506V6.33551H1.22318C0.444318 7.88801 0 9.64437 0 11.5001C0 13.3557 0.444318 15.1121 1.22318 16.6646L5.06523 13.6851Z" fill="#FBBC05"/>
    <Path fillRule="evenodd" clipRule="evenodd" d="M11.5 4.57386C13.1884 4.57386 14.7043 5.15409 15.8961 6.29364L19.1945 2.99523C17.2029 1.13955 14.5997 0 11.5 0C7.00451 0 3.11542 2.57705 1.22314 6.33545L5.06519 9.315C5.96951 6.59682 8.50474 4.57386 11.5 4.57386Z" fill="#EA4335"/>
</Svg>
);

export const LabelIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M15.5316 6H5C4.44772 6 4 6.44772 4 7V17C4 17.5523 4.44772 18 5 18H15.5316C15.8284 18 16.1099 17.8682 16.2998 17.6402L20.4665 12.6402C20.7756 12.2693 20.7756 11.7307 20.4665 11.3598L16.2998 6.35982C16.1099 6.13182 15.8284 6 15.5316 6Z" fill="#3EB489" stroke="#3EB489" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const SearchIcon = () => (
  <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M12 12L18 18" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const NotebookIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M19 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4Z" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 11H16" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 8H16" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecapp="round" strokeLinejoin="round"/>
    <Path d="M8 20L8 4" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecapp="round" strokeLinejoin="round"/>
  </Svg>
);

export const ChatChatsIcon = ({ color = "white" }) => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M22.6666 11.3333H28.3333C29.1157 11.3333 29.7499 11.9676 29.7499 12.75V28.3333L25.0278 24.4103C24.7734 24.199 24.4532 24.0833 24.1225 24.0833H12.7499C11.9675 24.0833 11.3333 23.4491 11.3333 22.6667V18.4167" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M21.25 5.66666H5.66667C4.88426 5.66666 4.25 6.30092 4.25 7.08332V22.6667L8.97215 18.7436C9.2265 18.5323 9.54676 18.4167 9.87743 18.4167H21.25C22.0324 18.4167 22.6667 17.7824 22.6667 17V7.08332C22.6667 6.30092 22.0324 5.66666 21.25 5.66666Z" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const EditeBoxIcon = ({ color = "white" }) => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M15.5833 7.08334H6.76852C6.10057 7.08334 5.45997 7.34869 4.98766 7.821C4.51534 8.29331 4.25 8.93391 4.25 9.60186V27.2315C4.25 27.8994 4.51534 28.54 4.98766 29.0124C5.45997 29.4847 6.10057 29.75 6.76852 29.75H24.3981C25.0661 29.75 25.7067 29.4847 26.179 29.0124C26.6513 28.54 26.9167 27.8994 26.9167 27.2315V18.4167" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M25.0271 5.06031C25.5459 4.54148 26.2496 4.25 26.9833 4.25C27.7171 4.25 28.4208 4.54148 28.9396 5.06031C29.4584 5.57914 29.7499 6.28283 29.7499 7.01657C29.7499 7.75031 29.4584 8.454 28.9396 8.97283L16.5499 21.3625L11.3333 22.6667L12.6374 17.45L25.0271 5.06031Z" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const SettingsIcon = ({ color = "white" }) => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="17" cy="17" r="4.25" stroke={color} strokeWidth={1.5}/>
    <Path d="M7.16546 7.88175C5.78041 9.37459 4.77468 11.1462 4.18907 13.0442L6.79075 14.5463C8.67964 15.6368 8.67964 18.3632 6.79076 19.4538L4.18652 20.9573C4.47733 21.8959 4.87652 22.8169 5.38854 23.7038C5.90054 24.5906 6.49855 25.3968 7.16595 26.1179L9.77023 24.6143C11.6591 23.5238 14.0202 24.8869 14.0202 27.068V30.0723C15.9568 30.5142 17.9939 30.529 19.9792 30.0759L19.9792 27.0682C19.9792 24.8871 22.3404 23.5239 24.2292 24.6144L26.8341 26.1183C28.2191 24.6255 29.2248 22.8539 29.8104 20.9558L27.2087 19.4537C25.3198 18.3632 25.3198 15.6368 27.2087 14.5462L29.813 13.0426C29.5222 12.1041 29.123 11.1831 28.611 10.2963C28.099 9.40944 27.5009 8.60323 26.8335 7.88209L24.2293 9.38565C22.3404 10.4762 19.9793 9.11302 19.9793 6.93192V3.92773C18.0427 3.48587 16.0056 3.47107 14.0202 3.92414L14.0202 6.93188C14.0202 9.11298 11.6591 10.4762 9.77023 9.38562L7.16546 7.88175Z" stroke={color} strokeWidth={1.5} strokeLinejoin="round"/>
  </Svg>
);

export const UsersIcon = () => (
  <Svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M9.91675 28.3334C9.91675 25.9862 13.0881 24.0834 17.0001 24.0834C20.9121 24.0834 24.0834 25.9862 24.0834 28.3334" stroke="white" strokeWidth={1.5} strokeLinecapp="round" strokeLinejoin="round"/>
    <Path d="M25.5 20.1868C28.0017 20.8426 29.75 22.3404 29.75 24.0831" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M8.5 20.1868C5.9983 20.8426 4.25 22.3404 4.25 24.0831" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M17 19.8334C19.3472 19.8334 21.25 17.9306 21.25 15.5834C21.25 13.2362 19.3472 11.3334 17 11.3334C14.6528 11.3334 12.75 13.2362 12.75 15.5834C12.75 17.9306 14.6528 19.8334 17 19.8334Z" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M25.4999 14.5012C26.3694 13.723 26.9166 12.5921 26.9166 11.3334C26.9166 8.98616 25.0138 7.08337 22.6666 7.08337C21.5781 7.08337 20.5852 7.49258 19.8333 8.16556" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M8.49992 14.5012C7.63044 13.723 7.08325 12.5921 7.08325 11.3334C7.08325 8.98616 8.98604 7.08337 11.3333 7.08337C12.4218 7.08337 13.4147 7.49258 14.1666 8.16556" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const UserIcon = () => (
  <Svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M5.83325 24.994C5.83325 22.4166 9.48959 20.3273 13.9999 20.3273C18.5102 20.3273 22.1666 22.4166 22.1666 24.994" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M14.0001 15.6606C17.2217 15.6606 19.8334 13.049 19.8334 9.82729C19.8334 6.60563 17.2217 3.99396 14.0001 3.99396C10.7784 3.99396 8.16675 6.60563 8.16675 9.82729C8.16675 13.049 10.7784 15.6606 14.0001 15.6606Z" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const UserAddIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M3 21C3 18.7909 6.13401 17 10 17C13.866 17 17 18.7909 17 21" stroke="#3EB489" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M19 17L19 11" stroke="#3EB489" strokeWidth={1.5} strokeLinecap="round" stroke-linejoin="round"/>
    <Path d="M16 14L22 14" stroke="#3EB489" strokeWidth={1.5} strokeLinecap="round" stroke-linejoin="round"/>
    <Path d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z" stroke="#3EB489" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const EditeIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M0 20H4.1661L16.4533 7.71278L12.2872 3.54668L0 15.8339V20ZM2.22192 16.756L12.2872 6.6907L13.3093 7.71278L3.244 17.7781H2.22192V16.756ZM17.0755 0.324894C16.9727 0.221904 16.8506 0.140195 16.7162 0.0844457C16.5818 0.0286961 16.4377 0 16.2922 0C16.1467 0 16.0027 0.0286961 15.8683 0.0844457C15.7339 0.140195 15.6118 0.221904 15.509 0.324894L13.4759 2.35795L17.642 6.52405L19.6751 4.491C19.7781 4.38822 19.8598 4.26613 19.9156 4.13174C19.9713 3.99734 20 3.85327 20 3.70777C20 3.56227 19.9713 3.4182 19.9156 3.2838C19.8598 3.1494 19.7781 3.02732 19.6751 2.92454L17.0755 0.324894Z" fill="#50555C"/>
  </Svg>
);

export const CrossIcon = () => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fillRule="evenodd" clipRule="evenodd" d="M2.53841 0.947303C2.09908 0.507963 1.38676 0.507963 0.947425 0.947303C0.508085 1.38664 0.508085 2.09895 0.947425 2.53829L5.40282 6.99369L0.947425 11.4491C0.508085 11.8884 0.508085 12.6007 0.947425 13.0401C1.38676 13.4794 2.09908 13.4794 2.53841 13.0401L6.99381 8.58468L11.4492 13.0401C11.8885 13.4794 12.6009 13.4794 13.0402 13.0401C13.4795 12.6007 13.4795 11.8884 13.0402 11.4491L8.5848 6.99369L13.0402 2.53829C13.4795 2.09895 13.4795 1.38664 13.0402 0.947303C12.6009 0.507963 11.8885 0.507963 11.4492 0.947303L6.99381 5.4027L2.53841 0.947303Z" fill="#A3A3AA"/>
  </Svg>
);

export const CloseIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M21 21L3 3" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M21.0001 3L3 21.0001" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const UserCircle = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M7 19C7 17.3431 9.23858 16 12 16C14.7614 16 17 17.3431 17 19" stroke="#626465" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#626465" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#626465" strokeWidth={1.5} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const CameraIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M21 17.4444C21 17.857 20.8276 18.2527 20.5207 18.5444C20.2138 18.8361 19.7976 19 19.3636 19H4.63636C4.20237 19 3.78616 18.8361 3.47928 18.5444C3.1724 18.2527 3 17.857 3 17.4444V8.88889C3 8.47633 3.1724 8.08067 3.47928 7.78894C3.78616 7.49722 4.20237 7.33333 4.63636 7.33333H7.90909L9.54545 5H14.4545L16.0909 7.33333H19.3636C19.7976 7.33333 20.2138 7.49722 20.5207 7.78894C20.8276 8.08067 21 8.47633 21 8.88889V17.4444Z" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const AttachmentIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M7 15L7 8C7 5.68629 8.18629 3 11.5 3C14.8137 3 16 5.68629 16 8V18C16 19.2091 15.2091 21 13 21C10.7909 21 10 19.2091 10 18V8C10 6.89543 10.3954 6 11.5 6C12.6046 6 13 6.89543 13 8V18" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const ChevronRight = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M9 5L16 12L9 19" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const MicrophoneIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V6Z" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M19 11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 18V21" stroke="#6E6E6E" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);

export const UploadIcon = () => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M17 8L12 3L7 8" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M12 3V15" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>
);