import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (

    <>
    <div className='home' id='home'>
      <main>
        <h1>HOME</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
      <img src={vg} alt="Graphics" />

      <div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam excepturi debitis quas veniam sit ut, expedita necessitatibus placeat, aut eaque voluptate ab sequi! Aspernatur dolores nihil blanditiis rem! Illo, voluptas.
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita dicta architecto maiores, itaque beatae atque quasi quas distinctio corrupti rem est libero quisquam facilis dolores totam ullam tempore. Optio debitis perferendis cum blanditiis voluptate quo, molestiae obcaecati aliquam quisquam odio. Repellendus voluptates laudantium est magni, eligendi unde hic debitis nobis sunt porro consequatur placeat ut optio quasi soluta autem expedita quibusdam maxime? Consequatur exercitationem iusto natus veritatis nam ut rem quis in quisquam doloribus culpa sit cum mollitia, vitae maxime blanditiis ad quod dolor quia dicta voluptatem cupiditate tempore libero suscipit? Dicta sapiente nostrum perspiciatis aut magni alias nulla!</p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>

          <div style={{animationDelay:"0.3s" }}> 
          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>

          <div style={{animationDelay:"0.5s" }}> 
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s" }}> 
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>

          <div style={{animationDelay:"1s" }}> 
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
