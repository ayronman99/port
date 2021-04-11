import React from 'react';
import ProjectData from  './projectdata';
import ReactPaginate from 'react-paginate';
import RQG from '../Snippets/RQG.JPG'
import MDP from '../Snippets/MDP.jpg'
import DPM from '../Snippets/DPM.jpg'

const ProjectWorks = () => {
   
    const [projects] = React.useState(ProjectData);
    const [pageNum, setPageNum] = React.useState(0);

    const projPerPage = 4;
    const visitedPages = pageNum * projPerPage;
   
    {/*for revision slicing items per page */}
    // const displayProjects = projects.slice(visitedPages, visitedPages + projPerPage).map(items => {
    //     return(
    //         <ProjContainer
    //         key={items.index}
    //         linkSrc={items.linksrc}
    //         classRef={items.class}
    //         imgSrc={items.source}
    //         altInfo={items.alt}
    //         itemDesc={items.itemdesc}
    //         />
    //     )   
    // })

    const pagination = Math.ceil(projects.length / projPerPage);

    const clickToChange = ({selected}) => {
        setPageNum(selected);
    }

    return(
        <div className='project-cont'>
            <article   className='project-holder'>
                
                <ProjContainer
                linkSrc={'https://ayronman99.github.io/Random-Qoute-Generator/'}
                classRef={'projitem'}
                imgSrc={RQG}
                altInfo={'Drum Machine Proj'}
                itemDesc={'Random Quote Generator'}
                />
                <ProjContainer
                linkSrc={'hhttps://ayronman99.github.io/Markdown-Previewer/'}
                classRef={'projitem'}
                imgSrc={MDP}
                altInfo={'Markdown viewer'}
                itemDesc={'Markdown Previewer'}
                />
                <ProjContainer
                linkSrc={'https://ayronman99.github.io/Drum-Pad-Machine/'}
                classRef={'projitem'}
                imgSrc={DPM}
                altInfo={'Drum Machine'}
                itemDesc={'Drum Pad Machine'}
                />
                
            </article>
            <ReactPaginate
                    previousLabel={'⠀'}
                    nextLabel={'⠀'}
                    pageCount={pagination}
                    onPageChange={clickToChange}
                    containerClassName={'pagination'}
                    disabledClassName={'disabled'}
                    activeClassName={'activepage'}
                />
        </div>
    )
}


const ProjContainer = ({classRef, imgSrc, itemDesc, altInfo, linkSrc}) => {
    return (
        <div className={classRef}>
         <a href={linkSrc} 
            target="_blank"
            rel='noreferrer'
         >
                <img 
                src={imgSrc} 
                alt={altInfo}></img>
                <div className='caption'>
                    {itemDesc}
                    </div>
         </a>     
        </div>
    )
}


export default ProjectWorks;