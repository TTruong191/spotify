import React, { useContext, useEffect, useState } from 'react';
import { Songs } from '../Context';
const ListSong = () => {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idsong, setIdSong] = useState(0);
    const handlePlaySong = (idsong) => {
        setIdSong(idsong)
        handleSetSong(idsong)
    };
    useEffect(() =>{
        setIdSong(song.id)
    },[song])
    return (
        <div className='col-span-2 p-3 overflow-y-scroll'>
            <table className='table-auto w-full ' >
                <thead>
                    <tr key="" className='text-white'>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th className='w-[10%]'>Author</th>
                        <th className='w-[10%]' ><i className='fa fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody >
                    {
                        DataSongs.map((song, index) => (
                            <tr key={index} className={`bg-slate-800 h-10 text-gray-400 hover:bg-slate-600 
                                 ${idsong === song.id && 'text-teal-400'}`}
                                onClick={() => handlePlaySong(song.id)} >
                                <td className='text-center'>{index + 1}</td>
                                <td>{song.name}</td>
                                <td className='text-center'>{song.author}</td>
                                <td className='text-center'><a href={song.url}><i className='fa fa-download'></i></a></td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    );
}

export default ListSong;
