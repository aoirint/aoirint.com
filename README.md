# aoirint.com

2023-03-21: aoirint.comは、フレームワークをGatsby.jsからNext.jsに変更し、リポジトリを[aoirint/aoirint.com-next](https://github.com/aoirint/aoirint.com-next)に移動しました。
このリポジトリはアーカイブされます。

## Dependencies

- Node 18
- npm 8

### Switch Node version with nvm

- <https://github.com/nvm-sh/nvm>
- <https://github.com/coreybutler/nvm-windows>

```shell
nvm use
```

### Install node_modules

```shell
npm ci
```

## Preview

```shell
npm run develop
```

## Deploy

```shell
npm run clean && npm run build && npm run deploy
```
