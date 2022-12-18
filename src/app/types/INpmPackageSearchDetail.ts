import { INpmPackageDetail } from "./INpmPackageDetail";

export interface INpmPackageSearchDetail {
  objects: {package: INpmPackageDetail}[],
  time: string,
  total: number
}