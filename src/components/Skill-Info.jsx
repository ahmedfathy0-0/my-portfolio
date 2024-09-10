import React from 'react';

const SkillInfo = ({ img, title,onClick }) => {

    return (
        <div className="item">
            <img src={img} alt={title} onClick={(e) => { e.stopPropagation(); onClick(title); }} />
            <h5 className="skill-title" onClick={(e) => { e.stopPropagation(); onClick(title); }}>{title}</h5>
        </div>
    );
}
export default SkillInfo;