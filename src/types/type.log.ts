export type TLogLevel = 'info' | 'warn' | 'error';
export type TLogMessage = string;

export type ILog = {
    level: TLogLevel;
    message: TLogMessage;
}