import SocialLinks from "../components/SocialLinks";


const Footer = ()=>{


    return (
        <section id="footer" style={{background:"#DC4492"}} className="p-3 row justify-content-evenly align-items-center mx-0">
            <div className="social-footer col-lg-5">
            <SocialLinks/>
            <h3 className="py-4 text-center text-lg-start fst-italic  " >Nader <span style={{color: "#FDCC49"}}>Hussein</span></h3>
            </div>
            <h4 className="col-md-5 text-center text-md-start">©2025 Nader. All Rights Reserved.</h4>
        </section>
    )
}


export default Footer ;