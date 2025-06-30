import darkBgImg from "./assets/images/dark.jpg";
import lightBgImg from "./assets/images/light.jpg";

import { mix } from 'polished';

const darkBaseColor = '#121212';

const dark = (level = 0, color = '#fff') =>
    mix(level / 100, color, darkBaseColor);

const baseTheme = {
    transition: '.2s cubic-bezier(0.4, 0, 0.2, 1)',
};

const darkBg = `url(${darkBgImg})`;
const lightBg = `url(${lightBgImg})`;

const white = '#FFFFFF';
const gray = "#F8F8F9";
const lightGrey = "#e3e3e3";
const orange = "#f27a00";
const darkBlue = "#021c2d";
const lightBlue = "#c9dff4";
const lighterBlue = "#eef7fc";
const purple = "#535495";

const themeLight = {
    ...baseTheme,
    isDark: false,
    background: lightBg,
    header: lightBg,
    aside: {
        background: lighterBlue,
        boxShadow: '0px 0px 5px 0px #a8a8a8'
    },
    highlight: gray,
    body: darkBlue,
    nav: {
        background: lighterBlue,
        text: darkBlue,
        link: `${darkBlue}!important`,
        linkHover: purple,
        url: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"
    },
    article: {
        background: white,
        boxShadow: 'none',
        color: darkBlue,
        mark: '#badeec',
        imgBorder: '7px solid #badeec'
    },
    table: {
        color: darkBlue
    },
    blogPost: {
        background: white,
        color: darkBlue
    },
    text: {
        active: 'rgba(0, 0, 0, 0.87)',
        helper: 'rgba(0, 0, 0, 0.60)',
        disabled: 'rgba(0, 0, 0, 0.38)',
    },
    rgba: opacity => `rgba(0, 0, 0, ${opacity})`,
    topBar: {
        bg: white,
    },
    card: {
        bg: white,
        bgHover: 'rgba(0, 0, 0, 0.04)',
        title: 'rgba(0, 0, 0, 0.87)',
        divider: '#e8e8e8',
        border: '1px solid rgba(0,0,0,.125)'
    },
    cards: {
        background: white
    },
    icon: {
        color: '#aaa',
        hoverColor: '#777',
    },
    error: {
        bg: '#ffa000',
    },
    footer: {
        background: lighterBlue,
        text: darkBlue,
        link: darkBlue,
        linkHover: '#777',
        email: '#1976D2',
        heart: '🖤',
    },
    select: {
        bg: '#EBECF0',
        bgHover: '#EBECF0',
        text: 'rgba(0, 0, 0, 0.87)',
        label: 'rgba(0, 0, 0, 0.60)',
        indicator: 'rgba(0, 0, 0, 0.60)',
        indicatorHover: 'rgba(0, 0, 0, 0.87)',
        menu: '#fff',
        menuFocus: '#EEEEEE',
        menuSelected: '#DFE0DF',
    },
    loader: {
        stop1: 'rgba(0,0,0,0.03)',
        stop2: 'rgba(0,0,0,0.07)',
        stop3: 'rgba(0,0,0,0.03)',
        fallback: '#f6f7f8',
    },
    emptyState: {
        bg: '#fafbfc',
        border: '#e1e4e8',
        icon: '#a3aab1',
        title: 'rgba(0, 0, 0, 0.87)',
        text: 'rgba(0, 0, 0, 0.60)',
    },
    image: {
        grayscale: 'grayscale(20%)'
    }
};

const themeDark = {
    ...baseTheme,
    isDark: true,
    background: darkBg,
    highlight: gray,
    body: darkBlue,
    header: darkBg,
    aside: {
        background: darkBlue,
        boxShadow: 'none'
    },
    article: {
        background: darkBlue,
        boxShadow: `inset 0px 0px 4px 1px ${darkBlue}`,
        color: lightBlue,
        mark: purple,
        imgBorder: `7px solid ${orange}`
    },
    blogPost: {
        background: darkBlue,
        color: lightGrey
    },
    table: {
        color: lightGrey
    },
    nav: {
        text: '#aaa',
        link: '#aaa',
        linkHover: '#777',
        url: "url(data: image/ svg + xml,% 3csvg xmlns = 'http://www.w3.org/2000/svg' width = '30' height = '30' viewBox = '0 0 30 30' % 3e % 3cpath stroke = 'rgba(255, 255, 255, 0.5)' stroke - linecap='round' stroke - miterlimit='10' stroke - width='2' d = 'M4 7h22M4 15h22M4 23h22' /% 3e % 3c / svg % 3e)"
    },
    text: {
        active: 'rgba(255, 255, 255, 0.87)',
        helper: 'rgba(255, 255, 255, 0.60)',
        disabled: 'rgba(255, 255, 255, 0.38)',
    },
    rgba: opacity => `rgba(255, 255, 255, ${opacity})`,
    topBar: {
        bg: dark(9),
    },
    card: {
        title: '#fff',
        divider: dark(12),
        border: `1px solid ${white}`
    },
    cards: {
        background: darkBlue
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.38)',
        hoverColor: 'rgba(255, 255, 255, 0.87)',
    },
    error: {
        bg: dark(24, '#ffa000'),
    },
    footer: {
        background: purple,
        text: 'rgba(255, 255, 255, 0.87)',
        link: 'rgba(255, 255, 255, 0.60)',
        linkHover: '#fff',
        email: '#90CAF9',
        heart: '🤍',
    },
    select: {
        bg: 'rgba(255, 255, 255, 0.05)',
        bgHover: 'rgba(255, 255, 255, 0.12)',
        text: 'rgba(255, 255, 255, 0.87)',
        label: 'rgba(255, 255, 255, 0.38)',
        indicator: 'rgba(255, 255, 255, 0.60)',
        indicatorHover: 'rgba(255, 255, 255, 0.87)',
        menu: '#424242',
        menuFocus: '#585858',
        menuSelected: '#6C6C6C',
    },
    loader: {
        stop1: 'rgba(255,255,255,0.03)',
        stop2: 'rgba(255,255,255,0.07)',
        stop3: 'rgba(255,255,255,0.03)',
        fallback: dark(14),
    },
    emptyState: {
        bg: dark(5),
        border: 'transparent',
        icon: 'rgba(255, 255, 255, 0.60)',
        title: 'rgba(255, 255, 255, 0.87)',
        text: 'rgba(255, 255, 255, 0.60)',
    },
    image: {
        filter: 'grayscale(100%)'
    }
};

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;