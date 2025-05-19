export interface MessageStrategy {
  send: (m: string, options?: any) => void;
}
