async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({
      url: 'app.html',
      height: 800,
    });
  });
}

init();