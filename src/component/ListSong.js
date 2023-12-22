import React from 'react';

const ListSong = () => {
    return (
        <div className='col-span-2 p-3'>
            <table className='table-auto w-full ' >
                <thead>
                    <tr key="" className='text-white'>
                        <th className='w-[10%]'>#</th>
                        <th className='text-left'>Title</th>
                        <th  className='w-[10%]'>Author</th>
                        <th  className='w-[10%]' ><i className='fa fa fa-download'></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="">
                        <td className='text-center'>2</td>
                        <td>2</td>
                        <td  className='text-center'>2</td>
                        <td  className='text-center'>2</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default ListSong;
