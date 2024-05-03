import React from 'react'
import projectImagePlaceholder from '../images/projectPlaceholder.jpeg'
import styles from '../styles/style'

const Projects = () => {
    return (
        <div className='projectsContainer' style={styles.projectsContainer}>
            
                <div className='project'>
                    <img src={projectImagePlaceholder} style={styles.project}></img>
                    <p style={styles.projectParagraph}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus 
                        aut iste, temporibus et veritatis reiciendis non earum, corrupti quod, 
                        sapiente minus dolorum? Quisquam in suscipit praesentium alias? 
                        Similique, ipsa debitis. Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Necessitatibus aut iste, temporibus et veritatis reiciendis non earum, 
                        corrupti quod, sapiente minus dolorum? Quisquam in suscipit praesentium 
                        alias? Similique, ipsa debitis.
                    </p>
                </div>

            <div className='project'>
                <img src={projectImagePlaceholder} style={styles.project}></img>
                <p style={styles.projectParagraph}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus 
                    aut iste, temporibus et veritatis reiciendis non earum, corrupti quod, 
                    sapiente minus dolorum? Quisquam in suscipit praesentium alias? 
                    Similique, ipsa debitis. Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Necessitatibus aut iste, temporibus et veritatis reiciendis non earum, 
                    corrupti quod, sapiente minus dolorum? Quisquam in suscipit praesentium 
                    alias? Similique, ipsa debitis.
                </p>
            </div>

            <div className='project'>
                <img src={projectImagePlaceholder} style={styles.project}></img>
                <p style={styles.projectParagraph}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus 
                    aut iste, temporibus et veritatis reiciendis non earum, corrupti quod, 
                    sapiente minus dolorum? Quisquam in suscipit praesentium alias? 
                    Similique, ipsa debitis. Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Necessitatibus aut iste, temporibus et veritatis reiciendis non earum, 
                    corrupti quod, sapiente minus dolorum? Quisquam in suscipit praesentium 
                    alias? Similique, ipsa debitis.
                </p>
            </div>

            <div className='project'>
                <img src={projectImagePlaceholder} style={styles.project}></img>
                <p style={styles.projectParagraph}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus 
                    aut iste, temporibus et veritatis reiciendis non earum, corrupti quod, 
                    sapiente minus dolorum? Quisquam in suscipit praesentium alias? 
                    Similique, ipsa debitis. Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Necessitatibus aut iste, temporibus et veritatis reiciendis non earum, 
                    corrupti quod, sapiente minus dolorum? Quisquam in suscipit praesentium 
                    alias? Similique, ipsa debitis.
                </p>
            </div>
        </div>
    )
}

export default Projects;