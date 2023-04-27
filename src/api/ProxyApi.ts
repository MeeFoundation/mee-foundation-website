export interface ProxyApiInterface {
  poll(id: string): Promise<string>;
}
