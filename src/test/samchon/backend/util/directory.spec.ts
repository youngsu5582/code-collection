import { DirectoryUtil } from 'src/samchon/backend/util/directory.util';

describe('폴더 생성 Function', () => {
  const directoryInfos = ['/new', 'custom'];
  test.each(directoryInfos)(
    '해당 경로에 폴더를 생성한다.',
    async (directoryInfo: string) => {
      // Given

      // When
      await DirectoryUtil._Mkdir(directoryInfo);

      //Then
      // 해당 부분에 대해 다양한 방법을 시도했으나
      // 단순 Directory 만 생성하므로 구체적인 확인 방법이 없음
      // 만약에 없으면 , throw Error 를 하므로 try-catch 구문 구현후
      // 확정 pass , 확정 fail 로 구분
      try {
        const result = await DirectoryUtil._Gtdir(directoryInfo);
        expect(result).toEqual([]);
      } catch (err) {
        console.log(err);
        expect(true).toBeFalsy();
      }
    },
  );
  afterAll(() => {
    directoryInfos.forEach((path) => DirectoryUtil._Rmdir(path));
  });
});
