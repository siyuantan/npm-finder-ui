export interface INpmSearchPackageDetail {
  name: string
  scope: string
  version: string
  description: string
  keywords: string[]
  date: string
  links: {npm: string, homepage: string, repository: string, bugs: string}
  author: {name: string, email: string, publisher: string}
  maintainers: {username: string, email: string}[]
  // "_id": string;
  // "_rev": string;
  // "name": string;
  // "description": string;
  // "dist-tags": any;
  // "versions": Object;
  // "readme": string;
  // "maintainers": {name: string, email: string}[];
  // "time": Object;
  // "homepage": string;
  // "keywords": string[];
  // "repository": Object;
  // "bugs": Object;
  // "license": string;
  // "users": Object;
}


// "package": {
//   "name": "rxjs",
//   "scope": "unscoped",
//   "version": "7.8.0",
//   "description": "Reactive Extensions for modern JavaScript",
//   "keywords": [
//     "Rx",
//     "RxJS",
//     "ReactiveX",
//     "ReactiveExtensions",
//     "Streams",
//     "Observables",
//     "Observable",
//     "Stream",
//     "ES6",
//     "ES2015"
//   ],
//   "date": "2022-12-15T23:25:47.887Z",
//   "links": {
//     "npm": "https://www.npmjs.com/package/rxjs",
//     "homepage": "https://rxjs.dev",
//     "repository": "https://github.com/reactivex/rxjs",
//     "bugs": "https://github.com/ReactiveX/RxJS/issues"
//   },
//   "author": {
//     "name": "Ben Lesh",
//     "email": "ben@benlesh.com",
//     "username": "blesh"
//   },
//   "publisher": {
//     "username": "blesh",
//     "email": "ben@benlesh.com"
//   },
//   "maintainers": [
//     {
//       "username": "cartant",
//       "email": "nicholas@cartant.com"
//     },
//     {
//       "username": "blesh",
//       "email": "ben@benlesh.com"
//     },
//     {
//       "username": "kwonoj",
//       "email": "kwon.ohjoong@gmail.com"
//     }
//   ]