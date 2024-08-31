import React from 'react';

export default function AboutThis() {
    return (
        <div>
            <h2>About this site</h2>

            <div className="text-wrapper">
                <p>This site is built as part of the Bottega DevCamp Full Stack course, it's the Capstone project. The code is available <a href="https://github.com/GaraziLS/DevCamp-FullStack-Project-Backend" className="link">here (backend)</a> and <a href="https://github.com/GaraziLS/DevCamp-Full-Stack-Project-Frontend" className="link">here (frontend).</a></p>

                <p>The site lets you to use, create, edit and delete random generators. The program will pick a random item among the available data. For example, let's say that you have a generator that contains color names: blue, red, green, yellow, black, white, pink and orange. The program automatically picks one value randomly from that list, so whenever you refresh the page another random result is chosen. This site's aim is to help roleplayers and writers with their stories, giving them ideas, just like other websites do such as <a href="https://rollforfantasy.com/" className="link">Roll for Fantasy.</a> Let's say that you need to know the direction of a place, or what kind of natural terrain your character will find ahead. Just go to Directions and Nature places and roll on the tables to locate a mountain to the north-east, or a desert to the west. And you could go on. Want to create a character? Roll to find their eye and hair colour, gender, even their background and personality. Everything is possible!</p>

                <h3>How to use this site</h3>

                <p>The main page contains a search bar and several links. Some of them will be hidden to unlogged users. The search bar lets you to search content directly typing in it, and the found coincidences will display. If you click on a result you will be redirected to that generator in particular. If no results are found, the search bar will redirect you to the creation page, but first you must log in and/or sign up.</p>

                <p>In the main page you'll find all the available generators and a series of buttons. Click one of them and the generators will be filtered by category. For example, if you click in the Characters tab all the generators with that category will show up. In order to query a new search you must first erase the filter by clicking Filter All. This will reset the filter and you'll be able to choose another category. Here's what each button is for:</p>

                <ul>
                    <li>Characters: Contains generators to generate characters, both Playable Characters and Non Playable Characters (NPC). Here you can find tables related to character gender, class, race, alignment, even family, number of siblings, personality, background... you could even find a bestiary inside!</li>

                    <br></br>

                    <li>Objects: Let me guess, the party went to a dungeon and you, as the DM, don't know what they'll find in. No problem! Here you can find weapons, armors, all kind of treasures, even healing potions, or perhaps a bunch of vehicles, maybe even arcane spellboks.</li>

                    <br></br>

                    <li>Quests: What's a TTRPG session without an adventure? A novel without a plot? Nothing. Here you can find adventure seeds and plot ideas. When did that event happen? What's the genre of the story? What do the characters have to get for their mysterious patron? If they have to find and object, you could dive in the Objects category. If the story is science-fiction themed you might want to go to the World tab to keep developing that idea of yours to know what planet did the characters find...</li>

                    <br></br>

                    <li>Skills: What special abilities does your character have? Can they summon a dragon? Call the forces of nature? Throw fireballs? The Skills tab can show that and more! Spells, gifts from a deity or even ancient techniques of combat find their home here.</li>

                    <br></br>

                    <li>World: Could be the homeland of the characters, or an unexplored planet. Mountains, deserts, forests... all those can be found here. This category allows you to shape the world. How many continents there are? Are there floating islands? What about the government? What's the size of that settlement? You can answer these and many more questions, including everything related to dungeons and even traps.</li>

                    <br></br>

                    <li>Other: Anything that doesn't belong to any of the previous categories. This category can have whatever you want: Colors? Fine. Months of the year? Okay. Heraldic emblems? No problem. A syllable structure generator for a fantasy language? Great. An improvised dice roller with the dice values in (you have to add the modifiers separately!)? Done! Your imagination is the limit with this category!</li>

                    <br></br>

                    <li>Filter All: Resets the filters and allows you to click another category button.</li>
                </ul>

                <p>Finally, when you log in you've the creation page available. Just pick a name for your generator, a category, and enter the values separated by commas (,). Hit the Save Generator button and it will appear in the homepage. You can also edit and delete generators from the creation page: just click the corresponding button of the item you want to change or delete, because all the generators will appear here. When editing, the form will populate itself with the data, hit save to save the changes. For deleting data, you just need a click.</p>

                <p>To log out, just refresh the page.</p>
            </div>
        </div >
    );
}