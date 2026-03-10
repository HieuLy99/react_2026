/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useMemo, useState } from "react";

// Generic Context Factory — dùng lại cho bất kỳ params shape nào
function createParamsContext<T extends Record<string, unknown>>(
  initialValues: T,
) {
  type SetParam = <K extends keyof T>(key: K, value: T[K]) => void;

  interface ContextType {
    params: T;
    setParam: SetParam;
    setParams: (newParams: Partial<T>) => void;
    resetParams: () => void;
  }

  const Context = createContext<ContextType | undefined>(undefined);

  function Provider({ children }: { children: React.ReactNode }) {
    const [params, setParamsState] = useState<T>(initialValues);

    const setParam: SetParam = (key, value) => {
      setParamsState((prev) => ({ ...prev, [key]: value }));
    };

    const setParams = (newParams: Partial<T>) => {
      setParamsState((prev) => ({ ...prev, ...newParams }));
    };

    const resetParams = () => setParamsState(initialValues);

    const value = useMemo(
      () => ({ params, setParam, setParams, resetParams }),
      [params],
    );

    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useParams(): ContextType {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useParams must be used within its Provider");
    }
    return context;
  }

  return { Provider, useParams };
}

// Khai báo shape & default values ở đây, context tự suy ra đúng types

export const {
  Provider: ProductsParamsProvider,
  useParams: useProductsParams,
} = createParamsContext<any>({});
