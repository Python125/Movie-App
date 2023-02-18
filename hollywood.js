  window.onload = function() {
    let btn = document.getElementById('btn');
    let output = document.getElementById('output');
    let quotes = [
  
        '"<b><i>Mother of Mercy! Is this the end of Rico?</i></b>" <br><br> Caesar Enrico Bandello - played by <u>Edward G. Robinson</u> <br><br> (<i>Little Caesar</i>, <b>1931</b>)',
        '"<b><i>I never drink... wine.</i></b>" <br><br> Count Dracula - played by <u>Bela Lugosi</u> <br><br> (<i>Dracula</i>, <b>1931</b>)',
        '"<b><i>Listen, Little Boy, in this business there`s only one law you gotta follow to keep out of trouble: Do it first, do it yourself, and keep on doing it.</i></b>" <br><br> Tony Camonte - played by <u>Paul Muni</u> <br><br> (<i>Scarface</i>, <b>1932</b>)',
        '"<b><i>I can see you right now in the kitchen, bending over a hot stove. But I can`t see the stove.</i></b>" <br><br> Rufus T. Firefly - played by <u>Groucho Marx</u> <br><br> (<i>Duck Soup</i>, <b>1933</b>)',
        '"<b><i>Alone: bad. Friend: good!</i></b>" <br><br> The Monster - played by <u>Boris Karloff</u> <br><br> (<i>Bride of Frankenstein</i>, <b>1935</b>)"',
        '"<b><i>When I invite a woman to dinner I expect her to look at my face.</i></b>" <br><br> Otis B. Driftwood - played by <u>Groucho Marx</u> <br><br> (<i>A Night at the Opera</i>, <b>1935</b>)',
        '"<b><i>It seems I`m always ringside at the first fight... and the last.</i></b>" <br><br> Louise `Fluff` Phillips - played by <u>Bette Davis</u> <br><br> (<i>Kid Galahad</i>, <b>1937</b>)',
        '"<b><i>To be afraid, you gotta have a heart. I don`t think I got one. I had that cut out of me a long time ago.</i></b>" <br><br> Rocky Sullivan - played by <u>James Cagney</u> <br><br> (<i>Angels with Dirty Faces</i>, <b>1938</b>)',
        '"<b><i>Toto, I`ve a feeling we`re not in Kansas anymore.</i></b>" <br><br> Dorothy - played by <u>Judy Garland</u> <br><br> (<i>The Wizard of Oz</i>, <b>1939</b>)',
        '"<b><i>Frankly, my dear, I don`t give a damn.</i></b>" <br><br> Rhett Butler - played by <u>Clark Gable</u> <br><br> (<i>Gone with the Wind</i>, <b>1939</b>)',
  
        '"<b><i>Rosebud.</i></b>" <br><br> Charles Foster Kane - played by <u>Orson Welles</u> <br><br> (<i>Citizen Kane</i>, <b>1941</b>)',
        '"<b><i>Of all the gin joints, in all the towns, in all the world, she walks into mine.</i></b>" <br><br> Rick - played by <u>Humphrey Bogart</u> <br><br> (<i>Casablanca</i>, <b>1942</u>)',
        '"<b><i>Here`s looking at you, kid.</i></b>" <br><br> Rick - played by <u>Humphrey Bogart</u> <br><br> (<i>Casablanca</i>, <b>1942</b>)',
        '"<b><i>My great aunt Jennifer ate a whole box of candy every day of her life. She lived to be 102 and when she`d been dead three days she looked better than you do *now!*</i></b>" <br><br> Sheridan Whiteside - <u>Monty Woolley</u> <br><br> (<i>The Man Who Came to Dinner</i>, <b>1942</b>)',
        '"<b><i>Public enemy, he calls me!</i></b>" <br><br> Johnny Rocco - played by <u>Edward G. Robinson</u> <br><br> (<i>Key Largo</i>, <b>1948</b>)',
        '"<b><i>Made it, Ma! Top of the world!</i></b>" <br><br> Cody Jarrett - played by <u>James Cagney</u> <br><br> (<i>White Heat</i>, <b>1949</b>)',
    ];
  
    btn.addEventListener('click', function(){
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        output.innerHTML = randomQuote;
    });
};
