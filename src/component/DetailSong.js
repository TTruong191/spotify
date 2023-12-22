import React, { useContext } from 'react';
import { Songs } from '../Context';

const DetailSong = () => {
    const {song} = useContext(Songs);
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-cyan-300 font-bold'>Now playing</h2>
            <h2 className='text-gray-400 text-2xl'>{song.name}</h2>
            <div className='flex justify-evenly items-center mt-5  '>
                <img className='w-[16rem]' src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className='flex justify-evenly items-center mt-5'>
                <img className='rounded-full w-[4rem]' src={song.links.images[1].url} alt="avatar" />
                <span className='text-white text-2xl'>{song.author}</span>
            </div>
        </div>
    );
}

export default DetailSong;
