import React from 'react';
import "./faq.css";

const Accordion = ({data}) => {
    return (
        <ul className="accordion">
            {data?.map((data) => (
                <li>
                    <input type="radio" name="accordion" id={data?.id}/>
                    <label for={data?.id}>{data?.title}</label>
                    {data.content ?   <div className="content">
                    <p>{data?.content}</p>
                </div> : data.list ? <ul className='content-list'>
                    {data.list.map((list) => (
                        <li>{list}</li>
                    ))}
                </ul> : null}
                </li>
            ))}
        </ul>
    )
};

export default Accordion;