/**
 *
 * @summary 날짜 String => Date 변환 함수
 *
 * @link https://github.com/samchon/backend/blob/master/src/utils/DateUtil.ts#L114
 * @description 해당 링크의 코드를 참조해 , Reg Pattern 변환 추가 및 검증 기능 추가
 *
 * @param date "2023-11-02","2023.11.02" 와 같은 문자열
 * @returns Date
 * @throws Error
 */
export function _To_date(date: string): Date {
  const isoDate = date.replace(/[-./,:]/g, '-');
  const toDate = new Date(isoDate);
  if (isNaN(toDate.valueOf()) || date.length != 10)
    throw new Error('Invalid Date Format');
  return toDate;
}
