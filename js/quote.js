




const qoutes = [
'There is a pillow in the world softer than a mother\'s bosom, and no rose is more beautiful than her socket "Shakespeare"' ,
'Iwas never reassured until I was in my mother\'s lap "Socrates"' , 
'Write the best of what you hear, memorize the best of what you write, and speak the best of what you hear "Ibn al-Muqaffa"', 
'If God wants evil for a people, He grants them controversy and prevents them from working "Amr Ibn Al-Khattab"', 
'A dry bite and peace with it.. is better than a house full of sacrifices with a quarrel "Solomon the Wise"', 
'No one is more miserable than the one for whom indecisiveness has become his only habit "William James"', 
'If you don\'t try to do something beyond what you\'ve mastered, you never get ahead "Ronald Esport"', 
'When I build a team I always look for people who love to win, and if I can\'t find any of them I look for people who hate defeat"Ross Pruitt"', 
'The greatest discovery of my generation, is that a person can change his life, if he can change his mental attitudes "William James"', 
'The only answer to defeat is victory "Winston Churchill"', 
'Perhaps one of the wonders of life is that if you reject everything that is below the top, you will always reach it "Somerset Maugham"', 
'What the sublime man seeks is in himself, while the low man seeks what others have "Confucius"', 
'You have to do the things you think you cannot do "Roosevelt"', 
'He who lives in fear will never be free "Horace"', 
'The world makes way for one who knows where he is going "Ralph Emerson"', 
'A human without a goal is like a ship without a rudder both will end up on the rocks "Thomas Carlyle"', 
'Goals are not only necessary to motivate us, they are really essential to our survival "Robert Schuller"', 
'The most humble of scholars are the most knowledgeable, just as the low place is the most watery spot "Ibn Al Moataz"', 
' Scholars learn what others have written. As for the Messenger of God, he is illiterate. He taught mankind what to write. "Abdulwahab Al-Tariri"', 
'Whoever sits with scholars increases his knowledge and improves his manners "Jafar Al-Sadiq"', 
'Do not be one of those who gather the knowledge of the scholars, the wisdom of the wise, and run in the course of fools. "Hassan Al Basri"', 
'The Americans, Europeans and Iraqis tried to buy Soviet scientists. But the pride of the starving Russian people has rejected this insult  "Anais Nin"', 
'Individual judgment, like a jealous woman, does not stand to see the great, and does not weigh the fates of scholars. "Mohammed Al-Ghazali"', 
'Kings are rulers over people, and scholars are rulers over kings. "Ali bin Abi Talib"', 
'You should remember that every age has its prophets, and the prophets of this age are the scholars. "Naguib Mahfouz"', 
'The corruption of scholars is from negligence, the corruption of princes is from injustice, and the corruption of the poor is from hypocrisy "Naguib Mahfouz"', 
'The profession of academic scholars and the delusion of the novel fools "Anas Ibn Malik"', 
'Scientists have become the bearers of the lamp of discovery in our quest for knowledge. "Stephen Hawking"', 
'When you speak, philosophers fall into my eyes, scholars falter, poets falter. "Atheer Abdullah Al-Nashmi"', 
'Scholars are strangers to the abundance of ignorant among them.  "Mohammed Al-Jawad"', 
'I hope that one day scientists will be considered heroes instead of Haifa Wehbe. "Walter Isaacson"', 
'It has reached me that the immoral scholars will begin with them on the Day of Resurrection before they worship idols. "Al-Fadil bin Ayyad"', 
' Only the pious eat your food, and consult the scholars in your matter. "the wise Luqman"', 
'Scholars know that they do not realize everything, but they often recognize nonsense if they are about to fall into it. "Francis Crick"', 
'We can make mayors and officers every year, but not scholars. "Robert Burton"', 
'Some dreamers demand that scientists discover only things that can be used for good. "John Charles Polanyi"', 
'The film must be looked at directly, it is not the art of scholars but the art of the illiterate. "Werner Herzog"', 
'Scholars and saints expect revelation and do not fear it. Nor children. But as we grow old and hurt, we\'ve learned not to trust. "Madeleine Langle"', 
'The scientist imposes only two things, namely truth and honesty, which he imposes on himself and on other scholars. "Benjamin Carson"', 
'The scientist imposes only two things, namely truth and honesty, which he imposes on himself and on other scholars. "Erwin Schrödinger"', 
'Today\'s scientists, technologists, entrepreneurs, and engineers bear no personal responsibility for the consequences of their actions. "Bill Joy"', 
'There is never a Jewish community without its scholars, but where Jews may not be cultured and Jewish, they would prefer to remain Jews. "Louis Pasteur"', 
'As it turns out, sociologists have come up with only one truth about the mental health of single women: Employment improves it. "Susan Faludi"', 
'As a college student, I did mathematics and physics. This does not make me a scientist. So I try to read, understand and talk to scientists. "Nicholas Stern"', 
'The AEC had under its leadership an army of highly skilled scientists. "Barry Commoner"', 
'All Rhodes scholars had a great future in their past. "Peter Thiel"', 
'Early Islam was a time of great creativity. Scholars excelled in science and literature. "Basma bint Saud"', 
'Few scientists would treat their cars as badly as they would their conceptual schemes. "Mary Midgley"', 
'At a time when many scientists in the world reckon, wouldn\'t it be advisable for some to dream, who can? "Renee Thom"', 
'A truth that is told in bad faith destroys all the lies you can invent "William Blake"', 
'Moderation in fanaticism is a virtue, and moderation in principle is a vice "Thomas Paine"', 
'It is a mistake to think that you can solve a fundamental problem by trivial means "Douglas Adams"', 
'When you become a star, you don\'t change, everyone else does "Kirk Douglas"', 
'Fools still think that the revolution can be defeated "Che Guevara"', 
'Do as if you were to live forever...live as if you were to die today "James Dean"', 
'he past is never dead.. it is not even yet passed "William Faulkner"', 
'Acceptance of what has already happened is the first step in overcoming the consequences of any misfortune "William James"', 
'The essence of management is the power to foresee before things happen "Henry Fabul"', 
'Losers are divided into two halves: those who think but never do, and those who act and never think "John Charles Salack"', 
'Success is often the ally of those who act boldly, and seldom of those who are hesitant and fearful of situations and their consequences "Jawaharlal Nehru"', 
'There is no greater description of a leader than that he helps his men train in strength, effectiveness and influence "Mencius"', 
'We fall in order to rise... and we are defeated in battles to liberate a wonderful victory... just as we sleep in order to wake up stronger and more energetic "Browanbach"', 
];


var newQoute = document.querySelector(".new-qoute");

function randomQoutes() {
    var headingQoute = document.querySelector(".qoute_content");
    var nameAuothr = document.querySelector(".author_name");
    var value_random = qoutes[Math.floor(Math.random() * qoutes.length)];
    var author = value_random.search('"');
    var authorName = value_random.substr(author);
    var qoute_content = value_random.slice(0,author);
    headingQoute.textContent = qoute_content;
    nameAuothr.textContent = authorName;
}
randomQoutes()

newQoute.addEventListener("click", ()=> randomQoutes());