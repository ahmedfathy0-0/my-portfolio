import React,{useEffect,useState} from 'react';
import { BsArrowRightCircle } from "react-icons/bs";

const SkillDesc = ({ img, title, onReturn }) => {
    const [desc, setDesc] = useState('');
    useEffect(() => {
        switch (title) {
            case 'Web Development':
                setDesc('I specialize in building responsive websites using modern technologies like HTML, CSS, JavaScript, React, and Node.js.');
                break;
            case 'Game Development':
                setDesc('I have experience in developing 2D games using Unity and C#.');
                break;
            case 'App Development':
                setDesc('I have developed mobile applications using React Native and Flutter.');
                break;
            case 'Logic & Circuit Design':
                setDesc('I have a strong foundation in logic and circuit design from my engineering background.');
                break;
            default:
                setDesc('I have a strong foundation in logic and circuit design from my engineering background.');
        }
    }, [title]);
    return (
        <div className="skill-desc">
            <BsArrowRightCircle
            size={35}
            className="back-button"
            onClick={onReturn}
            />
            <div >
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
        
    );
}

export default SkillDesc;