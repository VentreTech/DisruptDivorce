import React from 'react';
import Box from './Box';
import './box-row.css';

const aboutUs = {
    title: 'About Us',
    subtitle: 'An attorney backed team providing you with the best online divorce solution',
    nextUrl: 'https://calendly.com/thejohnsonlawgroup',
    cta: 'Schedule a Consult',
    /* bullets: [
     *     'Lorem ipsum doler solent. Nimi est viheo silent. Norem venum bonum redis ament.',
     *     'Lorem ipsum doler solent. Nimi est viheo silent. Norem venum bonum redis ament.',
     *     'Lorem ipsum doler solent. Nimi est viheo silent. Norem venum bonum redis ament.',
     *     'Lorem ipsum doler solent. Nimi est viheo silent. Norem venum bonum redis ament.',
     *     'Lorem ipsum doler solent. Nimi est viheo silent. Norem venum bonum redis ament.',
     *     'Lorem ipsum doler solent. Nimi est viheo silent. Norem venum bonum redis ament.',
     * ] */
    paras: [
        'LetsDivorce is a mediation platform that helps you get safely to an uncontested divorce. We are dedicated to providing mediation services that help dissolve marraiges fairly and cost effectively.',
        'Hiring the wrong attorney can increase friction and be one of the most expensive things an ordinery person does in their life.',
        'Our online platform helps parties reach an agreement and get the legal paperwork they need to get divorced, often without going to court.'
    ]
}


const product = {
    title: '$500 Uncontested Divorce',
    subtitle: 'This product is great for those with little assets and no children',
    nextUrl: 'https://app.letsdivorce.us/#/',
    cta: 'Start today',
    bullets: [
        'Access to the Guide',
        '30m Attorney Consult (additional time or assistance can be purchased)',
        'Reach a resolution and create your divorce documents on our platform',
        'We provide customer support 8am-6pm',
        'Once signatures obtained, we electronically file the documents',
        'We guarantee the court accepts your documents or we will fix the issue',
        'Process is faster and cheaper than traditional divorce',
    ]
}

const BoxRow = () => (
    <div className="box-row">
        <Box boxConfig={aboutUs}/>
        <Box boxConfig={product}/>
    </div>
);

export default BoxRow;
