import Carousel from 'react-elastic-carousel';
import rwd from '../FccCert/RWD.jpg';
import jsalgs from '../FccCert/JSALGNDS.jpg';
import fel from '../FccCert/FEL.jpg';



const Slider = () => {
    return(
        <div className='slide-holder'>
            <h3>Here are my certificates I acquired from <a href='https://www.freecodecamp.org/' 
            target='_blank'
            rel="noreferrer"
            >FreeCodeCamp</a></h3>
            <div className='slider'>
                <Carousel>
                     <ImgHolder 
                        fcert={'https://www.freecodecamp.org/certification/fcc723415ed-e832-403f-838b-e58b11ace1ea/front-end-libraries'}
                            klas={'slide three'}
                            sors={fel}
                            alt={'Front End Libs Cert'}
                        />
                        

                        <ImgHolder 
                            fcert={'https://www.freecodecamp.org/certification/fcc723415ed-e832-403f-838b-e58b11ace1ea/javascript-algorithms-and-data-structures'}
                            klas={'slide'}
                            sors={jsalgs}
                            alt={'Javascript Algo and Data Structure Cert'}
                        />
                        
                        <ImgHolder 
                            fcert={'https://www.freecodecamp.org/certification/fcc723415ed-e832-403f-838b-e58b11ace1ea/responsive-web-design'}
                            klas={'slide'}
                            sors={rwd}
                            alt={'Responsive Web Design Cert'}
                        />
                         
                </Carousel>
            </div>    
        </div>    
    )
}

function ImgHolder({klas, sors, alt, fcert}){
    return(
        <div className={klas}>
            <a href={fcert} 
            target='_blank' 
            rel='noreferrer'>
                <img src={sors} alt={alt}></img>
            </a>
        </div>
    )
}


export default Slider;