(() => {
  const run = () => {
    const link = '1';
    function canvasReseter(context: CanvasRenderingContext2D, ID: HTMLCanvasElement) {
      context.save();
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, ID.width, ID.height);
      context.restore();
    }
    function renderCanvas({ ID, SRC, clear = false }: {
      ID: HTMLCanvasElement;
      SRC: string;
      clear?: boolean;
    }) {
      // Get the 2D Context from the canvas
      const context = ID.getContext('2d'); // Create a new Image
      const IMG = new Image();
      function drawPicture({ ID, clear = false }: {
        ID: HTMLCanvasElement;
        clear?: boolean;
      }) {
        if (context === null) return;
        const loadedWidth = IMG.width;
        const loadedHeight = IMG.height;
        const ratio = Math.min(ID.width / loadedWidth, ID.height / loadedHeight);
        const reScaleWidth = loadedWidth * ratio;
        const reScaleHeight = loadedHeight * ratio * 2;
        const X = Number((ID.width / 2) - (reScaleWidth / 2));
        const Y = Number((ID.height / 2) - (reScaleHeight / 2));
        if (clear) canvasReseter(context, ID);
        context.drawImage(IMG, X, Y, reScaleWidth, reScaleHeight);
      }
      // Setting up a function with the code to run after the image is loaded
      IMG.addEventListener('load', () => {
        drawPicture({
          ID,
          clear,
        });
      }, {
        once: true,
        capture: false,
      });
      IMG.setAttribute('src', SRC);
    }

    /**
     * ID - <HtmlElement> id selector to tag canvas
     * SRC - <string> image  base64
     * clear - <boolean> reRender new context to current canvas
     */
    const ID = document.querySelector<HTMLCanvasElement>('#captcha-placeholder');
    if (!ID) return;
    renderCanvas({
      ID,
      SRC: link,
    });
    const selectorCaptchaReset = document.querySelector(
      '[data-js="trigger-captcha-reset"]',
    );
    selectorCaptchaReset?.addEventListener('click', () => {
      renderCanvas({
        ID,
        SRC: link,
        clear: true,
      });
    });
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run); // Document still loading so DomContentLoaded can still fire :)
  } else {
    run();
  }
})();