const checkAppEmebed = setInterval(() => {
    const app = document.getElementById('app-embed');
    console.log(app);
    if (app) {
      clearInterval(checkAppEmebed);
        app.shadowRoot.querySelector('section[data-sizing="form-wrapper"]').style.width = '100%';
        app.shadowRoot.querySelector('section[data-sizing="form-wrapper"]').style.maxWidth = '100%';
        app.shadowRoot.querySelector('form[data-testid="form"]').style.flexDirection = 'row';
        app.shadowRoot.querySelector('form[data-testid="form"]').style.flexWrap = 'wrap';
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(1)').style.setProperty('width', 'calc(50% - 5px)');
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(2)').style.setProperty('width', 'calc(50% - 5px)');
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(3)').style.width = '100%';
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(4)').style.width = '100%';
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(5)').style.setProperty('width', 'calc(50% - 5px)');
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(6)').style.setProperty('width', 'calc(50% - 5px)');
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(7)').style.width = '100%';
        app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(8)').style.width = '100%';
    }
}, 500);