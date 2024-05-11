import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='#home'>
    <main>
        <h1>TechStar</h1>
        <p>Solution to all your problems</p>
    </main>
    </div>
    <div className='home2'>
    <img src={vg} alt="Graphics" />
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui architecto atque quia nesciunt libero recusandae labore consectetur deleniti? Maxime placeat neque ipsa corporis quo inventore debitis a assumenda! Blanditiis?
        </p>
    </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who we are ? </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In accusamus inventore rerum quas quisquam dolorem quasi obcaecati perferendis dolor iure veniam architecto, est optio vero vitae! Sequi laboriosam totam, minima fuga dolore quod! Voluptatibus nobis odit minus labore quasi mollitia eveniet dolorem non neque perspiciatis, aut velit doloribus, reiciendis illum quaerat, qui temporibus. Itaque excepturi ullam mollitia eligendi fuga. Ab illo ratione, recusandae vero aspernatur veritatis. Similique suscipit in voluptatibus minus consequatur ipsa dolorem. Dignissimos officiis ut, eaque soluta expedita distinctio hic laudantium, ratione perferendis eveniet debitis numquam dolorem maxime nihil ipsum rem. </p>
            </div>
    </div>
    <div className="home4" id="brands">
        <div>
        <h1>Brands</h1>
        <article>
            <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{animationDelay:"0.9s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
        </article>
        </div>
    </div>
    </>
  )
}

export default Home