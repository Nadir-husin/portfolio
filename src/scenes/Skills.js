import {motion} from 'framer-motion';
import Linegradient from '../components/LineGradient';
import skillsimg from "../assets/skills-image.png" 
import './styles/skills.css';
const Skills = () =>{
    return(

        <section id="skills">
            <div className='d-flex flex-column flex-xl-row align-items-center justify-content-around gap-5 py-5 mt-5 '>
            {/* skills desc */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once :true , amount : 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden : {opacity : 0 , x: -50},
                visible : {opacity : 1 , x: 0}
            }} >
                <div className='w-50 mx-auto mx-xl-0'>
                <h3 className='fs-1 fst-italic text-center text-xl-start'>SKI<span style={{color : "#DC4492"}}>LLS </span></h3>
                <Linegradient />
                </div>

                <p className='p-4'> <span style={{color : "#DC4492"}}>Language & Framework : </span>:HTML5, CSS3, JavaScript (ES6+), React.js
                    <br/>
                    <span style={{color : "#DC4492"}}>Styling </span>: Bootstrap, Tailwind CSS         
                    <br/>       
                     <span style={{color : "#DC4492"}}>Version Control </span>: Git, GitHub
                     <br/>  
                     <span style={{color : "#DC4492"}}>Other</span>: Responsive Design, Problem-Solving, English Fluency
                 </p>
            </motion.div>

            {/* skills img */}

           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once :true , amount : 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden : {opacity : 0 , x: -50},
                visible : {opacity : 1 , x: 0}
            }}>
                <div className='landing-image skills-image-parent '>
                    <img src={skillsimg} alt="skills img " className='skills-img'/>
                </div>
            </motion.div>
            </div>


            <div className='skills-parent row justify-content-center gap-5 py-5 mt-5 mx-0'>


            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once :true , amount : 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden : {opacity : 0 , y: 50},
                visible : {opacity : 1 , y: 0}
            }} className='skills-box col-9 col-xl-3'>
            <div className='box-parent position-relative'>
                <div className='box-title  start-0 top-0 '>
                    <p>01</p>
                    <p>Experience</p>
                </div>
                <div className='box-color blue position-absolute end-0 top-0'></div>
            </div>
                 <p className='skills-desc'>Built multiple responsive web applications using React, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS.
Developed a full CRUD To-Do App using React with clean component structure and state management.</p>
            </motion.div>


           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once :true , amount : 0.5 }}
            transition={{ delay: 0.2 ,duration: 0.5 }}
            variants={{
                hidden : {opacity : 0 , y: 50},
                visible : {opacity : 1 , y: 0}
            }} className='skills-box col-9 col-xl-3'>
            <div className='box-parent position-relative'>
                <div className='box-title  start-0 top-0 '>
                    <p>02</p>
                    <p>Innovative</p>
                </div>
                <div className='box-color red position-absolute end-0 top-0'></div>
            </div>
                 <p className='skills-desc'>Always exploring new ideas and building creative digital experiences.Turning complex problems into simple, elegant solutions.</p>
            </motion.div>


            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once :true , amount : 0.5 }}
            transition={{delay: 0.4 , duration: 0.5 }}
            variants={{
                hidden : {opacity : 0 , y: 50},
                visible : {opacity : 1 , y: 0}
            }} className='skills-box col-9 col-xl-3'>
            <div className='box-parent position-relative'>
                <div className='box-title  start-0 top-0 '>
                    <p>03</p>
                    <p>Imaginative</p>
                </div>
                <div className='box-color yellow position-absolute end-0 top-0'></div>
            </div>
                 <p className='skills-desc'>Transforming ideas into beautiful digital experiences.Creative thinking meets clean execution.,</p>
            </motion.div>
           

            </div>

        </section>
    )
}

export default Skills ;
