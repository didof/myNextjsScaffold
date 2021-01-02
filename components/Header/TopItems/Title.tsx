// CONTRACT
import TopItemContract from './TopItemContract'

// HOC
import withDisplay from '@/HOC/withDisplay'

function Title(props: TopItemContract) {
    
    return (
        <div>
            title
        </div>
    )
}

export default withDisplay(Title)
