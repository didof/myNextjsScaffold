// HOC
import withDisplay from '@/HOC/withDisplay'

// REDUX
import { useDispatch } from 'react-redux'
import { toggle } from '@/lib/slices/sideDrawSlice'

// CONTRACT
import TopItemContract from './TopItemContract'

// STYLE
import { IButton } from '@/styles/Button'

function Hamburger(props: TopItemContract) {

    const dispatch = useDispatch()
    function handleToggleSideDraw() {
        dispatch(toggle())
    }

    return (
        <IButton
            onClick={handleToggleSideDraw}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        />
    )
}

export default withDisplay(Hamburger)
