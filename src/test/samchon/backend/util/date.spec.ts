import { _To_date } from 'src/samchon/backend/util/date.util';

describe('날짜 표시 string -> Date 로 변환', () => {
  test.each([
    '2023-11-02',
    '2023.11.02',
    '2023,11,02',
    '2023/11/02',
    '2023:11:02',
  ])(
    '[Good] 날짜 Format 에 맞는 문자열을 입력하는 경우',
    (dateFormat: string) => {
      //Given : dataFormat

      //When
      const date = _To_date(dateFormat);

      //Then
      expect(date).toBeInstanceOf(Date);
      expect(date.toISOString()).toContain('2023-11-02');
    },
  );

  test.each(['string', '2023년11월20일', '2'])(
    '[Bad] Format에 맞지 않는 문자열을 입력하는 경우',
    (invalidFomrat: string) => {
      expect(() => {
        _To_date(invalidFomrat);
      }).toThrow(Error);
    },
  );
});
