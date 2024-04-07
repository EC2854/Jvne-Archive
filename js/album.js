document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlName = urlParams.get('album');
    const data = {
        "dont_be_afraid_of_dying":{
            "name": "Don't be afraid of dying",
            "cover": "images/covers/dont_be_afraid_of_dying.png",
            "songs":[
                { 
                    "name": "J.ust keeps getting worse doesn't it", 
                    "url": "" 
                },
                { 
                    "name": "U.nfortunate, but what can you do about It", 
                    "url": "https://youtu.be/1XabBMp1LpI" 
                },
                { 
                    "name": "N.***********- it applies to the dead inside now", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=168" 
                },
                { 
                    "name": "K.illing time for the f*** of it", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=420" 
                },
                { 
                    "name": "O.f coarse, it_s the worlds fault i_m f***** up", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=585" 
                },
                { 
                    "name": "F.ourty four days in hell & back", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=753" 
                },
                { 
                    "name": "U.nder the weight of a thousand demons", 
                    "url": "https://www.youtube.com/watch?v=1XabBMp1LpI" 
                },
                { 
                    "name": "R.ecalling how to control myself", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=1014" 
                },
                { 
                    "name": "U.nderneath this skin of ours lies true humanity", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=1277" 
                },
                { 
                    "name": "T.his is war", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=1481" 
                },
                { 
                    "name": "A.nd now...", 
                    "url": "https://youtu.be/1XabBMp1LpI?t=1660" 
                }
            ],
        },
        "it_just_gets_worse":{
            "name": "It just gets worse(with Mortem)",
            "cover": "images/covers/it_just_gets_worse.png",
            "songs":[
                { 
                    "name": "this is very bad and im gay", 
                    "url": "https://www.youtube.com/watch?v=xoa8xS_nOv0" 
                },
                { 
                    "name": "ski mask f***", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=92" 
                },
                { 
                    "name": "toe wizard", 
                    "url": "https://www.youtube.com/watch?v=xoa8xS_nOv0" 
                },
                { 
                    "name": "drunk is nature", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=432" 
                },
                { 
                    "name": "ru3", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=603" 
                },
                { 
                    "name": "sleep in it you swine", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=786" 
                },
                { 
                    "name": "vapor trail pt1", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=983" 
                },
                { 
                    "name": "vapor trail pt2", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=1199" 
                },
                { 
                    "name": "nedrag maets", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=1400" 
                },
                { 
                    "name": "tuentin qarantino", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=1584" 
                },
                { 
                    "name": "end", 
                    "url": "https://youtu.be/xoa8xS_nOv0?t=1732" 
                }
            ],
        },
        "child_sacrifice":{
            "name": "Child Sacrifice",
            "cover": "images/covers/child_sacrifice.png",
            "songs":[
                { 
                    "name": "Sacrificial (Jvnko's Theme)", 
                    "url": "https://youtu.be/Sb6DfOTJg0k" 
                },
                { 
                    "name": "Was It Weird I Listened To I'm God By Clams Casino's When I Lost My Virginity", 
                    "url": "https://youtu.be/Sb6DfOTJg0k?t=128" 
                },
                { 
                    "name": "Personal Purgatory", 
                    "url": "https://youtu.be/Sb6DfOTJg0k?t=510" 
                },
                { 
                    "name": "Rapescape", 
                    "url": "https://youtu.be/Sb6DfOTJg0k?t=691" 
                },
                { 
                    "name": "The Grilled Fish's Ballad", 
                    "url": "https://www.youtube.com/watch?v=loqNdeBmMpU" 
                }
            ],
        },
        "sewerslvt":{
            "name": "Sewer//S***",
            "cover": "images/covers/sewerslvt.png",
            "songs":[
                { 
                    "name": "Sewer", 
                    "url": "https://youtu.be/aZkg4eB24l4" 
                },
                { 
                    "name": "Sanae (Unending Status Quo)", 
                    "url": "https://youtu.be/aZkg4eB24l4?t=270" 
                },
                { 
                    "name": "Cute Panties Soaked in Arizona Iced Tea", 
                    "url": "https://youtu.be/aZkg4eB24l4?t=527" 
                },
                { 
                    "name": "Pretty C***", 
                    "url": "https://www.youtube.com/watch?v=beoNy4MMHTc" 
                },
                { 
                    "name": "Doin' It Right (S******** Remix)", 
                    "url": "https://youtu.be/aZkg4eB24l4?t=926" 
                },
                { 
                    "name": "I Love It When You Suffer", 
                    "url": "https://youtu.be/aZkg4eB24l4?t=1321" 
                },
                { 
                    "name": "Oni", 
                    "url": "https://www.youtube.com/watch?v=a8P8ATq9eFA" 
                },
                { 
                    "name": "NTR Ending (Cardiac Arrest Due to Overdose)", 
                    "url": "https://youtu.be/aZkg4eB24l4?t=1926" 
                },
                { 
                    "name": "Catharsis6:54", 
                    "url": "https://youtu.be/aZkg4eB24l4?t=2124" 
                },
                { 
                    "name": "S***", 
                    "url": "https://youtu.be/aZkg4eB24l4?t=2540" 
                }
            ],
        },
        "starving_slvts_always_get_thier_fix":{
            "name": "Starving s**** always get thier fix",
            "cover": "images/covers/starving_slvts_always_get_thier_fix.png",
            "songs":[
                { 
                    "name": "Starving S*** Overture", 
                    "url": "https://youtu.be/9rIHKgzDOC8" 
                },
                { 
                    "name": "Little Ones", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=457" 
                },
                { 
                    "name": "Cold Steel", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=661" 
                },
                { 
                    "name": "Lips", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=869" 
                },
                { 
                    "name": "Nowhere Past Oblivion", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=1028" 
                },
                { 
                    "name": "Pandora's Box", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=1177" 
                },
                { 
                    "name": "Private Life", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=1522" 
                },
                { 
                    "name": "The Maw", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=1654" 
                },
                { 
                    "name": "Dopamine Rush", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=1822" 
                },
                { 
                    "name": "Witness The Death", 
                    "url": "https://youtu.be/9rIHKgzDOC8?t=2260" 
                }
            ],
        },
        "drowning_in_the_sewer":{
            "name": "Drowning in the sewer",
            "cover": "images/covers/drowning_in_the_sewer.png",
            "songs":[
                { 
                    "name": "RSOD", 
                    "url": "https://youtu.be/u0ZTcAOP9kk" 
                },
                { 
                    "name": "Cyberia lyr1", 
                    "url": "https://youtu.be/HOAKXWTtIuE" 
                },
                { 
                    "name": "Luciferians", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=533" 
                },
                { 
                    "name": "Squids", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=821" 
                },
                { 
                    "name": "Hopelessness", 
                    "url": "https://www.youtube.com/watch?v=DtVR2M5-A-c" 
                },
                { 
                    "name": "S****** In Fragments", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=1457" 
                },
                { 
                    "name": "Nice Ways To Die", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=1727" 
                },
                { 
                    "name": "Cyberia lyr2", 
                    "url": "https://www.youtube.com/watch?v=8g102FVPFKI" 
                },
                { 
                    "name": "Blacklight (feat. Skvllz)", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=2320" 
                },
                { 
                    "name": "Junko Loves You", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=2590" 
                },
                { 
                    "name": "Lolibox", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=2998" 
                },
                { 
                    "name": "177013", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=3508" 
                },
                { 
                    "name": "Death & Humanity", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=3684" 
                },
                { 
                    "name": "Nothingness", 
                    "url": "https://youtu.be/u0ZTcAOP9kk?t=4164" 
                }
            ],
        },
        "infatuation":{
            "name": "Infatuation",
            "cover": "images/covers/infatuation.png",
            "songs":[
                { 
                    "name": "inmisery", 
                    "url": "https://youtu.be/v5SgRo7ARFQ" 
                },
                { 
                    "name": "inlove", 
                    "url": "https://www.youtube.com/watch?v=QsH48MTfnyY" 
                },
                { 
                    "name": "inmelancholy", 
                    "url": "https://youtu.be/v5SgRo7ARFQ?t=258" 
                },
                { 
                    "name": "inpeace", 
                    "url": "https://www.youtube.com/watch?v=0BNsnWppO0k" 
                },
                { 
                    "name": "intheend", 
                    "url": "https://youtu.be/v5SgRo7ARFQ?t=725" 
                },
                { 
                    "name": "newsfromthegarden", 
                    "url": "https://youtu.be/v5SgRo7ARFQ?t=971" 
                }
            ],
        },
        "cyberia":{
            "name": "Cyberia Lyr1+2=3",
            "cover": "images/covers/cyberia.png",
            "songs":[
                { 
                    "name": "Cyberia Lyr1", 
                    "url": "https://www.youtube.com/watch?v=HOAKXWTtIuE" 
                },
                { 
                    "name": "Cyberia Lyr2", 
                    "url": "https://www.youtube.com/watch?v=8g102FVPFKI" 
                },
                { 
                    "name": "Cyberia Lyr3", 
                    "url": "https://youtu.be/WUbdkC6OYg8" 
                }
            ],
        },
        "irly":{
            "name": "IRLY",
            "cover": "images/covers/irly.png",
            "songs":[
                { 
                    "name": "Kawaii Razor Blades (feat. yandere)", 
                    "url": "https://www.youtube.com/watch?v=m-qr6a_7flo" 
                },
                { 
                    "name": "Euphoric Filth (Cheru's Theme)", 
                    "url": "https://www.youtube.com/watch?v=SSrk-KaxpYo" 
                },
                { 
                    "name": "Dysphoria", 
                    "url": "https://youtu.be/Wsz0T6_Wy7Q?t=584" 
                },
                { 
                    "name": "I Really Like You pt1", 
                    "url": "https://www.youtube.com/watch?v=rc2aKrmVNv8" 
                }
            ],
        },
        "draining_love_story":{
            "name": "Draining love story",
            "cover": "images/covers/draining_love_story.png",
            "songs":[
                { 
                    "name": "Love is a Mighty Big Word", 
                    "url": "https://www.youtube.com/watch?v=82vT3ij6-eA" 
                },
                { 
                    "name": "Newlove", 
                    "url": "https://www.youtube.com/watch?v=6fNKDEEKTQw" 
                },
                { 
                    "name": "Yandere Complex", 
                    "url": "https://www.youtube.com/watch?v=jS8tpzzaqXM" 
                },
                { 
                    "name": "Ecifircas", 
                    "url": "https://www.youtube.com/watch?v=3dxwZSQhiiY" 
                },
                { 
                    "name": "Lexapro Delirium", 
                    "url": "https://www.youtube.com/watch?v=1ZSM2L5o0JI" 
                },
                { 
                    "name": "This Fleeting Feeling", 
                    "url": "https://youtu.be/DBejlYvfBF8?t=1530" 
                },
                { 
                    "name": "Swinging In His Cell", 
                    "url": "https://youtu.be/DBejlYvfBF8?t=1741" 
                },
                { 
                    "name": "Mr. Kill Myself", 
                    "url": "https://www.youtube.com/watch?v=RgFaK6ZQifE" 
                },
                { 
                    "name": "Down The Drain (feat. Nurtheon)", 
                    "url": "https://www.youtube.com/watch?v=gfqt52G8HQE" 
                },
                { 
                    "name": "Slowdeath", 
                    "url": "https://www.youtube.com/watch?v=mK6uANkwyW4" 
                }
            ],
        },
        "worthlessness":{
            "name": "Worthlessness",
            "cover": "images/covers/worthlessness.png",
            "songs":[
                { 
                    "name": "Sacrificial (Jvnko's Theme)", 
                    "url": "https://youtu.be/Sb6DfOTJg0k" 
                },
                { 
                    "name": "The Grilled Fishes Balled", 
                    "url": "https://www.youtube.com/watch?v=loqNdeBmMpU" 
                },
                { 
                    "name": "Inlove", 
                    "url": "https://www.youtube.com/watch?v=QsH48MTfnyY" 
                },
                { 
                    "name": "Inpeace", 
                    "url": "https://www.youtube.com/watch?v=0BNsnWppO0k" 
                },
                { 
                    "name": "Intheend", 
                    "url": "https://youtu.be/v5SgRo7ARFQ?t=725" 
                },
                { 
                    "name": "Untitled-Draining-Demo_01", 
                    "url": "https://youtu.be/bhpY721sRSQ?t=1323" 
                },
                { 
                    "name": "Untitled-Draining-Demo_02", 
                    "url": "https://youtu.be/bhpY721sRSQ?t=1772" 
                },
                { 
                    "name": "Untitled-Draining-Demo_03", 
                    "url": "https://youtu.be/bhpY721sRSQ?t=2184" 
                }
            ],
        },
        "tortvred_lesbians_ripped_apart":{
            "name": "T******* lesbians ripped apart",
            "cover": "images/covers/tortvred_lesbians_ripped_apart.png",
            "songs":[
                { 
                    "name": "T******* lesbians ripped apart", 
                    "url": "https://www.youtube.com/watch?v=wGALHz1dqcc" 
                }
            ],
        },
        "if_youre_out_there_i_miss_you":{
            "name": "if you’re out there i miss you ｡ﾟ･ (-﹏-) ･ﾟ｡",
            "cover": "images/covers/if_youre_out_there_i_miss_you.png",
            "songs":[
                { 
                    "name": "dissociating", 
                    "url": "https://www.youtube.com/watch?v=w0tgJ_bPPfE" 
                },
                { 
                    "name": "self destruction worldwide broadcast", 
                    "url": "https://www.youtube.com/watch?v=wbm5K01nDqc" 
                },
                { 
                    "name": "all the joy In life was gone once you left", 
                    "url": "https://www.youtube.com/watch?v=UTwB8iJOux0" 
                }
            ],
        },
        "suffering_from_melancholia":{
            "name": "Suffering from melancholia",
            "cover": "images/covers/suffering_from_melancholia.png",
            "songs":[
                { 
                    "name": "whatever", 
                    "url": "https://www.youtube.com/watch?v=DsBU7bnA1TE" 
                },
                { 
                    "name": "blissful overdose", 
                    "url": "https://www.youtube.com/watch?v=aVg2styW8Bc" 
                },
                { 
                    "name": "inertia status", 
                    "url": "https://www.youtube.com/watch?v=2tJQQsCLcmo" 
                }
            ],
        },
        "the_world_is_fvcked":{
            "name": "The world is fv****",
            "cover": "images/covers/the_world_is_fvcked.png",
            "songs":[
                { 
                    "name": "A Thousand Lonely", 
                    "url": "https://www.youtube.com/watch?v=wV4KEeQMe9Q" 
                },
                { 
                    "name": "MAKE-ME-SAD", 
                    "url": "https://www.youtube.com/watch?v=qqMxcydQmxI" 
                },
                { 
                    "name": "Psychosis", 
                    "url": "https://www.youtube.com/watch?v=oT-0HHd-9Fw" 
                },
                { 
                    "name": "Something Of Value Less Than That", 
                    "url": "https://www.youtube.com/watch?v=877gYU1HKIk" 
                },
                { 
                    "name": "Ruined Snowy Day", 
                    "url": "https://www.youtube.com/watch?v=S3LERiA91CY" 
                },
                { 
                    "name": "I Really Like You pt2", 
                    "url": "https://www.youtube.com/watch?v=NknuSpM0ji0" 
                },
                { 
                    "name": "Jvnko Still Loves You", 
                    "url": "https://www.youtube.com/watch?v=XctSlhQvaGg" 
                }
            ],
        },
        "skitzofrenia_simulation":{
            "name": "Skitzofrenia Simulation",
            "cover": "images/covers/skitzofrenia_simulation.png",
            "songs":[
                { 
                    "name": "My Fvcked Up Head", 
                    "url": "https://www.youtube.com/watch?v=tbg1zTIh1Fk" 
                },
                { 
                    "name": "I Break My Heart & Yours", 
                    "url": "https://www.youtube.com/watch?v=okexncZUqlA" 
                },
                { 
                    "name": "Looming.Sorrow.Descent", 
                    "url": "https://www.youtube.com/watch?v=x1P_0mUsBJ0" 
                },
                { 
                    "name": "I Bleed", 
                    "url": "https://www.youtube.com/watch?v=T0itB679P04" 
                },
                { 
                    "name": "Restlessness", 
                    "url": "https://www.youtube.com/watch?v=dSUkdBIKVSk" 
                },
                { 
                    "name": "Existing Everywhere", 
                    "url": "https://www.youtube.com/watch?v=iorob_r4mP4" 
                },
                { 
                    "name": "Car Accident", 
                    "url": "https://www.youtube.com/watch?v=ygT0LuG_WJY" 
                },
                { 
                    "name": "Purple Hearts In Her Eyes", 
                    "url": "https://www.youtube.com/watch?v=dTh4cp_ypu4" 
                },
                { 
                    "name": "Slvtcrvsher", 
                    "url": "https://www.youtube.com/watch?v=ev2xdPRAiqM" 
                },
                { 
                    "name": "Ecocide Suite", 
                    "url": "https://www.youtube.com/watch?v=nMHHNSbco_8" 
                },
                { 
                    "name": "Antidepressant", 
                    "url": "https://www.youtube.com/watch?v=Tj9CS87WcQ4" 
                },
                { 
                    "name": "Never Existed", 
                    "url": "https://www.youtube.com/watch?v=qi6Pj0l7evA" 
                },
                { 
                    "name": "Blooming Iridescent Flower", 
                    "url": "https://www.youtube.com/watch?v=100g5RBV18c" 
                },
                { 
                    "name": "With You Forever", 
                    "url": "https://www.youtube.com/watch?v=dCGodi8Vup4" 
                }
            ],
        },
        "we_had_good_times_together_dont_forget_that":{
            "name": "We had good times together don't forget that",
            "cover": "images/covers/we_had_good_times_together_dont_forget_that.png",
            "songs":[
                { 
                    "name": "dissociating", 
                    "url": "" 
                },
                { 
                    "name": "self destruction worldwide broadcast", 
                    "url": "" 
                },
                { 
                    "name": "all the joy in life was gone once you left", 
                    "url": "" 
                },
                { 
                    "name": "the last thing she sent me", 
                    "url": "https://www.youtube.com/watch?v=GztyGZV1gIc" 
                },
                { 
                    "name": "light at the end of the tunnel", 
                    "url": "https://www.youtube.com/watch?v=CSC_Dx7T6KM" 
                },
                { 
                    "name": "ultradespair", 
                    "url": "https://www.youtube.com/watch?v=dWn5DBo33ds" 
                },
                { 
                    "name": "borderline", 
                    "url": "https://www.youtube.com/watch?v=5WcH9VtKLiE" 
                },
                { 
                    "name": "whatever", 
                    "url": "https://www.youtube.com/watch?v=DsBU7bnA1TE" 
                },
                { 
                    "name": "blissful overdose", 
                    "url": "https://www.youtube.com/watch?v=aVg2styW8Bc" 
                },
                { 
                    "name": "interia status", 
                    "url": "https://www.youtube.com/watch?v=2tJQQsCLcmo" 
                },
                { 
                    "name": "die alone", 
                    "url": "https://youtu.be/GU0Rkwm7lY4?t=3172" 
                },
                { 
                    "name": "sick, twisted, demented", 
                    "url": "https://www.youtube.com/watch?v=xXC5RT106pw" 
                },
                { 
                    "name": "her", 
                    "url": "https://www.youtube.com/watch?v=r5xjh7vF-HM" 
                },
                { 
                    "name": "goodbye", 
                    "url": "https://www.youtube.com/watch?v=ABBpsy6rlVU" 
                }
            ],
        }
    }
    const album = data[urlName];
    const container = document.getElementById('content');
    setTimeout(function() {
        container.innerHTML = `
            <div class="fullalbum">
                <div style="background-image: url('${album.cover}');" class="albumcover"></div>
                <div class="albuminfo">
                    <h1>${album.name}</h1>
                    <table>
                        <tbody>
                            ${album.songs.map(song => `
                                <tr class="table">
                                    <td>${song.name}</td>
                                    <td><div class="ytbutton" onclick="goTo('${song.url}')"></div></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }, 1200);
    const back = document.getElementById('back');
    setTimeout(function() {
        back.classList.add('animate-back');
    }, 1200);
});
