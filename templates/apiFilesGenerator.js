const generator = require('custom-template-generator')
const mergedirs = require('merge-dirs').default
const rimraf = require('rimraf')

const component = process.argv
  .slice(2)[0]
  .split('comp=')
  .splice(-1)[0]

generator({
  componentName: component,
  customTemplatesUrl: './templates/',
  dest: 'cypress',
  templateName: 'api',
  autoIndent: true,
  data: {
    uiconfig: JSON.stringify({
      test: 42,
      lolo: {
        pop: 42,
        storme: 2,
      },
    }),
  },
})

setTimeout(() => {
  // https://github.com/m2omou/custom-template-generator/issues/9
  console.log('generating files...')
  mergedirs(`cypress/${component}`, 'cypress/', 'overwrite')
  console.log('success...')
  rimraf(`cypress/${component}`, () => null)
}, 5000)
