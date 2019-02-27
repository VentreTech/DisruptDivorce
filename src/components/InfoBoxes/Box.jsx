import React from 'react';

const mapBullets = b => <li>{b}</li>;
const mapParas = para => <p className="desc">{para}</p>;

const Box = ({boxConfig}) => {
    const bullets = boxConfig.bullets && (
        boxConfig.bullets.map(mapBullets)
    )
    const paras = boxConfig.paras && (
        boxConfig.paras.map(mapParas)
    );
    const content = bullets || paras;
    return (
        <div className="info-box">
            <h4>{boxConfig.title}</h4>
            <p>{boxConfig.subtitle}</p>
            <hr/>
            <div className="info-box-content">
                {content}
            </div>
            <a href={boxConfig.nextUrl}
                className="btn btn-info btn-block"
            >
                {boxConfig.cta}
            </a>
        </div>
    )
}

export default Box;
