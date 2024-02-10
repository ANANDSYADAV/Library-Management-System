import { Skeleton } from '@mui/material'

function SkeletonHome() {
    return (
        <div className='flex gap-5'>
            <div className='flex flex-col items-center'>
                <Skeleton variant="rectangular" width={260} height={340} />
                <Skeleton width={260} height={60} />
            </div>
            <div className='flex flex-col items-center'>
                <Skeleton variant="rectangular" width={260} height={340} />
                <Skeleton width={260} height={60} />
            </div>
            <div className='flex flex-col items-center'>
                <Skeleton variant="rectangular" width={260} height={340} />
                <Skeleton width={260} height={60} />
            </div>
            <div className='flex flex-col items-center'>
                <Skeleton variant="rectangular" width={260} height={340} />
                <Skeleton width={260} height={60} />
            </div>
            <div className='flex flex-col items-center'>
                <Skeleton variant="rectangular" width={260} height={340} />
                <Skeleton width={260} height={60} />
            </div>
        </div>
    )
}

export default SkeletonHome