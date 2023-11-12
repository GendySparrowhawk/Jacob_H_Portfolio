import preprAir from "../public/assets/Perp-air.png";
import dnd from "../public/assets/d20_icon.jpg";
import saveSate from "../public/assets/svae_state.jpg";
import dndLogo from "../public/assets/dnd2.jpg";
import tie from "../public/assets/tie.jpg";
import readMe from "../public/assets/raedme.png";

function Projects() {
  return (
    <main>
      <div className="proj">
        <h1>Projects</h1>

        <div className="projCard">
          <img src={preprAir} alt="Perp-air" />
          <div>
            <h2>Prep-Air</h2>
            <p>
              An early app I made with my classmates that pulls accurate weather
              and location data for anywhere on earth using api requests
            </p>
            <p>
              <a href="https://pwoodkotch.github.io/prepAir_project01_app/">
                Click here for the deployed application
              </a>
            </p>
            <p>
              <a href="https://github.com/pwoodkotch/prepAir_project01_app">
                Click here for the github repo
              </a>
            </p>
          </div>
        </div>


        <div className="projCard">
          <img src={dnd} alt="Tales from the Hanish Isles" />
          <div>
            <h2>Tales from the Hanish Isles</h2>
            <p>
              A work in progress website using the dnd campagin I'm running as
              inspiration. This one is meant to demonstrate my vanilla
              programing abilites. No react here just calssic routes and fetch
              requests. More and more feautres will be added including the
              ability to roll dice, and pehapse even create a caharcrter if
              wizards of the coast get loose with their api's.
            </p>
            <p>
              <a href="https://gendysparrowhawk.github.io/5E-Dnd/">
                Click here for the deployed application
              </a>
            </p>
            <p>
              <a href="https://github.com/GendySparrowhawk/5E-Dnd">
                Click here for the github repo
              </a>
            </p>
          </div>
        </div>


        <div className="projCard">
          <img src={saveSate} alt="Video Games" />
          <div>
            <h2>save State</h2>
            <p>
              Another class project uusing datbase and relational data to butild
              a vidoe game rwview website.
            </p>
            <p>
              <a href="https://save-state-6f1b1a53b632.herokuapp.com/">
                Click here for the deployed application
              </a>
            </p>
            <p>
              <a href="https://github.com/GendySparrowhawk/meta_gg">
                Click here for the github repo
              </a>
            </p>
          </div>
        </div>


        <div className="projCard">
          <img src={dndLogo} alt="Dungeons and dragons" />
          <div>
            <h2>Dnd Blog</h2>
            <p>
              Using a lot of routing to make a simple dnd social website. Kinda like a cahtroom back in the day. 
            </p>
            <p>
              <a href="https://dashboard.heroku.com/apps/dnd-5e">
                Click here for the deployed application
              </a>
            </p>
            <p>
              <a href="https://github.com/GendySparrowhawk/Dnd_Blog_board">
                Click here for the github repo
              </a>
            </p>
          </div>
        </div>


        <div className="projCard">
          <img src={tie} alt="Of line note app" />
          <div>
            <h2>Note taker: offline</h2>
            <p>
              An app for taking, making, and delteing notes tat works without an internet connecion
            </p>
            <p>
              <a href="https://github.com/GendySparrowhawk/off-line-note-app">
                Click here for the github repo
              </a>
            </p>
          </div>
        </div>


        <div className="projCard">
          <img src={readMe} alt="Of line note app" />
          <div>
            <h2>Markdown file generator</h2>
            <p>
              A quick, termianl run, program using inquirer to generate a REAMDE in seconds
            </p>
            <p>
              <a href="https://github.com/GendySparrowhawk/Markdown-Terminal-Generator">
                Click here for the github repo
              </a>
            </p>
          </div>
        </div>

        
      </div>
    </main>
  );
}

export default Projects;
