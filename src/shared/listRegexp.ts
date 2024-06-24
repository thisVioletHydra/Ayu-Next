export const listRegexp = {

  /** auto: /(?<=<i18n\w|\s)auto(?=\s|\w>)/s, */
  auto: /(?<=<i18n\w|\s)auto(?=>|\s.+>$)/m,

  /** baseName: /[\s/\\-]/g, */
  baseName: /[\s/\\-]/g,

  /** component: /^(\s+?|.?)<i18n.+>\s+{.+"components_/s, */
  components: /^(\s+|.?)<i18n.+>\s+{.+"components_/s,

  /** /(?<=<i18n\w|\s)debug(?=\s|\w>)/s, */
  debug: /(?<=<i18n\w|\s)debug(?=>|\s.+>$)/m,

  /** /\s?(?<=<i18n.+>\s).+(?=\s<\/i18n>)/gs */
  executeMessage: /\s?(?<=<i18n.+>\s).+(?=\s<\/i18n>)/gs,

  /** footer: /}+(?=\s+?<\/i18n>)$/m, */
  footer: /}+(?=\s+<\/i18n>)$/m,

  /** header: /(?!=^\s?<i18n.+>?.+\s?.\s?){/s, */
  header: /(?!=^\s?<i18n.{3,}){/s,

  /** /getMessagePrefix/g */
  messagePrefix: /getMessagePrefix/g,

  /** msg: /{{(\s|\b)+msg\(/g, */
  msg: /{{(\s|\b)+msg\(/g,

  /** /^(\s+?|.?)<i18n.+>\s+{.+"pages_/s */
  pages: /^(\s+|.?)<i18n.+>\s+{.+"pages_/s,

  /** script: /<\s?script.+(lang="ts"|setup).+(lang="ts"|setup)(>|.+?>)/g, */
  script: /<script.+?(lang="ts"|setup).+?(lang="ts"|setup)(>|\s.+?>|\b>)/s,

  scriptMsg: /(?<=script.[^>]*>.+[^"'()glmos|])msg\((?=.+<\/script>)/gs,
};