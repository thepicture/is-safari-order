declare module "is-safari-order" {
  type Headers = Record<string, string> | string[] | Array<[string, string]>;
  type IsSafariOrderOptions = {
    areRawHeaders: boolean;
  };

  function isSafariOrder(
    headers: Headers,
    options: IsSafariOrderOptions
  ): boolean;

  export = isSafariOrder;
}
