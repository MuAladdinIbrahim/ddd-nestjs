export default interface ICoordinator {
  redirect: (input: { data: any; id: string }) => void;
  notify: (input: { data: any; id: string }) => void;
}
