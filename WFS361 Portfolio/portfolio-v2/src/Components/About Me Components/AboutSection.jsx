import React from "react";
import LanguageList from "./LanguageList";
import ProfilePic from '../../Images/profile-pic.png';

function AboutSection () {
    return (
        <section className="about-section">
            <div className="about-section-content">
                <div className="about-section-column">
                    <div className="about-section-image-container">
                        <img
                            loading="lazy"
                            src={ProfilePic}
                            className="about-section-image"
                            alt="Jean van Eck profile photo"
                        />
                    </div>
                </div>
                <div className="about-section-column">
                    <div className="about-section-details">
                        <h2 className="about-section-sub-title">About Jean van Eck</h2>
                        <p className="about-section-paragraph">
                            My name is Jean van Eck, and I was born October 11, 2003. I live
                            in a small town named Willowmore, which is pretty much in the
                            middle of nowhere. You've probably driven past my desolate town
                            without ever noticing. I graduated from Langenhoven Gimnasium in
                            Oudtshoorn in 2021. Now I'm pursuing a profession in coding at
                            Belgium Campus.
                        </p>
                        <p className="about-section-paragraph">
                            I have a passion for photography, but I don't take many images
                            these days because I'm preoccupied with coding and studying. You
                            can see all of my images on Instagram.
                        </p>
                        <p className="about-section-paragraph">
                            When I'm not working or photographing, I'll spend my free time
                            playing video games. Skyrim, Fallout, and Fortnite are among my
                            favorite games.
                        </p>
                        <p className="about-section-paragraph">
                            In my spare time, in addition to gaming and photography, I enjoy
                            going to the pub with friends or having a good braai with them on
                            the weekends.
                        </p>
                    </div>
                </div>
                <div className="about-section-column">
                    <LanguageList />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
