// Call the function to generate albums
window.addEventListener("DOMContentLoaded", function(){
    const data = {
        "dont_be_afraid_of_dying":{
            "name": "Don't be afraid of dying",
            "type": "Album",
            "release_date": "2017",
            "cover": "images/covers/dont_be_afraid_of_dying.png",
            "content": {
            }
        },
        "it_just_gets_worse":{
            "name": "It just gets worse(with Mortem)",
            "type": "Album",
            "release_date": "2018",
            "cover": "images/covers/it_just_gets_worse.png",
            "content": {
            }
        },
        "child_sacrifice":{
            "name": "Child Sacrifice",
            "type": "EP",
            "release_date": "2018",
            "cover": "images/covers/child_sacrifice.png",
            "content": {
            }
        },
        "sewerslvt":{
            "name": "Sewer//S***",
            "type": "EP",
            "release_date": "2018",
            "cover": "images/covers/sewerslvt.png",
            "content": {
            }
        },
        "starving_slvts_always_get_thier_fix":{
            "name": "Starving s**** always get thier fix",
            "type": "Album",
            "release_date": "2018",
            "cover": "images/covers/starving_slvts_always_get_thier_fix.png",
            "content": {
            }
        },
        "drowning_in_the_sewer":{
            "name": "Drowning in the sewer",
            "type": "Album",
            "release_date": "2019",
            "cover": "images/covers/drowning_in_the_sewer.png",
            "content": {
            }
        },
        "infatuation":{
            "name": "Infatuation",
            "type": "EP",
            "release_date": "2019",
            "cover": "images/covers/infatuation.png",
            "content": {
            }
        },
        "cyberia":{
            "name": "Cyberia Lyr1+2=3",
            "type": "EP",
            "release_date": "2020",
            "cover": "images/covers/cyberia.png",
            "content": {
            }
        },
        "irly":{
            "name": "IRLY",
            "type": "EP",
            "release_date": "2020",
            "cover": "images/covers/irly.png",
            "content": {
            }
        },
        "draining_love_story":{
            "name": "Draining love story",
            "type": "Album",
            "release_date": "2020",
            "cover": "images/covers/draining_love_story.png",
            "content": {
            }
        },
        "worthlessness":{
            "name": "Worthlessness",
            "type": "EP",
            "release_date": "2020",
            "cover": "images/covers/worthlessness.png",
            "content": {
            }
        },
        "tortvred_lesbians_ripped_apart":{
            "name": "T******* lesbians ripped apart",
            "type": "EP",
            "release_date": "2021",
            "cover": "images/covers/tortvred_lesbians_ripped_apart.png",
            "content": {
            }
        },
        "if_youre_out_there_i_miss_you":{
            "name": "if you’re out there i miss you ｡ﾟ･ (-﹏-) ･ﾟ｡",
            "type": "EP",
            "release_date": "2021",
            "cover": "images/covers/if_youre_out_there_i_miss_you.png",
            "content": {
            }
        },
        "suffering_from_melancholia":{
            "name": "Suffering from melancholia",
            "type": "EP",
            "release_date": "2021",
            "cover": "images/covers/suffering_from_melancholia.png",
            "content": {
            }
        },
        "the_world_is_fvcked":{
            "name": "The world is fv****",
            "type": "Album",
            "release_date": "2020",
            "cover": "images/covers/the_world_is_fvcked.png",
            "content": {
            }
        },
        "skitzofrenia_simulation":{
            "name": "Skitzofrenia Simulation",
            "type": "Album",
            "release_date": "2021",
            "cover": "images/covers/skitzofrenia_simulation.png",
            "content": {
            }
        },
        "we_had_good_times_together_dont_forget_that":{
            "name": "We had good times together don't forget that",
            "type": "Album",
            "release_date": "2021",
            "cover": "images/covers/we_had_good_times_together_dont_forget_that.png",
            "content": {
            }
        }
    }
    for (let key in data) {
        const container = document.getElementById("content");
        const album = data[key];

        const objectTemplate = `
            <div class="album" id="${key}">
                <div style='background-image: url("./${album.cover}");' class="albumcover"></div>
                <div class="albuminfo">
                    <h1>${album.name}</h1>
                    Release Year: ${album.release_date}<br>
                    Type: ${album.type}
                    <div class="button ${key}button">
                        See More
                    </div>
                </div>
            </div>
        `;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = objectTemplate;

        setTimeout(function() {
            container.appendChild(tempDiv);
        }, 1200);
    }
});
