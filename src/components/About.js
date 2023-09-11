import React from 'react'
import "./About.css"
// import Switch from "react-switch";

export default function About(props) {
    return (
        <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2 className='my-3'>About Texer</h2>
            <h2>Welcome to Texet - Where Text Takes a Joyride!</h2>

            <div className="container">
                <p className='abt'>Unleash your inner wordsmith with Texet, the ultimate text tinkering haven! We're not your average text tool - we're the cool kid on the block, here to make your words dance and dazzle.</p><br />
            </div>

            <div className="container">
                <p className='abt'>Caps Lock mania or whispering lowercase? Consider it done. Spice up your text by playing word magician - swap, switch, and surprise! Who needs a boring thesaurus when you've got Texet?</p><br />
            </div>

            <div className="container">
                <p className='abt'>Whether you're a syntax superhero, a prose perfectionist, or just a casual text enthusiast, Texet's got the humor and the tools to transform your writing woes into wins. Join us and let's give words a makeover - one giggle and one grand sentence at a time!</p><br />

            </div>
        </div>
    )
}
