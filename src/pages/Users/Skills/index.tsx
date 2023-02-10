import React, { useEffect, useState } from "react";
import { 
    SkillBar, 
    SkillBarPercent, 
    SkillProgressBar, 
    SkillProgressBarContainer, 
    SkillsContainer, 
    UserSectionTitle 
} from "../styles";

import { FaTasks } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const Skills = () => {

    const { id }: any = useParams();

    const [skill, setSkill] = useState<any>([]);

    const url = "/fake_API/db.json";

    const getSkills = async () => {
        const response = await axios.get(url)
        const data = response.data.users.map((item: any) => item.skills)
        setSkill(data[id])
    }

    useEffect(() => {
        getSkills();
    }, [id])

    const getColor: string[] = []
    for(let i in skill) {
        getColor.push(
            skill[i]
        )
    }

    const skillColor = (colorValue: any) => {
        if(colorValue === skill[0]) {
            return "var(--first-skill-color)"
        } else if (colorValue === skill[1]) {
            return "var(--second-skill-color)"
        } else if (colorValue === skill[2]) {
            return "var(--third-skill-color)"
        } else {
            return "var(--fourth-skill-color)"
        }
    }

    return (
        <SkillsContainer>
            <UserSectionTitle><FaTasks /> Skills</UserSectionTitle>
            <SkillProgressBarContainer>
                {skill.map((item: any) => (
                    <SkillProgressBar key={item.name}>
                        <SkillBar
                            skillBarBg={skillColor(getColor[item.id - 1])}
                            skillBarWidth={`${item.percentage}%`}
                        >
                            <span>{item.name}</span>
                        </SkillBar>
                        <SkillBarPercent>
                            {item.percentage}%
                        </SkillBarPercent>
                    </SkillProgressBar>
                ))}
            </SkillProgressBarContainer>
        </SkillsContainer>
    )
}

export default Skills;