import "../scenes/styles/contact.css"
import {motion} from "framer-motion";
import emailjs from "emailjs-com";
import { useRef } from "react";
import Linegradient from "../components/LineGradient";
import contactimg from '../assets/contact-image.jpeg'
import {useForm} from "react-hook-form"
const Contact = () => {
    const form = useRef()
    const {register,
                trigger,
                formState :{errors}
            } = useForm();

const onSubmit = async (e) => {
            let isValid = await trigger();
            if (isValid) {
                e.preventDefault();
                emailjs.sendForm(
                "service_cx57twc",
                "template_hpnjxgu",
                form.current,
                "thXTsIkZY1EnjSh4t"
                )
                .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
                })
                .catch(() => {
                alert("Something went wrong!");
                });
            } else {
                e.preventDefault();
            }
};

    return (
        <section id="contact"className="my-5 container">
            <motion.div className=" d-flex  flex-column align-items-center m-4" 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once :true , amount : 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden : {opacity : 0 , y: -100},
                        visible : {opacity : 1 , y: 0}
                    }}>
            <h3 className="fs-1 fst-italic p-4 "><span style={{color: "#FDCC49"}}>Contact </span> Me</h3>
            <Linegradient w = "30%" />
            </motion.div>



            <div className="contact-parent m-3 row justify-content-center align-items-center gap-5 gap-lg-2 ">
            <motion.div className="contact-img-parent  col-lg-5"                    
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once :true , amount : 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden : {opacity : 0 , scale: 0.6},
                        visible : {opacity : 1, scale: 1}
                    }}>
                    <img src={contactimg} alt="contact-img" className="w-100"/>
            </motion.div>


            <motion.div className="contact-form col-lg-5 "  
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once :true , amount : 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden : {opacity : 0 , y: 80},
                        visible : {opacity : 1, y: 0}
                    }}>
                    <form className="d-flex flex-column"
                        onSubmit={onSubmit}
                        ref={form}
                        >
                            <input 
                            type="text"
                            placeholder="Name"
                            name="user_name"
                            className="nameInput"
                            {...register("name" , {
                                required : true ,
                                maxLength:100,
                            })}
                            />

                            {errors.name &&(      <p className="input-err">
                                {errors.name === "required" && "This field is required "}
                                {errors.name === "maxLength" && "Max length is 100 character "}
                            </p>
                        ) }
                      


                            <input 
                            type="email"
                            placeholder="Email"
                            name="user_email"
                            className="nameInput"
                            {...register("email" , {
                                required : true ,
                                pattern : /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                            })}
                            />
                            {errors.email && (      <p className="input-err">
                                {errors.email === "required" && "This field is required "}
                                {errors.email === "pattern" && "Invalid Email Address"}
                            </p>
                                )}
                      


                            <textarea 
                            type="text"
                            placeholder="Message"
                            className="nameInput"
                            name="message"
                            row = "4"
                            column = "50 "
                            {...register("message" , {
                                required : true ,
                                maxLength : 2000,
                            })}
                            />
                            {errors.message && (      <p className="input-err">
                                {errors.message === "required" && "This field is required "}
                                {errors.message === "pattern" && "Max length is 100 character"}
                            </p>
                            )}
                

                <button type="submit">SEND ME MESSAGE </button>

                        </form>
            </motion.div>

            </div>

        </section>
    )
}


export default Contact; 