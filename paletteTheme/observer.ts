(function () {
  const run = function () {
    var observer = new MutationObserver((mutationsList) => {
      for (let index = 0; index < mutationsList.length; index++) {
        const mutation = mutationsList[index];
        if (mutation.type === 'childList') {
          const linkTags = document.head.querySelectorAll('link');
          for (let index_ = 0; index_ < linkTags.length; index_++) {
            const linkTag = linkTags[index_];
            if (linkTag.href === '/stylesheets/idp.min.css') {
              linkTag.parentNode.removeChild(linkTag);
              observer.disconnect();
              break;
            }
          }
        }
      }
    });

    observer.observe(document.head, {
      childList: true,
      subtree: true,
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    run();
  });
})();