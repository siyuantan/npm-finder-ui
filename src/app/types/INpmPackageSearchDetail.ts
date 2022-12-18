import { INpmSearchPackageDetail } from "./INpmSearchPackageDetail";

export interface INpmPackageSearchDetail {
  objects: {package: INpmSearchPackageDetail}[],
  time: string,
  total: number
}