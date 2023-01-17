import { FC, PropsWithChildren } from 'react';

export type FCWithChildren<T = object> = FC<PropsWithChildren<T>>;
