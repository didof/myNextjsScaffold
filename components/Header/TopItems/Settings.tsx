// CONTRACT
import TopItemContract from './TopItemContract'

// HOC
import withDisplay from '@/HOC/withDisplay'

// STYLE
import { IButton } from '@/styles/Button'


function Settings(props: TopItemContract) {

    return <IButton />
}

export default withDisplay(Settings)

// TODO receive as prop an icon
