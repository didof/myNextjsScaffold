export interface NavbarItemConfig {
    disabled: boolean,
    label: String,
    url: String,
}

const homeItemConfig: NavbarItemConfig = {
    disabled: false,
    label: 'home',
    url: '/'
}

const infoItemConfig: NavbarItemConfig = {
    disabled: false,
    label: 'info',
    url: '/info'
}

const navbarConfig: NavbarItemConfig[] = [
    homeItemConfig,
    infoItemConfig
]

export default navbarConfig