import React from 'react';
import Data from './data';


export default function Cardapp() {
    return (
        <>
    <h1 className='md-auto text-center text-3xl font-bold text-gray-800 mb-6'>Employee Data</h1>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
                        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">


                    {Data.map((item) => (
                        <div className="bg-white rounded-2xl shadow-md p-6" key={item.id}>
                             <p><img src={item.photo} alt="photo" /> </p>
                            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-gray-600">Age: {item.age}</p>
                            <p class="text-gray-600">Salary: ${item.salary.toLocaleString()}</p>
                        </div>
                    ))}


                    

                </div>
            </div>
        </>
    )
}