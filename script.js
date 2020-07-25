let btn = document.getElementById('btn');
let output = document.getElementById('output');
 
let quote =
[
    '"On la connaît la logique de l équipe de France. Quand vous gagnez, c est la France Black-Blanc-Beur qui triomphe puis dès que vous perdez, c est : ça suffit y a trop d étranger dans l équipe." - Président BOBO',
    '"L oiseau sur le baobab ne doit pas oublier qu il a porté des lunettes ! " - Président BOBO ',
    '"Depuis l Algérie, je me suis rarement aussi bien senti dans un pays d Afrique. " - Un blanc con !! ',
    '"- Je veux être la Kate Middleton botswangaise  \n- Tu t es regardée ? Avec tes grosses fesses comme l hippopotame... Kate Middleton?! Non " - Président BOBO ',
    '"La mangue qui quitte de l arbre ne dois jamais oublier qu elle tombera par terre " - Président BOBO ',
    '"le crocodile n attends pas que le gorille accouche " - Président BOBO ',
    '" si le soleil s est levé c est que le lune s est couché " - Président BOBO ',
    '"Il est tombé comme du n importe quoi on dirait une girafe qui s entremêle les pattes " - Président BOBO ',
    '"Je suis le Fils de Léopold babimbi coq 1er je suis d une ethnie fier & j ai porté le noeud papillon dès l âge de 5ans " - Président BOBO ',
    '"Bientôt j aurais ma nounou blanche et sans papier en plus  " - Président BOBO ',
    '"La chenille ne doit pas oublier qu elle a portée des lunettes quand elle boit l eau " - Président BOBO ',
    '"Qui a fait plus pour l image de la Colombie que Shakira, un grand joueur!! " - Président BOBO ',
    '"Aussi pressé que soit la mouche elle attent d abord que l escrément sort " - Président BOBO ',

];


btn.addEventListener('click',proverbe);
function proverbe() {
    let randomQuote = quote[Math.floor(Math.random() * quote.length) ]
    output.innerHTML = randomQuote;

}