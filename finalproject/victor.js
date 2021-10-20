let game = () => {
    let lifes = 4;
    let bullets = 3;
    let rope = 0;

    alert(`Hi player 1, Welcome to my PB project. `)
    let name = window.prompt("At first place, please, say me your name:")
    if (window.confirm(`Greeting ${name}, welcome to my first game: Do you wanna play "The Loop?"`)) {
        alert(`So let's go. By the way: All texts are translations by Deepl.com, my English is not good enough to narrate so much rubbish. Enjoy!`)
        alert(`You find yourself in the desert, in the middle of nowhere. You can't remember how long you've been walking in it. Your clothes and body are covered by a perennial layer of dust, and in your mind there is only one purpose. To catch up and kill The Man in Black.`)
        beginning()    
    };
    //-------------------------------------------------------------------------------------------------------------------------------------------

        


    // beginning with only three direction

        function beginning() {
            alert(`To the "west" rises a small mountain. The inexorable desert continues to "north". To the "east", a storm cloud of dust looms in the distance.`)
                let beginningDirection = window.prompt(`you decide where to go, ${name}: "west" (mountain), "north" (desert) or "east" (storm)?`)
                
                    if (beginningDirection === "west") {
                        alert(`You head towards the mountain, and a cave opens up on the lower slope. The cave is dark, and a foul smell escapes through the cold stream.`)
                        alert(`You take a look at yourself. Your shotgun has ${bullets} shells, and you have ${lifes} lives. You can go inside, or go back.`)
                        caveDirection()
                            
                    } if (beginningDirection === "north") {
                                alert(`you go to the North.`)
                                alert(`The dry desert stretches to the horizon. It is not the kind of sandy desert that could be restored to life with enough water. This desert is irretrievable, it is a piece of land that can only get worse, drier, and deader.`)
                                alert(`You continue on your way, feeling the wind of the storm at your back. As the hours pass in the dry desert, the fatigue sets in and you begin to wonder if continuing in this direction was the best option.`)
                                inDesert()
                                
                    } if (beginningDirection === "east") {
                                alert(`you decide to go east. Normally you wouldn't head into a storm, but there is something special about this one, something that draws you to it.`)
                                alert(`The wind picks up. Your hat falls to your back, held in place by the ribbons. Dust begins to penetrate all your orifices, and you pull up the scarf tied around your neck.`)
                                inToTheStorm()
                                
                    } else {
                                beginning()
                    }
                }
                

    // West way
    
        function caveDirection() { let direction = window.prompt(`${name}, will you go "in", or will you go "back"?`)
            if(direction === "in") {
                alert(`You enter the cold cave, the stench becomes unbearable as you cross the threshold. You grip your shotgun as you have so often done, feeling its weight.`)
                alert(`You hear a roar a few steps away. Too far away in the darkness to see where it comes from, and too close to know that you are in danger.`)
                alertDecision()    

            }if (direction === "back") {
                alert(`You retrace your steps. You wouldn't have lived so many years if you hadn't been cautious. `)
                beginning()
            }else {
                caveDirection()
                } 
        }

        function alertDecision() {
            let decision = window.prompt(`do you decide to "run" away or "shoot"?`) 
            if (decision === "run") {
                alert(`You run back to the cave door, it's time to think again.`)
                caveDirection();
            }if (decision === "shoot") {
                    if (bullets === 0) {
                        alert(`Click click click! How stupid can you be, have you forgotten to count the shells in your shotgun? lifes -1`)
                        lifes -= 1;
                        alert(`${lifes} lifes, ${bullets} shells`);
                            if (lifes === 0) {
                                alert(`Your life is expiring, you have received more than a person can bear.`)
                                alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                                theLoop()
                                } 
                            }else {
                                shoot(-3)                            
                            }
                }
            }

        function shoot(dif) {
            let x = (Math.random()*10).toFixed(2);
            alert(`result: ${x}`)
            if (5 + dif > x ) {
                alert(`SUCCESS! Your shot hits the target. The animal in the darkness writhes and writhes in agony, mortally wounded.`)
                bullets -= 1;
                alert(`You approach the immobile creature, which turns out to be a big cat. Damn, that's scary.`)
                alert(`Under the remains of the ¿Puma?, a half-eaten body of a man can be distinguished. He wears a belt with four precious shotgun shells, and a corroded rope.`)
                alert(`You take everything you have found, leave the cave and go back.`)
                bullets += 4;
                rope += 1;
                alert(` With ${lifes} lifes, ${bullets} shells, you retrace your steps.`)
                beginning();
            }else {
                alert(`FAIL! You miss your shot, the creature lunges at you and tears at your skin with its claws.`)
                bullets -= 1;
                lifes -= 1;
                alert(`${lifes} lifes, ${bullets} shells`)
                    if (lifes === 0) {
                        alert(`Your life is expiring, you have received more than a person can bear.`)
                        alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                        theLoop()
                    } else {
                        alertDecision()
                    }
                    
                }
            };





    // North Way    
    
        function inDesert() {
            let decision = window.prompt(`Do you want to go "forward" and face the heat of the desert, or do you want to go "back"?`)
            if (decision === "forward"){
                lifes -= 1;
                alert(`The heat is very intense, and thirst increases. Lives -1:  ${lifes} lifes, ${bullets} shells`)
                if (lifes === 0) {
                    alert(`Your body gives up, for the first time in your life your will is not imposed on it. Your knees bend and your face caresses the dry desert. Don't blame yourself for your death, you're just another one who bites the dust. ( lo siento, era demasiado fácil :P )`)
                    alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                    theLoop();
                }else { 
                    alert(`You keep going forward in spite of your tiredness, this is no time to turn back, now that the end is so near.`)
                    alert(`The hours pass in the desert, and the kilometers under your boots. In the distance you can make out the remains of buildings. It was hardly a village, now it is just walls that barely support a vestige of a roof.`)
                    village();    
                }
            }
            if (decision === "back") {
                lifes -= 1;
                alert(`The heat is very intense, and thirst increases. Lives -1: ${lifes} lifes, ${bullets} shells`)
                if (lifes === 0) {
                    alert(`Your body gives up, for the first time in your life your will is not imposed on it. Your knees bend and your face caresses the dry desert. Don't blame yourself for your death, you're just another one who bites the dust. ( lo siento, era demasiado fácil :P )`)
                    alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                    theLoop()
                
                }else { beginning() }
            }
            else{ inDesert() }
        }

        function village() {
            let villageDecision = window.prompt(`The ruins lie to one side of your path. Do you decide to go closer to "investigate" or "continue" onwards?`)
            if (villageDecision === "investigate") {
                alert(`You decide to enter the village, there can always be something to help you survive, and no risk, no gain.`)
                alert(`On the floor of one of these ruins, the remains of a bonfire are spread out. No doubt someone slept there last night, and from the layout of everything, it was the man in black. You are on the right track.`)
                alert(`At the end of the ill-named village, invisible from the road, a medium-sized hole looms. Around it, the wooden remains of what could have been a mill can be seen above the well. If I had a rope...`)
                if (rope === 0) {
                    alert(`You return desolate to the entrance of the village, there is nothing more to see.`)
                    village();
                } if (rope === 1) {
                    ropeInWell();    
                }
            }
            if (villageDecision === "continue") {
                alert(`you continue on your way leaving the ruins behind you.`)
                alert(`As you walk, the sun goes down and the temperature becomes more pleasant, you look for and find a good place to spend the night, light a fire and lie down to sleep. `)
                alert(`and you fall asleep...`)
                chacal();
                
            }
            else {
                village()
            }
        }

        function ropeInWell() {
            let useRope = window.prompt(`Do you want to tie the rope and go "down" the well, or do you prefer to go "back" the path?`)
            if (useRope === "down") {
                alert(`You tie the rope to the dry roots of a hollow tree, secure the rope around your waist and start your descent. `)
                descent()
                
            }
            if (useRope === "back") {
                alert(`This is no time to gamble your life on a rotten rope.`)
                alert(`You return to the entrance of the village, there is nothing more to see.`)
                village();
            }
            else {ropeInWell()}
        }

        function descent() {
            let x = (Math.random() * 10).toFixed(2)
            alert(`result: ${x}`)
            if (x > 6) {
                alert(`FAIL!, Halfway through, the rope gives way under your weight and breaks. You fall face first to the floor of the shaft.`)
                lifes -= 1;
                alert(`${lifes} lifes, ${bullets} shells`)
                if (lifes === 0) {
                    alert(`the fall shatters your back. Your vision blurs with pain, and suddenly you feel the breath of a big animal on your neck. Unable to move, you reflect on the cruelty of the world you are living in. `)
                    alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                    theLoop()
                
                }else {
                    alert(`The fall numbs your leg. FUCK! Let's hope it's nothing more serious.`)
                    inToTheCave()
                }
            } else {
                alert(`SUCCESS! You descend slowly down the rope and land softly on muddy ground. You examine the rope and realise that today has been its last day of use. `)
                inToTheCave();
            }
        }
        
        function inToTheCave() {
            alert(`You look around you as your eyes get used to the darkness. The cave is wide and on one side there is a deep pool of water, on the other side opens a large cavity in the stone. From here you can't tell how deep it is.`)
            alert(`Your mind fantasies about drinking the water when a growl is heard from the wall cavity.`)
            alert(`A huge animal emerges from a large cavity in the rock. A bear glares at you and roars at the top of its lungs. Its roar bouncing off the rock walls is deafening.`)
            alert(`you analyse your options: fight or fight. You pick up your shotgun and think: "It's your time my friend"`)
            bearFight();           
        }

        function bearFight(){
            if (bullets === 0) {
                alert(`Click, click , click! You knew this would happen because you have no shells, but no one is going to take away the honour of dying with your shotgun in your hands, pulling the trigger and cursing the creature and the world around you until your last breath.`)
                alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                theLoop()

            } else {
                bearShoot(-1)
            }
        };

        function bearShoot(dif) {
            alert(`Your shotgun thunders once again`)
            let x = (Math.random()*10).toFixed(2);
            alert(`result: ${x}`)
            if (x < 5 + dif) {
                alert(`SUCCES! Your shot hits exactly one of its eyes, turning it red. In the perfect way to honour the price of a slug, you drive it into its brain, turning it to mush.`)
                bullets -= 1;
                alert(`${lifes} lifes, ${bullets} shells`)
                alert(`You don't remember the last time you had plenty of food and water. Even though you feel that your journey is almost over, you don't miss the opportunity to feast. This succulent food comforts your body: +2 lives`)
                lifes += 2;
                alert(`${lifes} lifes, ${bullets} shells`)
                alert(`You enter the path from where the bear emerge, and enter the darkness. The cavity forms a straight corridor. You walk and walk and walk...`)
                alert(`and walk`)
                alert(`After what seems like an eternity suddenly the tunnel ends, and in the middle of the far wall there is a door, yes a door.`)
                alert(`When you open the door, light enters the tunnel, leaving you totally blinded. After a while, you can see that you are on the side of a huge crater, and in the centre of this crater, rises a surprisingly huge tower the colour of ebony. All your instincts are pushing you towards that tower.`)
                alert(`Is this the first time you have seen this tower?`)
                tower();

            }else {
                alert(`FAIL! The terribear creature (sorry) escapes in one swift movement and lunges at you with its claws out in front of it. It sinks its jaws into your flesh and makes you scream in pain.`)
                bullets -= 1;
                lifes -= 1;
                alert(`${lifes} lifes, ${bullets} shells`)
                    if (lifes === 0) {
                        alert(`The mighty animal leaves you lying on the ground. You feel its foul breath on your face and its dripping drool falls on you. Bad way to die...`)
                        alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                        theLoop()
                    }else{
                        alert(`You recover and get back on your feet quickly`)
                        bearFight()
                    }              
            }   
        } 

        function chacal() {
                alert(`You wake up alert, there are small animal-like sounds all around you.`)
                alert(`you can watch as a pack of small chacals start to approach you. Under normal circumstances they would not approach the fire, they are hungrier than you. `)
                chacalFight()
                
        }

        function chacalFight() {
            let x = window.prompt(`what do you want to do ${name}?, try to "scare" them by shouting at them, or try to "shoot" one of them. `)
            if ( x === "scare") {
                y = (Math.random() * 10).toFixed(2)
                alert(`result: ${y}`)
                if ( y > 5) {
                    alert(`SUCCESS! You scare off the canids without any problems, it is clear that they were not hungry enough to confront you.`)
                    alert(`you lie down again and go back to sleep until the next day.`)
                    nextMorning()
                }else {
                    alert(`FAIL! Your screams don't scare them and they keep coming at you from all sides.`)
                    chacalFight()
                }
            }
            if ( x === "shoot") {
                let y = (Math.random() * 10).toFixed(2)
                alert(`result: ${y}`)
                if ( y < 7) {
                    alert(`SUCCESS! Bang! you hit one of them. The intense noise of your shot and the dying screams of the fallen cause the rest to flee. It looks like you're finally going to get some dinner.`)
                    alert(`you cook the fallen, and eat it by the light of the bonfire. As you are eating you see a single animal approach the border between the light and the dark. It stares at you and sits peacefully opposite you. You toss him the skeletal remains of his companion, and he eats them without hesitation. `)
                    lifes +=1;
                    bullets -=1;
                    alert(`${lifes} lifes, ${bullets} shells`)
                    nextMorning()
                  
                } else {
                    alert(`FAIL! You miss the shot, but the roar of your shotgun causes the animals to lose all interest in your flesh. You lie down again and go back to sleep until the next day.`)
                    bullets -= 1;
                    alert(`${lifes} lifes, ${bullets} shells`)
                    nextMorning()
                }
            }
            else {chacalFight()}
    }

        function nextMorning() {
            alert(`wakes you up before the sun rises over the horizon. It's a new day in the desert. You pick up your small luggage, pull on your boots and start walking again.`)
            alert(`The sun is already high when you discern on the horizon what looks like a black line behind a small rise. As you get closer the line ends up defining itself as an imposing building of a dark, almost black colour. As you climb the rise you find yourself standing atop a huge crater, the centre of which is the imposing tower. Your every instinct is to head towards the tower.`)
            tower()
        }

        

        

          

    // East Way

        
        function inToTheStorm() {                
            let x = window.prompt(`Each time the objects that the wind blows and hit you are bigger. There is still time to go back, and you wonder whether it is better to go "back" or to "continue".`)
            
            if (x === "back") {
                let y = (Math.random() *10).toFixed(2)
                alert(`result: ${y}`)
                if (y > 5) {
                    alert (`SUCCESS! you manage to retrace your own steps and get out of the damn storm, it's better to choose another way.`)
                    beginning()
                } else {
                    alert (`FAIL! it is impossible to go back, you have totally lost your sense of direction. For a moment you fall prey to despair, but it soon passes. If you can't go back, you will go forward.`)
                    stormContinue()
                }
            }

            if (x === "continue") {
                alert (`There is something about this storm that makes you think you are on the right track. Nothing is going to stop you now.`)
                stormContinue()   
            }

            else { inToTheStorm() }
        }

        function stormContinue(){
            alert(`You continue to walk through the storm, hit by all kinds of objects that are hardly visible. A furry ball hits you as it lets out a desperate mewl. A huge creature, emitting a deafening siren, passes by you just inches away and is instantly silenced. Suddenly it is a groan that you hear, and instantly you feel a huge mass of flesh brutally slamming into you and knocking you to the ground. That gene hit makes you lose a life.`)
            alert(`you lose consciousness`)
            lifes -= 1;
            alert(`${lifes} lifes, ${bullets} shells`)
            if (lifes === 0) {
                alert(`As you remain unconscious, the earth covers your body and you end up suffocating.`)
                alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                theLoop()
            } else {
                alert(`You wake up and find yourself in a patch of desert surrounded by storm walls. Through it you see all kinds of creatures and objects, from houses to animals, passing by, but on your side of the wall it is absolutely calm. `)
                alert(`above your head, the sky is dark and full of stars circling in a strange cycle. And in the middle of the hurricane's eye stands a mirror. The full-length mirror reflects nothing of what unfolds beside me, but shows different landscapes, sometimes a desert, sometimes a cavern, sometimes ruins and sometimes a dark tower.`)
                alert(`You put your hand close to the mirror and your fingers go into it. You have to pull it out quickly because you feel that the mirror is sucking you in tightly. `)
                inToTheMirror()   
            }
        };

        function inToTheMirror() {
            let x = window.prompt(`Do you decide to try to go "back" to the storm and return to the starting point or do you decide to go into the "mirror"?`)

            if ( x === "back") {
                alert(`you walk away from that damn mirror. The last thing you would do is get inside such an object. You gain momentum and smash through the storm wall.`)
                alert (`The wind in that part of the storm is brutal. It sucks you in hard and blows you into the air. You start to spin around and lose your orientation completely. You see a thousand objects pass by you and you lose track of time.`)
                // posible continuación
                alert(`you suddenly emerge from the storm with a brutal force, a few dozen metres above the ground. Time to enjoy the views of what will be the last few metres of your journey.`)
                alert(`As your vision blurs, a wicked laugh sounds in the depths of your head. A terrifyingly familiar laugh.`)
                theLoop()
            }
            

            if ( x === "mirror") {
                alert(`you step into the mirror, first the palms of your hands, then your arms and then your whole body is absorbed. You see yourself floating surrounded by darkness and small lights, like stars, your body is propelled, leaving the small lights behind but others appear from the front. You feel yourself going faster and faster. Your body can't take the pressure of the speed and you close your eyes.`)
                let y = Math.floor(Math.random() * 4);
                if (y === 0) {
                    alert(`Suddenly you open your eyes and surprisingly you find yourself in the same place where you were this morning.`)
                    alert(`${lifes} lifes, ${bullets} shells`)
                    beginning()
                }
                if (y === 1) {
                    alert(`Suddenly you open your eyes and find yourself in front of a mountain with a cave in front of you, from where a cold stream with a foul smell comes out.`)
                    alert(`${lifes} lifes, ${bullets} shells`)
                    caveDirection()
                }
                if (y === 2) {
                    alert(`Suddenly you open your eyes and surprisingly you find yourself in the middle of the desert. Ahead lies a road, and on one side of the road you see the ruined remains of an ancient village.`)
                    alert(`${lifes} lifes, ${bullets} shells`)
                    village()
                }
                if (y === 3) {
                    alert(`Suddenly you open your eyes and find yourself surprisingly on top of an elevation that forms a huge crater. In the centre of the crater rises an impressive dark tower. And your instinct makes you want to get closer and closer to it.`)
                    tower()
                }
            }

            else { inToTheMirror() }
        }

    // THE FINAL BATTLE ----------------------------------------------------------------------------------------------------------------   
        
        function tower() {
            alert(`You approach the tower, determined to enter. Inside you feel that here lies the reason for your journey. Inside the tower a huge spiral staircase winds its way up to the top of the tower. You rise the staircase with determination.`)
            alert(`and you continues rising`)
            alert(`and you continues rising`)
            alert(`and you continues rising`)
            alert(`At the top of the staircase is the roof of the tower. From there you can see all parts of this strange world. Caves in the mountains, abandoned villages, strange storms... and at the end of the terrace, looking towards the horizon is...`)
            alert(`The Man in Black!!!`)
            alert(`He turns around and says to you: Hey ${name}, How You Doin?!`)
            alert(`the man in black begins to laugh, a deep laughter that gradually gets out of control.`)
            MIB()  
        }  

        function MIB() {
            let x = window.prompt(`What do you decide to do with "The Man in Black": "insult" him, "push" him, or "shoot" him.`)
            if ( x === "insult") {
                alert(`You puff your lungs out and scream at the top of your lungs:`)
                alert(`Mira "man in black", yo Me CAGO EN TU PUTÍSIMA MADRE, EN TU PUTÍSIMO PADRE Y EN TODO LA MANCHA DE CABRONAZOS QUE SON TUS JODIDOS MUERTOS!!!`)
                alert(`after your insult you feel especially good. You gain 1 life. But he keeps laughing.`)
                alert(`${lifes} lifes, ${bullets} shells`)
                alert(``)
                MIB()
            }
            if ( x === "shoot") {
                if (bullets === 0) {
                    alert(`Shit, I'm out of bullets!`)
                } else {
                    let y = (Math.random()*10).toFixed(2);
                    alert(`result: ${y}`)
                    alert(`FAIL! "The man in black" dodges the bullet in one swift movement as he laughs loudly at you.`)
                    bullets -= 1;
                    alert(`${lifes} lifes, ${bullets} shells`)
                    MIB()
                }
            }
            if ( x === "push") {
                alert(`You can't stand his laughter any longer, and you throw yourself at him with all your might, ready to knock him down.`)
                alert(`You push him with all your might, but he skilfully grabs your arm and drags you down. As you fall down the tower, he comes close to your ear, and says to you:`)
                alert(`YOU WILL...`)
                alert(`...NEVER ESCAPE...`)
                alert(`...FROM THE LOOP`)
                alert(`His laughter echoes in your head until the last moment.`)
                theLoop()
            }
            else { MIB() }
        }

        function theLoop() {
            lifes = 4;
            bullets = 3;
            rope = 0;
            alert(`You shake your head to recover from the dizziness that overcomes you.`)
            alert(`You find yourself in the desert, in the middle of nowhere. You can't remember how long you've been walking in it. Your clothes and body are covered by a perennial layer of dust, and in your mind there is only one purpose. To catch up and kill The Man in Black.`)
            alert(`Damn!, a strange feeling of deja vu is running through your mind.`)
            alert(`${lifes} lifes, ${bullets} shells.`)
            beginning()
        }
} //program finish
                
        
game()