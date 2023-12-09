import cp from "child_process";

export class Terminal {
    /**
     * @summary Command 실행 함수
     * 
     * @link https://github.com/samchon/backend/blob/master/src/utils/Terminal.ts
     * @param commands 실행할 명령어들
     * 
     * @returns 
     */
    static async execute(
      {
        options = " && ",
        commands
      }: {
        commands: string[];
        options?: string;
      }): Promise<string> {
    return new Promise((resolve, reject) => {
      
      cp.exec(
        commands.join(options),
        (error: Error | null, stdout: string, stderr: string) => {
          if (error) reject(error);
          else resolve(stdout);
        },
      );
    });
  }
}