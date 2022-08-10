import React from 'react'
import pizzahero from '../images/react_pizza.json';
import Lottie from 'react-lottie';

export default function Herose() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: pizzahero,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='d-flex hero'>
            <div className="left_side d-flex align-items-center justify-content-center flex-column">
                <h1 className='text-secondary'>Welcome To Pizza Store</h1>
                <button className="btn btn-warning mt-5">Explore </button>
            </div >
            <div className="right_side">
                <Lottie
                    options={defaultOptions}
                    height={500}
                    width={600}
                />
                </ div>
        </div>
    )
}

