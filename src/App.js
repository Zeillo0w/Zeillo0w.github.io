import React from 'react'
import './app.css'
import useSticky from './hooks/useSticky.js'
import Welcome from './components/Header/Welcome'
import Navbar from './components/Header/Navbar'
import Faq from './components/Header/Faq'
import Pub from './components/Header/pub'
import Video from './components/Header/pub'

function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky} />
            <Welcome element={element} />
            <div className='big'>
                <h1 className='faq'>FAQ - QUESTIONS FREQUENTES</h1>

                <div className="container">


                    <Faq />
                </div>
            </div>

        </>
    )
}

export default App
