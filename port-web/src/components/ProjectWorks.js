import React from 'react';
import ProjectData from  './projectdata';
import ReactPaginate from 'react-paginate';

const ProjectWorks = () =>{
   
    const [projects] = React.useState(ProjectData);
    const [pageNum, setPageNum] = React.useState(0);

    const projPerPage = 4;
    const visitedPages = pageNum * projPerPage;
   
    const displayProjects = projects.slice(visitedPages, visitedPages + projPerPage).map(items => {
        return(
            <ProjContainer
            key={items.id}
            classRef={items.class}
            imgSrc={items.source}
            altInfo={items.alt}
            itemDesc={items.itemdesc}
            />
        )   
    })
    const pagination = Math.ceil(projects.length / projPerPage);

    const clickToChange = ({selected}) => {
        setPageNum(selected);
    }


    return(
        <div className='project-cont'>
            <article className='project-holder'>
                    {displayProjects}
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


const ProjContainer = ({classRef, imgSrc, itemDesc, altInfo, key}) => {
    return (
        <div className={classRef} key={key}>
           <img src={imgSrc} alt={altInfo} />
           <div className='caption'>
               {itemDesc}
               </div>
        </div>
    )
}


export default ProjectWorks;