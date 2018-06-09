export interface IStencilElementInjector {
  create(): Promise<HTMLStencilElement>
}
