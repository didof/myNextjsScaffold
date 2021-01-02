// HOC
import withDisplay from '@/HOC/withDisplay'

// REDUX
import { useDispatch } from 'react-redux'
import { toggle } from '@/lib/slices/sideDrawSlice'

// CONTRACT
import TopItemContract from './TopItemContract'

// STYLE
import { Button } from '@/styles/Button'


function Hamburger(props: TopItemContract) {

    const dispatch = useDispatch()
    function handleToggleSideDraw() {
        dispatch(toggle())
    }

    return (
        <Button
            onClick={handleToggleSideDraw}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
        >
        
        </Button>
    )
}

export default withDisplay(Hamburger)
