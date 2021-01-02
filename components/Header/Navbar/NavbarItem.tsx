// REDUX
import { useDispatch } from 'react-redux'

// UTILS
import { internalPushByIndex } from '@/utils/internalRouting'

// STYLE
import styles from 'styled-components'

interface NavBarItemProps {
    label: string,
    index: number,
    isActive: boolean
}
function NavbarItem(props: NavBarItemProps) {
    const { label, index, isActive } = props

    const Component = isActive ? ActiveItem : Item

    const dispatch = useDispatch()

    return (
        <Component onClick={internalPushByIndex.bind(null, dispatch, index)}>
            {label}
        </Component>
    )
}

const Item = styles.li`
    background-color: white;
    padding: 10px;

    cursor: pointer;
`

const ActiveItem = styles(Item)`
    background-color: yellow;
`

export default NavbarItem