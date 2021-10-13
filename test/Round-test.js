const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Round', function() {

  it.skip('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should store the deck of cards in play', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.deep.equal(deck);
  });

  it.skip('should store the first card in the deck as the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.deep.equal(card1);
  });

  it.skip('should be able to return the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const result = round.returnCurrentCard();
    expect(result).to.deep.equal(card1);
  });

  it.skip('should store the turn count, which is initially 0', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turnsCount).to.equal(0);
  });

  it.skip('should instantiate a new Turn instance when a guess is made on the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('pug');
    const turn1 = new Turn('pug', card1);
    expect(round.turns[0]).to.deep.equal(turn1);
    round.takeTurn('appendix');
    const turn2 = new Turn('appendix', card2);
    expect(round.turns[1]).to.deep.equal(turn2);
  });

  it.skip('should update the turn count when a turn is taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.turnsCount).to.equal(0);
    round.takeTurn('pug');
    expect(round.turnsCount).to.equal(1);
    round.takeTurn('sea otter');
    expect(round.turnsCount).to.equal(2);
  });

  it.skip('should update the current card to the next card in the deck after a turn is taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const result = round.returnCurrentCard();
    expect(result).to.deep.equal(card1);
    round.takeTurn('pug');
    const result2 = round.returnCurrentCard();
    expect(result2).to.deep.equal(card2);
    round.takeTurn('gallbladder');
    const result3 = round.returnCurrentCard();
    expect(result3).to.deep.equal(card3);
  });

  it.skip('should be able to evaluate the guess and store the result when a turn is taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('pug');
    expect.(round.incorrectGuesses.length).to.equal(1);
    expect.(round.incorrectGuesses[0]).to.equal('1');
    round.takeTurn('appendix');
    expect.(round.incorrectGuesses.length).to.equal(2);
    expect.(round.incorrectGuesses[1]).to.equal('14');
    round.takeTurn('listening to music');
    expect.(round.incorrectGuesses.length).to.equal(3);
    expect.(round.incorrectGuesses[2]).to.equal('12');
  });

  it.skip('should be able to return the feedback of whether the guess is correct or incorrect when a turn is taken', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    const result = round.takeTurn('pug');
    expect(result).to.equal('incorrect!');
    const result2 = round.takeTurn('gallbladder');
    expect(result2).to.equal('correct!');
    const result3 = round.takeTurn('listening to music');
    expect(result3).to.equal('incorrect!');
  });

});
