import React from 'react';
import { Link } from 'react-router-dom';
// import './styles.scss';
import './styles.css';

const Page404 = () => {
  return (
    <div id="pg404_background-404">
      <div id="pg404_stars1" />
      <div id="pg404_stars2" />
      <div id="pg404_stars3" />
      <div id="pg404_title">
        <span className="pg404_text-small">
          THERE IS NO EMOTION, THERE IS
        </span>
        <br />
        <span className="pg404_text-big">
          PEACE
        </span>
        <br />
        <span className="pg404_text-small">
          THERE IS NO IGNORANCE, THERE IS
        </span>
        <br />
        <span className="pg404_text-big">
          KNOWLEDGE
        </span>
        <br />
        <span className="pg404_text-small">
          THERE IS NO PASSION, THERE IS
        </span>
        <br />
        <span className="pg404_text-big">
          SERENITY
        </span>
        <br />
        <span className="pg404_text-small">
          THERE IS NO CHAOS, THERE IS
        </span>
        <br />
        <span className="pg404_text-big">
          HARMONY
        </span>
        <br />
        <span className="pg404_text-small">
          THERE IS NO INFORMATION, THERE IS
        </span>
        <br />
        <span className="pg404_text-404">
          404
        </span>
        <br />
        <br />
        <span className="pg404_text-small">
          THE FORCE YOU ARE SEARCHING
        </span>
        <br />
        <span className="pg404_small-text">
          IS NOT HERE, JEDI. LET'S GO HOME{/*<Link to="/"><b>HOME</b></Link>*/}
        </span>
      </div>
    </div>
  );
};

export default Page404;
