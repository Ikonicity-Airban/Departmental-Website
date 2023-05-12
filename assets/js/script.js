const header = document.querySelector('header');
const header_section = document.querySelector('.header')
const scroller = document.querySelector('div')
const navEl = document.querySelector('[data-nav]')
const navBotton = document.querySelector('[data-toggle-nav]')
// const toggleModeBtn = document.querySelector('.toggle-mode')


const sticky = 'is-sticky'
const bg_change = 'bg-change'

document.addEventListener('scroll', (e) => {
    // makes the header to become sticky
    const offset = window.pageYOffset
    offset > header.getBoundingClientRect().height - 10/*  + document.querySelector('footer').clientHeight + 50  */ ?
        header.classList.add(sticky) : header.classList.remove(sticky)
    header_section && offset > header_section.getBoundingClientRect().height - 30 ?
        header.classList.add(bg_change) : header.classList.remove(bg_change)

})

scroller.onclick = function () {
    window.scrollTo(0, 0)
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark')
} else {
    document.body.classList.remove('dark')
}


// Whenever the user explicitly chooses light mode
function toggleMode() {
    localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light'
    location.reload()
}

const goBack = () => history.back()// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')

// tailwind.config = {
//     theme: {
//         screens: {
//             sm: '480px',
//             md: '768px',
//             lg: '976px',
//             xl: '1440px',
//         },
//         colors: {
//             gray: colors.coolGray,
//             blue: colors.lightBlue,
//             red: colors.rose,
//             pink: colors.fuchsia,
//             primary: "#5e06f7",
//             "black": "#333",
//             "white": "#fff",
//             "bg-color": "#817ff8",
//             "off-white-bg": "rgb(236, 236, 236)",
//         },
//         fontFamily: {
//             san: ["Montserrat", "sans-serif"],
//             serif: ['Vollkorn', 'serif'],
//             // heading: ['Mon']
//         },
//         extend: {
//             spacing: {
//                 '128': '32rem',
//                 '144': '36rem',
//             },
//             borderRadius: {
//                 '4xl': '2rem',
//             }
//         }
//     }
// }

if (navBotton) navBotton.onclick = function () {
    navEl.classList.toggle('h-0')
    navEl.classList.toggle('show')
}

document.onscroll = () => {
    // console.log('hello');
    if (navEl.classList.contains('show')) {
        console.log(true);
        navEl.classList.toggle('show')
        navEl.classList.toggle('h-0')
    }
}