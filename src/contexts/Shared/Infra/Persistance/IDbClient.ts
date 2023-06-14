export interface IDbClient {
  model: any;
  find(query: any): Promise<any>;
  findOne(query: any): Promise<any>;
  insert(data: any): Promise<any>;
  update(query: any, updates: any): Promise<any>;
  delete(query: any): Promise<any>;
}
