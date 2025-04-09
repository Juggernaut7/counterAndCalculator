import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 100000)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className='flex flex-col gap-5 justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 px-4'>
            <h1 className='text-4xl font-bold'>📊 Counter</h1>
            <h1 className='text-5xl font-semibold text-gray-800'>Count: {count}</h1>

            <div className='flex gap-4'>
                <button className='bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md font-medium' onClick={increase}>Increase</button>
                <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg shadow-md font-medium' onClick={decrease}>Decrease</button>
                <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md font-medium' onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

const InputChnage = () => {
    const [value, setValue] = useState('')
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-white px-4'>
            <h1 className='text-4xl font-bold mb-4'>📝 Live Input</h1>
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder='Type here!'
                className='w-64 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />
            <h1 className='mt-4 text-xl'>You type: <span className='text-blue-600 font-medium'>{value}</span></h1>
        </div>
    )
}

const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const handleNum1Change = (e) => {
        setNum1(e.target.value)
    }
    const handleNum2Change = (e) => {
        setNum2(e.target.value)
    }
    const handleAdd = () => {
        setResult(parseInt(num1) + parseInt(num2))
    }
    const handleSubtract = () => {
        setResult(parseInt(num1) - parseInt(num2))
    }
    const handleMultiply = () => {
        setResult(parseInt(num1) * parseInt(num2))
    }
    const handleDivide = () => {
        setResult(parseInt(num1) / parseInt(num2))
    }
    const handleModulus = () => {
        setResult(parseInt(num1) % parseInt(num2))
    }
    const reset = () => {
        setNum1(0)
        setNum2(0)
        setResult(0)
    }

    return (
        <div className='flex flex-col gap-4 justify-center items-center min-h-screen bg-gradient-to-bl from-slate-100 to-slate-300 px-4'>
            <h1 className='text-4xl font-bold mb-2'>🧮 Calculator</h1>
            <input
                type="number"
                value={num1}
                onChange={handleNum1Change}
                placeholder='num1'
                className='w-48 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />
            <input
                type="number"
                value={num2}
                onChange={handleNum2Change}
                placeholder='num2'
                className='w-48 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />

            <div className='flex flex-wrap gap-3'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md font-medium' onClick={handleAdd}>+</button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md font-medium' onClick={handleSubtract}>-</button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md font-medium' onClick={handleMultiply}>*</button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md font-medium' onClick={handleDivide}>/</button>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md font-medium' onClick={handleModulus}>%</button>
            </div>

            <h1 className='text-3xl font-semibold text-gray-800'>Result: {result}</h1>
            <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md font-medium' onClick={reset}>Reset</button>
        </div>
    )
}
const Calculate = () => {
    const [value, setValue] = useState([])
    const [result, setResult] = useState(0)
    const handleInputChange = (e) => {
        const inputValue = (e.target.value);
        if (inputValue.length > 3) {
            alert('Please enter only two numbers')
            return
        }
        const inputValueArr = inputValue?.split('');
        // console.log({inputValueArr})
        const filteredInputValueArr = inputValueArr?.filter((item) => item !== ',' && item !== ' ');
        setValue(() => {
            if (filteredInputValueArr.length > 0) {
                return filteredInputValueArr
            }
        })
    };
    const handleAddSub = (e) => {
        if (e.target.name === 'add') {
            setResult(() => {
                if (value?.length != 0) {
                    return parseInt(value[0]) + parseInt(value[1])
                }
            })

        } else if (e.target.name === 'sub') {
            setResult(() => {
                if (value?.length != 0) {
                    return parseInt(value[0]) - parseInt(value[1])
                }
            })


        }
    }
    const reset = () => {
        setValue([])
        setResult(0)
    }

    return (
        <div className='flex flex-col gap-4 justify-center items-center min-h-screen bg-gradient-to-bl from-slate-100 to-slate-300 px-4'>
            <h1 className='text-4xl font-bold mb-2'>🧮 Calculator</h1>
            <h1>Calculator</h1>
            <h2>result: {result}</h2>

            <input type="text" value={value} onChange={handleInputChange} placeholder='Type here!' className='w-64 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition' />
            <button name='add' onClick={handleAddSub}>add</button>
            <button name='sub' onClick={handleAddSub}>sub</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export { Counter, InputChnage, Calculator, Calculate }
