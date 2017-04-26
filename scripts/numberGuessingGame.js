// Commands:
//  hubot play games? - Play games with the bot.

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
        message = 'Too bad. I haven\'t learn the game yet';
        bot.brain.set('lastQuestion', null);
      } else if (answer === 'NO') {
        message = 'AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH';
        bot.brain.set('lastQuestion', null);
      } else {
        message = 'Please say Yes or No';
      }
      return res.reply(message);
    }
  });

}
