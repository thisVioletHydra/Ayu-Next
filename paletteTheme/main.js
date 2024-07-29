const File = function(url, object) {
  File.list = Array.isArray(File.list) ? File.list : [];
  File.progress = File.progress || 0;
  this.progress = 0;
  this.object = object;
  this.url = url;
};

File.indexOf = function(term) {
  for (const index in File.list) {
    const file = File.list[index];
    if (file.equals(term) || file.url === term || file.object === term) {
      return index;
    }
  }

  return -1;
};

File.find = function(term) {
  const index = File.indexOf(term);

  return ~index && File.list[index];
};

File.prototype.equals = function(file) {
  const isFileType = file instanceof File;

  return isFileType && this.url === file.url && this.object === file.object;
};

File.prototype.save = function(update) {
  update = typeof update === 'undefined' ? true : update;
  if (Array.isArray(File.list)) {
    const index = File.indexOf (this);
    if (~index && update) {
      File.list[index] = this;
      console.warn('File `%s` has been loaded before and updated now for: %O.', this.url, this);
    } else File.list.push(this);
    console.log(File.list);
  } else {
    File.list = [this];
  }

  return this;
};

export function hookCheckTypeDevice() {
  const screenWidth = ref (screen.width);
  const handlerResize = () => (screenWidth.value = screen.width);

  onMounted(() => window.addEventListener('resize', () => handlerResize()));
  onUnmounted(() => window.removeEventListener('resize', handlerResize));

  const deviceType = computed((): DeviceTypes => {
    if (screenWidth.value < 426) {
      return 'mobile';
    } else if (screenWidth.value < 769) {
      return 'tablet';
    }

    return 'desktop';
  });

  const width = computed(() => screenWidth.value);

  return { deviceType, width };
}