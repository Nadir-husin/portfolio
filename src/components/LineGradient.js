

const  Linegradient = (({ w} )=>{
     const linecss = {
    background :"linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
    height : "4px",
    width:w,
    borderRadius : "2px",
    margin:"0 auto"
 }
    return (
        <div style={linecss}></div>
    )
})
export default Linegradient;