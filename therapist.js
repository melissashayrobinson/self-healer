// A randomly generated message to promote self-healing.
// Inspired by and using the content of text messages from Dr. Nicole LePera @the.holistic.psychologist

// I am ... and ...
const adjectives = [
  "sturdy",
  "creative",
  "adaptable",
  "clear-minded",
  "beautiful",
  "accepting",
  "capable",
  "compassionate",
  "strong",
  "kind",
  "powerful",
  "thoughtful",
  "resilient",
  "luminous",
];

// In this moment I will ...
const directive = [
  "be willing to learn",
  "just BE in the present moment",
  "decide my own truth",
  "not forget that I am living breathing magic",
  "practice grace + self forgiveness",
  "be concious of my breath",
  "enjoy a hot shower and release the tension I am holding",
  "get up and drink a glass of water",
  "recognize that I have choice in what I consume, in what I speak, and in how I assign meaning in situations"
];

// I know that ...
const inspiration = [
  "everyone has something to teach me",
  "personal responsibility is the foundation of freedom",
  "I am worth being loved by myself",
  "I can receive peace, love, and deeper awareness",
  "sometimes I will need to be quiet + still for the answers to come",
  "the person I admire, that *thing* they have that I wish I had – it's in me too",
  "emotions flow through us. We are not our emotions, we experiencce them",
  "living an intentional life means making choices in alignment with who I wish to be + what I wish to experience",
  "just because a relationship ends doesn't mean it failed. I succeeds in teaching me what I need to learn",
  "as I evolve my friendships + relationships may end or change. This is a possitive thing",
  "I am doing better than I give myself credit for"
];


const randPhrase = (phrase) => {
        let num = Math.floor(Math.random() * phrase.length);
        return phrase[num];
    };

console.log('\n \n Today I seek healing for myself. \n \n I am ' + randPhrase(adjectives) + '. \n \n In this moment I will ' + randPhrase(directive) + '. \n \n I know that ' + randPhrase(inspiration) + '. \n \n');