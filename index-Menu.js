
import { Telegraf, Markup } from 'telegraf';

const token = '7090357570:AAH5uYVBEcCE0ciGZXtY-D6x6hluTHbkQUE';

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply('Main Menu', Markup.keyboard([
    ['Games', 'Deposit'],
    ['Profile', 'Support', 'Wallet']
  ]).resize());
});

bot.hears('Games', (ctx) => {
  ctx.reply('Games Menu', Markup.inlineKeyboard([
    [Markup.button.url('Slots', 'https://pm-5753.com/en/casino/slots')],
    [Markup.button.url('Live Casino', 'https://pm-5753.com/en/casino/live-casino')],
    [Markup.button.url('Instant', 'https://pm-5753.com/en/casino/instant-games')],
    [Markup.button.url('Sportbook', 'https://pm-5753.com/en/cricket/live')]
  ]));
});

bot.hears('Deposit', (ctx) => {
  ctx.reply('Please follow the link to deposit: https://pm-5753.com/en/deposit');
});

bot.hears('Profile', (ctx) => {
  ctx.reply('Profile Menu', Markup.inlineKeyboard([
    [Markup.button.url('Personal Data', 'https://pm-5753.com/en/my-account')],
    [Markup.button.url('Account confirmation', 'https://pm-5753.com/en/my-account/kyc')]
  ]));
});

bot.hears('Support', (ctx) => {
  ctx.reply('Please contact our support team.');
});

bot.hears('Wallet', (ctx) => {
  ctx.reply('Wallet Menu', Markup.inlineKeyboard([
    [Markup.button.url('Withdrawal', 'https://pm-5753.com/en/withdraw')],
    [Markup.button.url('Balance', 'https://pm-5753.com/en/my-account')],
    [Markup.button.url('Transaction history', 'https://pm-5753.com/en/payments')]
  ]));
});

bot.launch();
console.log('Bot is running...');
