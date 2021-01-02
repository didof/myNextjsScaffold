// CONTRACT
import TopItemContract from './TopItemContract'

// HOC
import withDisplay from '@/HOC/withDisplay'

// REDUX
import { useDispatch } from 'react-redux'

// UTILS
import { internalPushByUrl } from '@/utils/internalRouting'

// STYLE
import { IButton } from '@/styles/Button'

function Settings(props: TopItemContract) {
    const dispatch = useDispatch()

    return <IButton onClick={internalPushByUrl.bind(null, dispatch, '/profile/settings')} />
}

export default withDisplay(Settings)

// TODO receive as prop an icon
