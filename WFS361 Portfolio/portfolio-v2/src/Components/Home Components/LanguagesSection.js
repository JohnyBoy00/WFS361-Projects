import React from "react";
import LangSvg from '../../Assets/Lang.svg';
import WhiteLine from '../../Images/white-line.png';

function LanguagesSection() {
  return (
    <section className="languages-section">
      <img
        src={LangSvg}
        alt="Programming languages"
        className="languages-image"
      />
      <img
        src={WhiteLine}
        alt=""
        className="career-separator"
      />
    </section>
  );
}

export default LanguagesSection;