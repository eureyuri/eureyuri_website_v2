import React from 'react'
import "./cover.css";
import SNSButtons from "./SNSButtons";
import Typist from 'react-typist';
import Img from "gatsby-image"

export default function cover({ coverImage }) {
    return (
        <div className="cover">
            <div className="cover__left">
                <Img
                    fluid={coverImage}
                    style={{
                        position: "static",
                        width: "50vw",
                        height: "100vh",
                        minHeight: "100vh"
                    }}
                    objectFit="cover"
                    alt="A view of Puerto Rico ocean from a hotel room nicely blending into the cover background."
                />
            </div>
            <div className="cover__right">
                <div className="cover__text">
                    <h1>Eurey Noguchi</h1>
                    <h2 className="cover__text_typing">
                        <Typist cursor={{hideWhenDone: true}}>
                            Designing <span className="cover__emphasis">Innovation</span>
                            <Typist.Backspace count={20} delay={500}/>
                            I am a {["Web Developer", "Digital Artist", "Designer"]
                                .map(word => ([
                                    <span className="cover__emphasis">{word}</span>,
                                    <Typist.Backspace count={word.length} delay={500}/>
                                ]))}
                            <Typist.Backspace count={7} />
                            Engineering <span className="cover__emphasis">Usefulness & Usability</span>
                        </Typist>
                    </h2>
                    <SNSButtons isCover={true} />
                </div>
            </div>
        </div>
    )
}
