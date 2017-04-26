module.exports = (bot) => {

  bot.hear(/Play games\?/i, res => {
    res.reply('Do you wanna play Number guessing game\?');
    bot.brain.set('lastQuestion', 'playGame');
  });

  bot.hear(/Yes|No/i, res => {
    let answer = res.message.text.toUpperCase();
    let message = '';
    let lastQuestion = bot.brain.get('lastQuestion');

    if (lastQuestion === 'playGame') {
      if (answer === 'YES') {
        message = 'Please guess a number between 1 to 10';
      } else if (answer === 'NO') {
        message = 'AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH';
      } else {
        message = 'Please say Yes or No';
      }
      res.reply(message);
    }
  });

}
