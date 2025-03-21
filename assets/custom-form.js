const checkAppEmebed = setInterval(() => {
    const app = document.getElementById('app-embed');
    console.log(app);
    if (app) {
      clearInterval(checkAppEmebed);
      document.getElementById('custom-form-usp-1').classList.remove('hidden');
      document.getElementById('custom-form-usp-2').classList.remove('hidden');
      document.getElementById('custom-form-brands').classList.remove('hidden');
      document.querySelector('[data-forms-id="forms-root-288762"]').prepend(document.getElementById('custom-form-mobile-image'));
      document.querySelector('[data-forms-id="forms-root-288762"]').prepend(document.getElementById('custom-form-usp-1'));
      document.querySelector('[data-forms-id="forms-root-288762"]').append(document.getElementById('custom-form-usp-2'));
      document.querySelector('[data-forms-id="forms-root-288762"]').append(document.getElementById('custom-form-brands'));
      const review = document.getElementById('custom-form-review');
      review.style.display = 'flex';
      review.style.fontSize = '16px';
      review.style.lineHeight = '20px';
      review.style.justifyContent = 'center';
      review.style.alignItems = 'center';
      review.style.flexWrap = 'wrap';
      review.classList.remove('hidden');
      app.shadowRoot.querySelector('._formDisclaimer_1ll8d_37').prepend(review);
      app.shadowRoot.querySelector('section[data-sizing="form-wrapper"]').style.width = '100%';
      app.shadowRoot.querySelector('section[data-sizing="form-wrapper"]').style.maxWidth = '100%';
      app.shadowRoot.querySelector('._textHeading_2aowh_35').style.fontSize = '32px';
      app.shadowRoot.querySelector('._textHeading_2aowh_35').style.lineHeight = '36px';
      app.shadowRoot.querySelector('._textHeading_2aowh_35').style.marginBottom = '16px';
      app.shadowRoot.querySelector('._textHeading_2aowh_35').style.fontWeight = '900';
      app.shadowRoot.querySelector('form[data-testid="form"]').style.flexDirection = 'row';
      app.shadowRoot.querySelector('form[data-testid="form"]').style.flexWrap = 'wrap';
      app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(3)').style.width = '100%';
      app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(4)').style.width = '100%';
      app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(7)').style.width = '100%';
      app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(8)').style.width = '100%';
      app.shadowRoot.querySelector('._formSubmitButton_1ll8d_81').style.width = '100%';
      app.shadowRoot.querySelector('._formSubmitButton_1ll8d_81').style.marginTop = '20px';
      app.shadowRoot.querySelector('._formSubmitButton_1ll8d_81').style.marginBottom = '20px';

      function setFieldWidth(){
        if(screen.width > 768) {
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(1)').style.setProperty('width', 'calc(50% - 5px)');
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(2)').style.setProperty('width', 'calc(50% - 5px)');
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(5)').style.setProperty('width', 'calc(50% - 5px)');
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(6)').style.setProperty('width', 'calc(50% - 5px)');
        } else {
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(1)').style.setProperty('width', '100%');
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(2)').style.setProperty('width', '100%');
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(5)').style.setProperty('width', '100%');
          app.shadowRoot.querySelector('form[data-testid="form"] div:nth-child(6)').style.setProperty('width', '100%');
        }
      }

      setFieldWidth();

      window.onresize = function(event) {
        setFieldWidth();
      };
    }
}, 500);

let uspCount = 0;
const uspItems = document.getElementById('custom-form-usp-1').querySelectorAll('.custom-form-usp__item');
setInterval(() => {
  uspItems.forEach((item, index) => {
    if(index == uspCount) item.classList.add('active');
    else item.classList.remove('active');
  });
  uspCount++;
  if(uspCount >= 4) uspCount = 0;
}, 3000);