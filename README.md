"# next-template"

# NEXT TEMPLATE

- Jest
- Storybook
- Prettier
- Eslint
- Design system
- Material UI
- Redux
- Axios

---

### Development project patterns:

##### Primary language:

```
English
```

##### Case formats:

Kebab-Case format for `images`, `classNames`, dom elements `ids`

```
IMAGE : my-own-image.jpg
CLASSNAME: <div class="my-own-class-name"></div>
ID: <div id="my-own-id"></div>
```

camelCase for `functions`, `const` and `let` variables

```
FUNCTION: const myFunction = () => {}
CONST/LET: const myConst = 0; let myLet;
```

PascalCase for `components`, `interfaces`, `images`, `types`, `pages` and `classes`

```
PAGE: MyPage/index.tsx
CLASS: class MyClass {}
COMPONENTS: export const MyPage = () => {}
INTERFACE/TYPES: interface MyInterface {} / type MyType = {}
```

~~snake_case~~ will not be used.

#### String formats

Double quotes:

```
const myName = "John Doe";
```

##### Imports and commits order:

Imports must be organized, commited follows the pattern:

```
// react
import { useState } from "react";

// ui
import { Button } from "@mui/components/";

// images
import MyImage from "./my-image.jpg";

// local components
import { MyComponent } from "./MyComponent";

// interface
interface {};

// types
type MyType = {};

// styles
import "./MyStyle.style.scss";

```

#### File names

Styles SASS

```
MyComponent.style.scss
```

#### Directory structure

Each page must restrict its own `utils`, `hooks`, `services` and others.

- src
  - components _(Global components)_
  - pages
    - MyPage
      - components _(Components restricted to MyPage only)_
      - index.ts _(Exporting MyPage file)_
      - MyPage.tsx

#### Module exporting

Destructuring format, each method must be exported individually

---

### Stack used

- Vite
- React
- TypeScript
- Material UI
- React Router Dom
- SASS
# next-template
