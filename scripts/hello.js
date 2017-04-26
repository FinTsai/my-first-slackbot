module.exports = (bot) => {

  bot.hear(/Hello|Hi|What[’']s up/i, res => {
    return res.send('Hi there! :heart_eyes:');
  });

  bot.hear(/What[’']s your name\?/i, res => {
    res.reply('Nice to meet you :blush:');
    res.send('My name is finfinbot');
  });

  bot.hear(/Are you free on (.+)\?/i, res => {
    let message = '';
    let day = res.match[1];
    day = day.toUpperCase();

    if (day === 'MONDAY') {
      message = 'Sorry, I need to work on my JavaScript project';
    } else if (day === 'TUESDAY') {
      message = 'Nope, I\'m filming a STAR WARS movie';
    } else if (day === 'WEDNESDAY') {
      message = 'No, I have to go to school';
    } else if (day === 'THURSDAY') {
      message = 'Sorry, I\'m going to shopping';
    } else if (day === 'FRIDAY') {
      message = 'Yes, I\'m free on Friday';
    } else if (day === 'SATURDAY') {
      message = 'It\'s a good question but I\'m a robot--I do not go out with human';
    } else if (day === 'SUNDAY') {
      message = 'Nope, I\'m going to see the STAR WARS movie';
    } else {
      message = 'Uhhhhhhhhhhhhhhh, I don\'t understand';
    }
    return res.send(message);
  });

  bot.respond(/What[’']s your favou?rite food?/i, res => {
    return res.send('I am a robot--I do not eat food!')
  });

  bot.hear(/Are you Batman\?/i, res => {
    return res.reply('No, I am Superwoman!!');
  });

  bot.hear(/message (.*) (.*)/i, res => {
    const userName = res.match[1];
    const message = res.match[2];
    bot.messageRoom(`@${userName}`, message);
  });

  const beverages = ['Mocha :coffee:', 'Latte :coffee:', 'Flat White :coffee:',
    'Long Black :coffee:', 'Short Black :coffee:', 'Beer :beer:',
    'Sake :sake:', 'Cocktail :cocktail:'
  ];

  bot.hear(/What should I drink today\?/i, res => {
    return res.send(res.random(beverages));
  });

};
