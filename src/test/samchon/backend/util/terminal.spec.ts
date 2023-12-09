import { _To_date } from 'src/samchon/backend/util/date.util';
import { Terminal } from 'src/samchon/backend/util/terminal';

describe('Command 실행 함수', () => {
  it(
    '단일 커맨드를 실행하는 경우',
    async () => {
        //Given
        const command = "ls";    

        //When
        const result = await Terminal.execute({commands:[command]});

        //Then
        expect(result).toContain("package.json");
    },
  );
  it('다중 커맨드를 실행하는 경우',
  async () =>{
    //Given
    const commands = ["git log","grep feat"];

    //When
    const result = await Terminal.execute({commands,options:" | "});

    //Then
    expect(result).toContain("feat");
  })

});
