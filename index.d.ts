interface CodeMessage {
  [code: number]: string;
}

export const codeMessage: CodeMessage;

export function isOk(code: string | number): boolean;

export function showTips(val: { code?: number; text?: string }): void;
