import "./styles/projects.css";
import { motion } from "framer-motion";
import Linegradient from '../components/LineGradient';


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
                  <Linegradient w="25%"/>  
                </motion.div>


                    {/* Projecsts */}
                    <div className="projects-parent">

                    <motion.div>

                    </motion.div>


                    </div>

            </section>
        )
}


export default Projects