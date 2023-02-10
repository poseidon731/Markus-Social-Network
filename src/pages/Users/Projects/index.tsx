import React, { useState, useEffect } from "react";
import { 
    Project, 
    ProjectCategory, 
    ProjectContent, 
    ProjectDescription, 
    ProjectHead, 
    ProjectInfo, 
    ProjectLink, 
    ProjectTags, 
    ProjectTagsItems, 
    ProjectTemplate, 
    ProjectTitle, 
    ProjectType, 
    UserSectionTitle 
} from "../styles";

import { FaFolderOpen, FaTags, FaLink } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const Projects = () => {

    const { id }: any = useParams();

    const [ project, setProject ] = useState<any>([])

    const url = "/fake_API/db.json";

    const getProjects = async () => {
        const response = await axios.get(url);
        const data = response.data.users
        setProject(data[id].project)
    }

    useEffect(() => {
        getProjects();
    }, [])

    const tags = []
    for(let i in project.projectTags){
        tags.push(
            <ProjectTagsItems key={project.projectName[i]}>
                <span className="hastag">#</span> {project.projectTags[i]}
            </ProjectTagsItems>
        )
    }

    return (
        <Project>
            <UserSectionTitle><FaFolderOpen /> Projetos</UserSectionTitle>
            <ProjectContent>
                <ProjectTemplate 
                    templateCover={project.projectImage}
                />
                <ProjectInfo>
                    <ProjectHead>
                        <ProjectType>Projeto Destaque</ProjectType>
                        <ProjectTitle>
                            {project.projectName}
                        </ProjectTitle>
                        <ProjectCategory>
                            <FaTags /> {project.projectCategory}
                        </ProjectCategory>
                        {project.projectUrl &&
                            <ProjectLink>
                                <FaLink /> <span>{project.projectUrl}</span>
                            </ProjectLink>
                        }
                    </ProjectHead>
                    <ProjectDescription>
                        {project.projectDesc}
                    </ProjectDescription>
                    <ProjectTags>                            
                        {tags}
                    </ProjectTags>
                </ProjectInfo>
            </ProjectContent>
        </Project>
    )
}

export default Projects;