import CSS3 from '../skills/css3.png';
import HMTL5 from '../skills/html5.png';
import JS from '../skills/js.png';
import ReactLogo from '../skills/react.png'

function SkillSet(){
  return(
  <div className='skill-holder'>
      <Setter 
        dizskil={'htmlogo'}
        skeels={HMTL5}
        altogo={'HMTL5 logo and text'}
      />

      <Setter 
        dizskil={'csslogo'}
        skeels={CSS3}
        altogo={'CSS3 logo and text'}
      />
      
      <Setter 
        dizskil={'jslogo'}
        skeels={JS}
        altogo={'Javascript logo and text'}
      />

      <Setter 
        dizskil={'reactlogo'}
        skeels={ReactLogo}
        altogo={'React logo and text'}
      />

      
  </div>
  )
}



function Setter({skeels, skilogo, altogo, dizskil}){
  return(
    <div className='skill-container'>
      <div className={dizskil}>
        <p><strong>{skilogo}</strong></p>
      <img src={skeels} alt={altogo}></img>
      </div>
    </div> 
  )
}
  


  export default SkillSet;