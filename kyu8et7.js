/*
   Kyu 8 : Pre-FizzBuzz Workout #1

   This is the first step to understanding FizzBuzz.

    Your inputs: a positive integer, n, 
    greater than or equal to one. 
    n is provided, you have NO CONTROL over its value.

    Your expected output is an array of positive integers
     from 1 to n (inclusive).

    Your job is to write an algorithm that gets you 
    from the input to the output.
*/

function preFizz(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

/*
    Autres solutions :

    let preFizz = n => [...Array(n)].map((x, i) => i+1);

    const preFizz = n => Array.from({length: n}, (_, i) => i + 1)
*/

// kyu 7 : Paul's Misery

function paul(x) {
    const activitees = { 'Petes kata': 10, 'kata': 5, 'eating': 1, 'life': 0 };
    const miseryScore = x.reduce((s, a) => s + activitees[a], 0);
    switch (true) {
        case miseryScore < 40: return 'Super happy!';
        case miseryScore < 70: return 'Happy!';
        case miseryScore < 100: return 'Sad!';
        default: return 'Miserable!';
    }
}

// kyu 7 : Billiards pyramid
function pyramid(balls) {
    return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
}

// kyu 7 : Drone Fly-By
function flyBy(lamps, drone) {
    lamps = lamps.split('');

    for (let i = 0; i < drone.length; i++) {
        if (lamps[i] === 'x') lamps[i] = 'o';
    }

    return lamps.join('');
}

// kyu 8 : even or odd
function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
