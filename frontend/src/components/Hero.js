import React from 'react'
import watch from '../assets/images/hero-watch.png'

const Hero = () => {
    return (
        <>
            <div id="hero">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h3 class="padding-top-80">Digital Trend</h3>
                <h1>New Collection 2020</h1>
                <h3>Big Sale this week</h3>
                <div class="elm-btn">
                    <a href="#" class="themesflat-button bg-accent has-padding-36">Shop Now</a>
                </div>
            </div>

            <div class="offset-md-2 col-md-4">
                <img src={watch} id="hero-watch" />
            </div>
        </div>
    </div>    
</div>

        </>
    )
}

export default Hero
