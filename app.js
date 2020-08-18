const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hello', async ({ message, say }) => {
  await say(`Annyong <@${message.user}>!`);
});

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('Bolt App Is Running!');
})();

