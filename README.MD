[![Build Status](https://travis-ci.org/yc-ionic/editor.svg?branch=master)](https://travis-ci.org/yc-ionic/editor.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/yc-ionic/editor/badge.svg?branch=master)](https://coveralls.io/github/yc-ionic/editor?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# @yci/editor

## Installation

1. Install the Ionic plugin
```
 npm i -S @yci/editor
```

2. Add it to your app’s NgModule.

```typescript
// Import your library
import { EditorModule } from '@yci/editor';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    EditorModule.forRoot()
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its service in your Angular application:


```ts
import { Editor } from '@yci/editor'

constructor(public editor: Editor) {
  editor.edit(...);
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)
