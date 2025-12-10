import "./styles/projects.css";
import { motion } from "framer-motion";
import Linegradient from '../components/LineGradient';
import Ecommerce from '../assets/e-commerce.jpg'
import jewelry from '../assets/Jewelery.webp'
import kas from '../assets/Kas.jpg'
import todo from '../assets/Todo.jpg'
const Projects = () =>{
        return (
            <section id="projects">
                <motion.div className=" mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once :true , amount : 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden : {opacity : 0 , y: -100},
                        visible : {opacity : 1 , y: 0}
                    }}>
                <h3 className="fs-1 fst-italic"><span style={{color : "#DC4492"}} >PRO</span>JECTS</h3>
                  <Linegradient w="25%" m="0 auto"/>  
                </motion.div>


                    {/* Projecsts */}
                    <div className="projects-parent container   row justify-content-center  py-5 mt-5 mx-auto gap-5 gap-lg-0">

                    <motion.div className="beau col-12 col-md-8 col-lg-4  d-flex justify-content-center align-items-center text-white fs-3 fw-bold fst-italic"
                       initial="hidden"
                        whileInView="visible"
                        viewport={{once :true , amount : 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                        hidden : {opacity : 0 ,scale : 0.8},
                        visible : {opacity : 1 ,scale : 1}
                         }}>
                    <h3>Beautiful User Interface</h3>
                    </motion.div>
                    
                    
                    <motion.div className=" col-12 col-md-8 col-lg-4 position-relative project-box" style={{height:"350px"}} 
                        initial="hidden"                      
                        whileInView="visible"
                        viewport={{once :true , amount : 0.5 }}
                        transition={{delay:0.2 , duration: 0.5 }}
                        variants={{
                        hidden : {opacity : 0 ,scale : 0.8},
                        visible : {opacity : 1 ,scale : 1}
                         }}>
                    <a 
                    href="https://nadir-husin.github.io/Noctype-E-Commerce/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={Ecommerce}  alt="E-commerce"/>
                        <div className="position-absolute start-0 bottom-0 bg-black text-white p-2 w-100 text-center project-info">
                            <h3 className="fs-4 text-center mt-2 fw-bold fst-italic">E-Commerce Website</h3>
                            <p></p>
                        </div>
                    </a>
                    </motion.div>

                    <motion.div className=" col-12 col-md-8 col-lg-4 position-relative project-box" style={{height:"350px"}} 
                        initial="hidden"                      
                        whileInView="visible"
                        viewport={{once :true , amount : 0.5 }}
                        transition={{delay:0.4 , duration: 0.5 }}
                        variants={{
                        hidden : {opacity : 0 ,scale : 0.8},
                        visible : {opacity : 1 ,scale : 1}
                         }}>
                    <a 
                    href="https://nadir-husin.github.io/Noctype-jewellery/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={jewelry}  alt="Jewelry"/>
                        <div className="position-absolute start-0 bottom-0 bg-black text-white p-2 w-100 text-center project-info">
                            <h3 className="fs-4 text-center mt-2 fw-bold fst-italic">Jewelery Website</h3>
                            <p></p>
                        </div>
                    </a>
                    </motion.div>

                    
                    
                    
                    <motion.div className=" col-12 col-md-8 col-lg-4 position-relative project-box" style={{height:"350px"}} 
                        initial="hidden"                      
                        whileInView="visible"
                        viewport={{once :true , amount : 0.5 }}
                        transition={{ delay:0.6 ,duration: 0.5 }}
                        variants={{
                        hidden : {opacity : 0 ,scale : 0.8},
                        visible : {opacity : 1 ,scale : 1}
                         }}>
                    <a 
                    href=" https://nadir-husin.github.io/Kas/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={kas}  alt="Kas"/>
                        <div className="position-absolute start-0 bottom-0 bg-black text-white p-2 w-100 text-center project-info">
                            <h3 className="fs-4 text-center mt-2 fw-bold fst-italic">Kas Website</h3>
                            <p></p>
                        </div>
                    </a>
                    </motion.div>

                    <motion.div className=" col-12 col-md-8 col-lg-4 position-relative project-box" style={{height:"350px"}} 
                        initial="hidden"                      
                        whileInView="visible"
                        viewport={{once :true , amount : 0.5 }}
                        transition={{delay:0.8 , duration: 0.5 }}
                        variants={{
                        hidden : {opacity : 0 ,scale : 0.8},
                        visible : {opacity : 1 ,scale : 1}
                         }}>
                    <a 
                    href="https://nadir-husin.github.io/To-do-app-react/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={todo}  alt="Todo"/>
                        <div className="position-absolute start-0 bottom-0 bg-black text-white p-2 w-100 text-center project-info">
                            <h3 className="fs-4 text-center mt-2 fw-bold fst-italic">Todo Website</h3>
                        </div>
                    </a>
                    </motion.div>
    

                        <motion.div className="smooth col-12 col-md-8 col-lg-4  d-flex justify-content-center align-items-center text-white fs-3 fw-bold fst-italic"
                       initial="hidden"
                        whileInView="visible"
                        viewport={{once :true , amount : 0.5 }}
                        transition={{ delay:0.2 ,duration: 0.5 }}
                        variants={{
                        hidden : {opacity : 0 ,scale : 0.8},
                        visible : {opacity : 1 ,scale : 1}
                         }}>
                    <h3>SMOOTH USER EXPERIENCE</h3>
                    </motion.div>





                    </div>

            </section>
        )
}


export default Projects