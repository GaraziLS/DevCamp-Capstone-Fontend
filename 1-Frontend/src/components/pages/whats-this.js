import React from 'react';
import FAQ from "../project_components/FAQ"


export default function AboutThis() {
    return (
        <div className="page-wrapper">
            <h2>About this site</h2>

            <div className="text-wrapper">
                <p>This site is built as part of the Bottega DevCamp Full Stack course, it's the Capstone project. The code is available <a href="https://github.com/GaraziLS/DevCamp-FullStack-Project-Backend" className="link">here (backend)</a> and <a href="https://github.com/GaraziLS/DevCamp-Full-Stack-Project-Frontend" className="link">here (frontend).</a> Feel free to read the READMEs to learn about how the site was built.The frontend is built using React, and the backend using Flask. All the icons have text by their side, to allow screen readers work and to make the site accessible to everyone.
                
                <p>Considerations to navigate the site without bugs:

                        <ul>
                            <li>For some reason, when the chrome console is open and you're on the error page (when trying to access the creation page but you're unlogged) the login button doesn't respond. Use the link in that page instead.</li>
                            <br></br>
                            <li>When the console is open and you refresh the page to see the changes that were made, the connection will be refused despite having wifi available. Re-start the server or close the console and reload the page to fix the issue.</li>
                        </ul></p>
                </p>

                <h2>How to use the site: Frequently Asked Questions</h2>

                    <FAQ/>
            </div>
        </div >
    );
}