export default interface ILocalStorage {
  persistInMemory(data: { key: string; value: any }): void;
  removeFromMemory(data: { key: string; value: any }): void;
  getRecordById(dbkey: string, id: string): any;
}
