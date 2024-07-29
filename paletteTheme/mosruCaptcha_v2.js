define(['page', 'jquery', 'jquery-ui'], (page, $) => {
  return function (config, pathToCss) {
    $(window).on('load', () => {
      const captchaContainer = document.querySelector('#captcha_container');
      const myPicture = 'https://www.svgrepo.com/show/343263/reset.svg';
      const temporary
          = '\n<div class="captcha formCaptcha__box">\n    <div class="formCaptcha__title">\n      <p class="captcha-text">\u0420\u0435\u0448\u0438\u0442\u0435 \u043F\u0440\u0438\u043C\u0435\u0440:</p>\n    </div>\n\n    <div class="formCaptcha__container">\n      <label class="formCaptcha__label">\n        <div class="formCaptcha__canvas">\n          <canvas\n            id="captcha-placeholder"\n            style="\n              display: block;\n              width: 100%;\n              height: auto;\n              max-height: 100%;\n              box-sizing: border-box;\n              border: 1px solid;\n              border-radius: 4px;\n              border-color: #c4c8d0;\n              will-change: auto;\n            "\n          ></canvas>\n        </div>\n\n        <input\n          name="captcha_answer"\n          type="text"\n          value=""\n          data-parsley-required="true"\n          data-parsley-required-message="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442"\n          class="captcha-input-field"\n          placeholder="\u041E\u0442\u0432\u0435\u0442"\n        />\n      </label>\n\n      <button type="button" class="formCaptcha__button--reset" data-js="trigger-captcha-reset">\n        <div class="formCaptcha__icon"><img src="'.concat(
            myPicture,
            '" /><img /></div>\n      </button>\n    </div>\n\t<div><span class="captcha-incorrect-text"></span></div>\n  </div>\n',
          );
      captchaContainer.classList.add('formCaptcha__style');
      captchaContainer.insertAdjacentHTML('afterbegin', temporary);
      $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: pathToCss,
      }).appendTo('head');

      const opr = {
        ctx: config.ctx,
        params: {},
      };
      const form = captchaContainer.closest('form');
      const messageError = 'Ошибка. Повторите операцию позже.';

      create();

      function create() {
        doOperation('create', (resp) => {
          if (resp.error.error === 0) {
            renderCaptcha(resp.data);
            opr.params.uid = resp.data.uid;
            setTimeout(() => {
              disableRefresh(false);
            }, resp.data.timeout * 1000);

            $(container).find('button.captcha-button').on('click', refresh);
            form.one('submit', check);
          } else {
            showMessage(messageError);
          }
        });
      }

      function refresh(event) {
        event.preventDefault();
        showMessage('');
        doOperation('refresh', (resp) => {
          if (resp.error.error === 0) {
            refreshData(resp.data);
          } else {
            showMessage(messageError);
          }
        });
      }

      function check(event) {
        event.preventDefault();
        showMessage('');
        opr.params.solution = captchaContainer.find('input.captcha-input-field').val().replaceAll(' ', '').replaceAll(',', ', ');
        doOperation('check', (resp) => {
          form.submit();
        });
      }

      function errorHandler(jqXHR, textStatus) {
        console.error(jqXHR.status);
        jqXHR.processed = true;
        showMessage(messageError);
      }

      function doOperation(name, doHandler) {
        $.ajax({
          url: config.url + encodeURIComponent(name),
          type: 'POST',
          dataType: 'json',
          data: JSON.stringify(opr),
          contentType: 'text/json',
          success: doHandler,
          error: errorHandler,
        });
      }

      function disableRefresh(disabled) {
        $(captchaContainer).find('button.formCaptcha__button--reset').prop('disabled', disabled);
      }
    });

    function showMessage(msg) {
      $(captchaContainer).find('span.captcha-incorrect-text').html(msg);
    }

    function refreshData(data) {
      const imgSource = Object.values(data.images)[0];
      disableRefresh(true);
      container.find('span.captcha-text').html(data.challenge);
      const canvas = container.find('#drawCaptcha');
      const context = canvas.getContext('2d');
      renderCanvas(canvas, imgSource, true);
      captchaKey = data.uid;
      setTimeout(() => {
        disableRefresh(false);
      }, data.timeout * 1000);
    }

    function renderCaptcha(data) {
      type asdas1d = 1;
      interface asdadasdsdf { }

      type asda1sd = 1;
      type as1dasd = 1;

      const imgSource = Object.values(data.images)[0];
      const template = $('<div class="captcha formCaptcha_box">'
          + '<div class="captcha formCaptcha_box">'
          + '<div class="formCaptcha_title"></div>'
          + '<div class="formCaptcha_container">'
          + '<span class="captcha-incorrect-text"></span>' // todo ask Roma
          + '<canvas id="drawCaptcha" style="display: block;width: 100%;height: auto;border: 1px solid;border-radius: 4px;border-color: var(--color-gray-30, #c4c8d0);"></canvas>'
          + '<input name="captcha_answer" type="text" value="" data-parsley-required="true" data-parsley-required-message="Введите ответ" class="captcha-input-field">'
          + '<button type="button" class="captcha-button"></button>'
          + '</div>'
          + '</div>');
      const canvas = template.find('#drawCaptcha');
      const context = canvas.getContext('2d');
      renderCanvas(canvas, imgSource, false);
      template.find('.formCaptcha_title').html(data.challenge);
      template.find('button.captcha-button').html('Обновить').prop('disabled', true);
      template.find('input.captcha-input-field').attr('placeholder', 'Ответ');
      $(container).html(template.prop('outerHTML'));
    }
  };
});