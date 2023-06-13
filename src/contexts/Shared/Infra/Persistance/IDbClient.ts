export interface IDbClient {
  model: any;
  find(query: any): Promise<any>;
  findOne(query: any): Promise<any>;
  insert(query: any): Promise<any>;
  update(query: any): Promise<any>;
  delete(query: any): Promise<any>;
}
