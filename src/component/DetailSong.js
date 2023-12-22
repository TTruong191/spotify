import React from 'react';

const DetailSong = () => {
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-300 font-bold'>Now playing</h2>
            <h2 className='text-gray-300 text-2xl'>Sing me to sleep</h2>
            <div className='flex justify-evenly items-center mt-5  '>
                <img className='w-[16rem]' src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
            </div>
            <div className='flex justify-evenly items-center mt-5'>
                <img className='rounded-full w-[4rem]' src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
                <span className='text-white text-2xl'>Alan Walker</span>
            </div>
        </div>
    );
}

export default DetailSong;
