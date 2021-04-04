import Carousel from 'react-elastic-carousel';
import rwd from '../FccCert/RWD.jpg';
import jsalgs from '../FccCert/JSALGNDS.jpg';
import fel from '../FccCert/FEL.jpg';


const Slider = () => {
    return(
        <div className='slide-holder'>
            <h3>Here are my certificates I acquired from <a href='https://www.freecodecamp.org/' 
            target='_blank'
            rel='FreeCodeCamp'
            >FreeCodeCamp</a></h3>
            <div className='slider'>
                <Carousel>
                     <ImgHolder 
                            klas={'slide three'}
                            sors={fel}
                            alt={'Front End Libs Cert'}
                        />
                        

                        <ImgHolder 
                            klas={'slide'}
                            sors={jsalgs}
                            alt={'Javascript Algo and Data Structure Cert'}
                        />
                        
                        <ImgHolder 
                            klas={'slide'}
                            sors={rwd}
                            alt={'Responsive Web Design Cert'}
                        />
                         
                </Carousel>
            </div>    
        </div>    
    )
}

function ImgHolder({klas, sors, alt}){
    return(
        <div className={klas}>
            <img src={sors} alt={alt}></img>
        </div>
    )
}


export default Slider;