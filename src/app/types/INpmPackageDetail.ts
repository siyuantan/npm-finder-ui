export interface INpmPackageDetail {
  _id: string;
  _rev: string;
  name: string;
  description: string;
  "dist-tags": {latest: string, next: string, experimental: string, beta: string, rc: string};
  versions: string[];
  maintainers: {name: string, email: string}[];
  time: {};
  repository: {type: string, url: string, directory: string};
  readme: string;
  readmeFilename: string;
  homepage: string;
  keywords: string[];
  bugs: {url: string};
  users: any;
  license: string;
}