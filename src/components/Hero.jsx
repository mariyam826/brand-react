import flip from '../assets/Images/flip.jpeg'
import amazon from '../assets/Images/amazon.png'
const  Hero =()=>{
    return(
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className='sub'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>
                <div className="hero-btn ">
                    <button className="btn">Shop Now</button>
                    <button className="btn secondary-btn">Category</button>

                </div>
                <div className="shopping">
                   <p>Also Available On</p> 
                   <div className="brand-icons">
                    <img width={'40px'} src={flip} alt="" />
                    <img width={'40px'} src={amazon} alt="" />
                   </div>
                </div>
            </div>
            <div className="hero-img">
                
                <img  src="/images/nike-.png" alt="" />
            </div>

        </main>
    )
}
export default Hero