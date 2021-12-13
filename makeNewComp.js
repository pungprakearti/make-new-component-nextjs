const fs = require('fs')

// Check number of arguments and exit if incorrect
const checkArgs = () => {
  if(process.argv.length !== 3) {
    throw new Error('Incorrect number of arguments:\nnode ./makeNewComp.js <ComponentName>')
  }
  // Return filename
  return process.argv[2]
}

// Check to see if folder exists in components directory
const checkDir = (dir) => {
  if(fs.existsSync(dir)) {
    throw new Error('Component already exists')
  }
  return
}

// Create files
const createFiles = () => {
  // Create folder
  fs.mkdirSync(dir)

  // File paths and templates
  const tsxFilePath = dir + '/' + filename + '.tsx'
  const tsxFileTemplate = `import styles from './${filename}.module.scss'

type Props = {
  prop: string
}

const ${filename} = (props: Props): JSX.Element => {
  const {
    prop
  } = props

  return (
    <div className={styles.wrap}>
      {prop}
    </div>
  )
}

export default ${filename}
`

  const scssFilePath = dir + '/' + filename + '.module.scss'
  const scssFileTemplate = `@import 'styles/main.scss';

.wrap {
  border: 1px solid violet;
}
`

  // Create files
  fs.writeFileSync(tsxFilePath, tsxFileTemplate, (error) => {
    throw new Error(error)
  })

  fs.writeFileSync(scssFilePath, scssFileTemplate, (error) => {
    throw new Error(error)
  })
}

// Get filename from arguments
let filename
let dir
try {
  filename = checkArgs()
  dir = process.argv[1].slice(0, process.argv[1].lastIndexOf('/')) + '/components/' + filename
  checkDir(dir)
  createFiles()
  console.log('\x1b[36m' + filename + ' created successfully')
} catch (error) {
  console.log('\x1b[31m' + error)
}
