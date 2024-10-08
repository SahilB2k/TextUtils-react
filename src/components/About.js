import React, { useState } from 'react'

export default function About() {
    const [Mystyle, setMystyle] = useState(
        {
            color: "white",
            backgroundColor: "black"
        }

    )
    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (Mystyle.color === "white") {
            setMystyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText('Enable Dark Mode')
        }
        else {
            setMystyle({
                color: "white",
                backgroundColor: "black"
            })
            setBtnText('Enable Light Mode')
        }
    }

    return (
        < >
            <div className='container my-3 py-3' style={Mystyle}>
        <h1 className='my-2'>About Us</h1>
                <div className="accordion my-3" id="accordionExample" >
                    <div className="accordion-item" style={Mystyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={Mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={Mystyle}>
                        <h2 className="accordion-header">
                            <button style={Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={Mystyle}>
                        <h2 className="accordion-header">
                            <button style={Mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={toggleStyle} type="button"  className="my-3 btn btn-secondary">{btntext}</button>
            </div>

        </>
    )

}