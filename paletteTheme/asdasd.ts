/* eslint-disable style/padding-line-between-statements */
/* eslint-disable unicorn/no-null */
console.clear();
const dataDebug = {
  error: {
    error: 0,
    errorCode: null,
    errorMessage: null,
  },
  data: {
    uid: 'e68b30c2-1f50-40ad-a6a5-9cd367e74f3b',
    images: {
      '76ff8782-14f5-4129-bee6-32089d45a411':
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAB+FBMVEUAAAA/mUPidDHiLi5Cn0XkNTPmeUrkdUg/m0Q0pEfcpSbwaVdKskg+lUP4zA/iLi3msSHkOjVAmETdJSjtYFE/lkPnRj3sWUs8kkLeqCVIq0fxvhXqUkbVmSjwa1n1yBLepyX1xxP0xRXqUkboST9KukpHpUbuvRrzrhF/ljbwaljuZFM4jELaoSdLtElJrUj1xxP6zwzfqSU4i0HYnydMtUlIqUfywxb60AxZqEXaoifgMCXptR9MtklHpEY2iUHWnSjvvRr70QujkC+pUC/90glMuEnlOjVMt0j70QriLS1LtEnnRj3qUUXfIidOjsxAhcZFo0bjNDH0xxNLr0dIrUdmntVTkMoyfL8jcLBRuErhJyrgKyb4zA/5zg3tYFBBmUTmQTnhMinruBzvvhnxwxZ/st+Ktt5zp9hqota2vtK6y9FemNBblc9HiMiTtMbFtsM6gcPV2r6dwroseLrMrbQrdLGdyKoobKbo3Zh+ynrgVllZulTsXE3rV0pIqUf42UVUo0JyjEHoS0HmsiHRGR/lmRz/1hjqnxjvpRWfwtOhusaz0LRGf7FEfbDVmqHXlJeW0pbXq5bec3fX0nTnzmuJuWvhoFFhm0FtrziBsjaAaDCYWC+uSi6jQS3FsSfLJiTirCOkuCG1KiG+wSC+GBvgyhTszQ64Z77KAAAARXRSTlMAIQRDLyUgCwsE6ebm5ubg2dLR0byXl4FDQzU1NDEuLSUgC+vr6urq6ubb29vb2tra2tG8vLu7u7uXl5eXgYGBgYGBLiUALabIAAABsElEQVQoz12S9VPjQBxHt8VaOA6HE+AOzv1wd7pJk5I2adpCC7RUcHd3d3fXf5PvLkxheD++z+yb7GSRlwD/+Hj/APQCZWxM5M+goF+RMbHK594v+tPoiN1uHxkt+xzt9+R9wnRTZZQpXQ0T5uP1IQxToyOAZiQu5HEpjeA4SWIoksRxNiGC1tRZJ4LNxgHgnU5nJZBDvuDdl8lzQRBsQ+s9PZt7s7Pz8wsL39/DkIfZ4xlB2Gqsq62ta9oxVlVrNZpihFRpGO9fzQw1ms0NDWZz07iGkJmIFH8xxkc3a/WWlubmFkv9AB2SEpDvKxbjidN2faseaNV3zoHXvv7wMODJdkOHAegweAfFPx4G67KluxzottCU9n8CUqXzcIQdXOytAHqXxomvykhEKN9EFutG22p//0rbNvHVxiJywa8yS2KDfV1dfbu31H8jF1RHiTKtWYeHxUvq3bn0pyjCRaiRU6aDO+gb3aEfEeVNsDgm8zzLy9egPa7Qt8TSJdwhjplk06HH43ZNJ3s91KKCHQ5x4sw1fRGYDZ0n1L4FKb9/BP5JLYxToheoFCVxz57PPS8UhhEpLBVeAAAAAElFTkSuQmCC',
    },
    challenge: 'Решите пример',
    type: 'math',
    method: 'input',
    ttl: 3600,
    timeout: 5,
    created_at: 1_708_618_891,
    solution: '70',
  },
};

function htmlPattern(app) {
  $(app.idContainer).addClass('formCaptcha__style').html(
    `<div class="captcha formCaptcha__box">
    <div class="formCaptcha__title">
      <p class="formCaptcha__title--text" data-js="captcha-title"></p>
    </div>

    <div class="formCaptcha__container">
      <label class="formCaptcha__label">
        <div class="formCaptcha__canvas">
          <canvas id="captcha-placeholder"></canvas>
        </div>

        <input
          name="captcha_answer"
          type="text"
          value=""
          data-parsley-required="true"
          data-parsley-required-message="Введите ответ"
          class="captcha-input-field"
          placeholder="Ответ"
        />
      </label>

      <button 
        type="button" 
        class="formCaptcha__button--reset" 
        data-js="trigger-captcha-reset"
       >
        <div class="formCaptcha__icon"><img src="${app.iconReset}" /></div>
      </button>
    </div>
    
    <div class="formCaptcha__message">
      <p class="formCaptcha__message--text" data-js="captcha-message"></p>
    </div>
</div>`.trim(),
  );
}

function reStyleCanvas(app) {
  $(app.idCanvas).css({
    display: 'block',
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    boxSizing: 'border-box',
    border: '1px solid',
    borderRadius: '4px',
    borderColor: '#c4c8d0',
    willChange: 'auto',
  });
}

function canvasReset(context, ID) {
  context.save();
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, ID.width, ID.height);
  context.restore();
}

function canvasDrawImage({ ID, IMG, context, clear }) {
  const loadedWidth = IMG.width;
  const loadedHeight = IMG.height;
  const ratio = Math.min(ID.width / loadedWidth, ID.height / loadedHeight);
  const reScaleWidth = loadedWidth * ratio;
  const reScaleHeight = loadedHeight * ratio * 2;
  const X = (ID.width / 2) - (reScaleWidth / 2);
  const Y = (ID.height / 2) - (reScaleHeight / 2);

  if (clear) canvasReset(context, ID);

  return context.drawImage(IMG, X, Y, reScaleWidth, reScaleHeight);
}

function canvasFirstRender(app) {
  const clear = false;
  const decodeImage = '';

  const ID = $(app.idCanvas).get(0);
  const context = ID.getContext('2d');

  const IMG = new Image();
  IMG.setAttribute('src', decodeImage);

  /**
   * Setting up a function with the code
   * to run after the image is loaded
   */
  IMG.addEventListener(
    'load',
    () => canvasDrawImage({
      ID,
      IMG,
      context,
      clear,
    }),
    {
      once: true,
      capture: false,
    },
  );
}

function captchaFetch({
  app,
  state = {},
  callback = () => {},
}) {
  $.ajax({ url: 'https://dummyjson.com/products/1' })
    .then((response) => {
      const currentText = $(app.targetTitle).text();
      const reserve = 'Решите пример :';

      if (reserve !== currentText) {
        console.log('currentText', currentText);
        $(app.targetTitle).text(reserve);
      }

      return response;
    })
    .fail((response) => {
      console.log('fail', response);
      $(app.targetMessage).text(
        state.fail || 'Ошибка. Повторите операцию позже.',
      );
    })
    .done((response) => {
      console.log('done', response);
      callback();
      $(app.targetMessage).text(state.done || '');
    });
}

function captchaHandler(app) {
  const newLink
    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAh1BMVEUAAAAxd71AfcQxd70yhsUyeL4xeL4zfsMxeL0yeL4xeL4wesExfcQxeb4xeb4yeb8xeL4xecAxeL4xeL0xeL4xeL4xeb8xesAxeMAwe8UxeL4yeb8xer8yeb8yeb4ye8Eyeb8yeb8xesAxeMIxeL4yeb0xd7wzfcYze8M0f8kyecAxeL41gs16QFhpAAAAJnRSTlMA+wP4CNhaEfLdwh8L76ed6zvl1My7ajIpGeCVhGRRIrV3RTZ9ZT8pRf8AAAE9SURBVCjPTZHZmoMgDEaBMO5bW221+zJDCPT9n28CeOG50pyE/HwIRgmR37pDAefpd46/TKof90jWe4cElzyaWG+e5CAipaf9LhkldPUF4GYia4wBhNM60xEgtVV36Q/WB3POY/1uHY7Z0oTpG3hpgC5RVN99JsR1FiqkQGmkL2qu775jLeq2E1opLZrSsqEji/6gxDwg96wLw1l9EItQfNrfPQvcpzCBFQtuzQiMxYTjxNKd00WmsDFdEGTADLG+DE4auwUhipPk6fJnQzlGsfPGF7NqdKLRTaOj+PCAffPHhigehYMQUKuAVqGWqFBK7LVYqV/5OnIjXo8/r91jqU9ZX7QsEiMCryFXtIVBwjKIFBgsG2mcc16CTyIlbokFE16X2nyTrHOEzjuLZMvjNrP4XKdyGA7P6zvF+wdaYR+WPYBj2gAAAABJRU5ErkJggg==';

  $(app.targetReset).on('click', () => {
    console.log('click');
    captchaFetch({
      app,
      callback: () => canvasDrawImage(String(newLink)),
    });
  });
}

$(() => {
  const app = {
    idContainer: '#captcha-main',
    idCanvas: '#captcha-placeholder',
    targetReset: '[data-js="trigger-captcha-reset"]',
    targetMessage: '[data-js="captcha-message"]',
    targetTitle: '[data-js="captcha-title"]',
    iconReset: 'https://cdn-icons-png.flaticon.com/512/7794/7794645.png',
  };

  htmlPattern(app);
  reStyleCanvas(app);
  canvasFirstRender(app);
  captchaFetch({
    app,
    callback: () => canvasDrawImage(String(Object.values(dataDebug.data.images)[0])),
  });
  captchaHandler(app);
});