1. Initialize `npm` in project.

```
npm init -y
```

2. Install `TypeScript` as a dev dependency.

```
npm i -D typescript
```

3. Initialize `TypeScript` in project.

```
npx tsc --init
```

This will create a **tsconfig.json** file in the project root.

4. Create a _src_ folder for TypeScript files.
5. Set `outDir` in **tsconfig.json** as _js_.

```
"outDir": "./js"
```

6. Add a `start` script in **package.json**.

```
"start": "tsc --watch"
```
