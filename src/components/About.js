import React, { useState } from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else {
            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode")
        }
    }

    return (
        <>
            <div className="container my-2">
                <h1>About Us</h1>
                <div className="card" style={myStyle}>
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div>
        </>
    )
}
