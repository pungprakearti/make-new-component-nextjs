# makeNewComp.js
Create a blank functional component with correct filenames for NextJS

## Templates
### <filename>.tsx
```
import styles from './<filename>.module.scss'

type Props = {
  prop: string
}

const <filename> = (props: Props): JSX.Element => {
  const {
    prop
  } = props

  return (
    <div className={styles.wrap}>
      {prop}
    </div>
  )
}

export default <filename>

```
### <filename>.module.scss
```
@import 'styles/main.scss';

.wrap {
  border: 1px solid violet;
}

```
### index.ts
```
export { default } from './<filename>'

```
## Getting started
1. Copy script into root of your NextJS project
1. Run the script from the root of your NextJS project:
```
node ./makeNewComp.js <filename>
```
1. Access your new functional component in the `components` directory.
