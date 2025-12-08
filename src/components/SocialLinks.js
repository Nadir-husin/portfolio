import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const SocialLinks = () =>{
    return (

        <>
        <div className="d-flex  gap-4 mt-4 justify-content-center justify-content-xl-start" >
        <a 
        href="https://www.facebook.com/nadrrHusein"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <FacebookIcon />
      </a>
          <a 
        href="https://www.instagram.com/nadrhusein/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <InstagramIcon />
      </a>
          <a 
        href="https://www.linkedin.com/in/nader-hussein-17a2612a2/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <LinkedInIcon />
      </a>
          <a 
        href="https://x.com/Nadr_husin?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExbzRJZnY3RnBvdTc3STJMdHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR5YiPD4cwYEAugCT_9Q-jpUrgQGYBz_qMkYItDcb1sWuKXc0rYpcEg1NCty0Q_aem_dwULsuuF_pjCKXqd3P7AKA"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition"
      >
        <XIcon />
      </a>
        </div>
        </>


    )
}



export default SocialLinks;