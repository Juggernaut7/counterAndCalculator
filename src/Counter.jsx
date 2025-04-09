import React, { useState } from 'react'

const SectionWrapper = ({ title, children }) => (
    <div className='flex flex-col gap-5 justify-center items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 px-4 py-10 text-center'>
        <h1 className='text-5xl font-extrabold text-gray-800 mb-4'>{title}</h1>
        {children}
    </div>
)

const Button = ({ children, color = 'blue', onClick, ...props }) => {
    const base = `bg-${color}-500 hover:bg-${color}-600`
    return (
        <button
            onClick={onClick}
            className={`${base} transition duration-200 ease-in-out text-white px-6 py-2 rounded-lg shadow-md font-semibold`}
            {...props}
        >
            {children}
        </button>
    )
}

// 📊 Counter
const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <SectionWrapper title="📊 Counter">
            <h2 className='text-4xl font-semibold text-gray-700'>Count: {count}</h2>
            <div className='flex gap-4 mt-4 flex-wrap justify-center'>
                <Button color="green" onClick={() => setCount(count + 1)}>Increase</Button>
                <Button color="yellow" onClick={() => setCount(count - 1)}>Decrease</Button>
                <Button color="red" onClick={() => setCount(0)}>Reset</Button>
            </div>
        </SectionWrapper>
    )
}

// 📝 Live Input
const InputChnage = () => {
    const [value, setValue] = useState('')
    return (
        <SectionWrapper title="📝 Live Input">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Type something...'
                className='w-64 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            />
            <p className='mt-4 text-xl text-gray-700'>You typed: <span className='text-blue-600 font-medium'>{value}</span></p>
        </SectionWrapper>
    )
}

// 🧮 Calculator (with multiple operators)
const Calculator = () => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)

    return (
        <SectionWrapper title="🧮 Calculator">
            <div className='flex flex-col gap-3'>
                <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder='First number'
                    className='w-64 px-4 py-2 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400' />
                <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder='Second number'
                    className='w-64 px-4 py-2 border-2 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400' />
            </div>

            <div className='flex gap-3 flex-wrap justify-center mt-4'>
                <Button onClick={() => setResult(parseInt(num1) + parseInt(num2))}>+</Button>
                <Button onClick={() => setResult(parseInt(num1) - parseInt(num2))}>-</Button>
                <Button onClick={() => setResult(parseInt(num1) * parseInt(num2))}>×</Button>
                <Button onClick={() => setResult(parseInt(num1) / parseInt(num2))}>÷</Button>
                <Button onClick={() => setResult(parseInt(num1) % parseInt(num2))}>%</Button>
            </div>

            <h2 className='text-3xl text-gray-700 mt-6'>Result: <span className='text-blue-700 font-semibold'>{result}</span></h2>
            <Button color="red" onClick={() => {
                setNum1(0)
                setNum2(0)
                setResult(0)
            }} className="mt-4">Reset</Button>
        </SectionWrapper>
    )
}

// ➕ Simple Add/Subtract
const Calculate = () => {
    const [value, setValue] = useState([])
    const [result, setResult] = useState(0)

    const handleInputChange = (e) => {
        const input = e.target.value
        if (input.length > 3) {
            alert('Please enter only two numbers')
            return
        }
        const filtered = input.split('').filter(item => item !== ',' && item !== ' ')
        setValue(filtered)
    }

    const handleAddSub = (e) => {
        if (value.length !== 2) return
        const [a, b] = value.map(Number)
        setResult(e.target.name === 'add' ? a + b : a - b)
    }

    return (
        <SectionWrapper title="➕ Simple Calc">
            <input
                type="text"
                value={value.join('')}
                onChange={handleInputChange}
                placeholder='Enter two digits (e.g. 23)'
                className='w-64 px-4 py-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            />
            <div className='flex gap-4 mt-4'>
                <Button name='add' onClick={handleAddSub}>Add</Button>
                <Button name='sub' onClick={handleAddSub}>Subtract</Button>
            </div>
            <h2 className='text-2xl mt-4'>Result: <span className='text-indigo-600 font-medium'>{result}</span></h2>
            <Button color="red" onClick={() => {
                setValue([])
                setResult(0)
            }} className="mt-3">Reset</Button>
        </SectionWrapper>
    )
}

export { Counter, InputChnage, Calculator, Calculate }
