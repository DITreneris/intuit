import type { lt } from './lt';

/** Siaurina `lt` literalus į `string` ir pan., kad `en` su kitais tekstais būtų priskiriamas. */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<Widen<U>>
        : T extends object
          ? { readonly [K in keyof T]: Widen<T[K]> }
          : T;

export type SiteMessages = Widen<typeof lt>;
