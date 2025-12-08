import "./landing.css";
import landing from "../assets/landing.jpg";
import { motion } from "motion/react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialLinks from "../components/SocialLinks";
const Landing = () => {
  return (
    <section id="home">

      <div className="landing-parent row gap-3 justify-content-around mx-0 py-5 my-5" >
        {/* IMG */}
        <motion.div
        initial={{ opacity: 0, y : 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="landing-image order-xl-2 col-lg-6 my-4">
        <div>
          <img src={landing} alt="Landing page background" />
        </div>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }} 
          className="landing-desc col-xl-4 text-xl-start text-center">
          <h2 className="fst-italic my-4" style={{ position: "relative" , fontSize:"3.5rem"}}>
            Nader{" "}
            <span>Hussein</span>
          </h2>
          <p  className="">
            Motivated Computer Science student with strong front-end development skills. Proficient in 
            building responsive and user-friendly web applications using HTML, CSS, JavaScript, 
            Bootstrap, Tailwind CSS, and React.js.
          </p>



          {/* BUTTONS */}
         <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay :0.2 ,duration: 0.5 }} >
                    <AnchorLink href="#contact" >  <button >Contact Me</button></AnchorLink>
                    <AnchorLink href="#contact" ><button className="otherbtn" >Let's talk</button></AnchorLink>
          </motion.div>


          {/* ICONS */}   

            <motion.div
            initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay:0.5, duration: 0.5 }} >
                <SocialLinks/>
            </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
