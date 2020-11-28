import { List, Record } from 'immutable';
import dayjs, { Dayjs } from 'dayjs';

import { JSObject } from '../types/Common';

export class ImageLinks extends Record<{
  smallThumbnail: string;
  thumbnail: string;
}>({
  smallThumbnail: '',
  thumbnail: '',
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    return new ImageLinks(params);
  }
}

export class VolumeInfo extends Record<{
  title: string;
  subtitle: string;
  authors: List<string>;
  publisher: string;
  publishedDate: Dayjs;
  description: string;
  imageLinks: ImageLinks;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}>({
  title: '',
  subtitle: '',
  authors: List(),
  publisher: '',
  publishedDate: dayjs(),
  description: '',
  imageLinks: new ImageLinks(),
  previewLink: '',
  infoLink: '',
  canonicalVolumeLink: '',
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    params.authors = List(params.authors);
    params.publishedDate = dayjs(params.publishedDate);
    params.imageLinks = ImageLinks.fromResponse(params.imageLinks);
    return new VolumeInfo(params);
  }
  get descriptionWithNewLine() {
    return this.description.replace('。 ', '\n');
  }
  get publishedDateString() {
    return this.publishedDate.format('YYYY/MM/DD');
  }
}

export class Volume extends Record<{
  id: number;
  selfLink: string;
  volumeInfo: VolumeInfo;
}>({
  id: 0,
  selfLink: '',
  volumeInfo: new VolumeInfo(),
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    params.volumeInfo = VolumeInfo.fromResponse(params.volumeInfo);
    return new Volume(params);
  }
}

export class VolumeList extends Record<{
  kind: string;
  totalItems: number;
  items: List<Volume>;
}>({
  kind: '',
  totalItems: 0,
  items: List(),
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    console.log("ブックスパラムス:" + JSON.stringify(params));
    params.items = List(params.items.map((item: JSObject) => Volume.fromResponse(item)));
    return new VolumeList(params);
  }
}


export class GojsonVolumeList extends Record<{
  items: List<GojsonVolume>;
}>({
  items: List(),
}) {
  static fromResponse(response: JSObject) {
    const params = { ...response };
    console.log("ジェイソンパラムス:" + JSON.stringify(params));
    params.items = List(params.items.map((item: JSObject) => GojsonVolume.fromResponse(item)));
    return new GojsonVolumeList(params);
  }
}


// golangserver用のVolume テストjsonを受け取る
export class GojsonVolume extends Record<{
  code: string,
  name: string,
  continent: string,
  region: string,
  surfaceArea: number,
  indepYear: number,
  population: number,
  lifeExpectancy: number,
  gnp: number,
  gnpOld: number,
  localName: string,
  governmentForm: string,
  headOfState: string,
  capital: number,
  code2: string,
  id: string,
  cityName: string,
  district: string,
  cityPopulation: number,
  language: string,
  isOfficial: string,
  percentage: number,
}>({
  code: '',
  name: '',
  continent: '',
  region: '',
  surfaceArea: 0,
  indepYear: 0,
  population: 0,
  lifeExpectancy: 0,
  gnp: 0,
  gnpOld: 0,
  localName: '',
  governmentForm: '',
  headOfState: '',
  capital: 0,
  code2: '',
  id: '',
  cityName: '',
  district: '',
  cityPopulation: 0,
  language: '',
  isOfficial: '',
  percentage: 0,

}) {
  // ここで、受け取ったparamsをGojsonVolumeオブジェクトへ格納する
  static fromResponse(response: JSObject) {
    const params = { ...response };
    return new GojsonVolume(params);
  }
}
