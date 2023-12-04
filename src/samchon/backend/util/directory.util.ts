import fs from 'fs';

export class DirectoryUtil {
  private static readonly ROOT_DIR = process.cwd();
  /**
   *
   * @summary Directory 생성 함수
   *
   * @link https://github.com/samchon/backend/blob/master/src/utils/DirectoryUtil.ts#L4
   * @description 디렉토리 경로를 받아서 , 디렉토리를 생성
   *
   * @param "/logs" 와 같은 경로
   */
  static _Mkdir(path: string): Promise<void> {
    path = this._Cipher(path);
    return new Promise((resolve) => {
      fs.promises
        .mkdir(DirectoryUtil.ROOT_DIR + path)
        .then(resolve)
        .catch(() => resolve());
    });
  }
  static _Rmdir(path: string): Promise<void> {
    path = this._Cipher(path);
    return new Promise((resolve) => {
      fs.promises
        .rmdir(DirectoryUtil.ROOT_DIR + path)
        .then(resolve)
        .catch(() => resolve());
    });
  }
  static _Gtdir(path: string): Promise<string[]> {
    path = this._Cipher(path);
    return fs.promises
      .readdir(DirectoryUtil.ROOT_DIR + path)
      .then((element) => element);
  }
  private static _Cipher(path: string) {
    if (path[0] != '/') {
      path = '/' + path;
    }
    return path;
  }
}
