"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Project } from "./types";

export interface PendingChange {
  projectId: number;
  field: keyof Project;
  oldValue: unknown;
  newValue: unknown;
}

interface ProductContextType {
  products: Project[];
  pendingChanges: Map<number, Partial<Project>>;
  setProducts: (products: Project[]) => void;
  updateProductField: (projectId: number, field: keyof Project, value: unknown) => void;
  saveProductChanges: (projectId: number) => Promise<void>;
  discardProductChanges: (projectId: number) => void;
  getPendingChangesForProject: (projectId: number) => Partial<Project> | null;
  hasUnsavedChanges: (projectId: number) => boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children, initialProducts = [], onProductsChange }: { children: ReactNode; initialProducts?: Project[]; onProductsChange?: (products: Project[]) => void }) {
  const [products, setProducts] = useState<Project[]>(initialProducts);
  const [pendingChanges, setPendingChanges] = useState<Map<number, Partial<Project>>>(new Map());

  const updateProductField = useCallback(
    (projectId: number, field: keyof Project, value: unknown) => {
      setPendingChanges((prev) => {
        const newMap = new Map(prev);
        const current = newMap.get(projectId) || {};
        newMap.set(projectId, { ...current, [field]: value });
        return newMap;
      });
    },
    []
  );

  const saveProductChanges = useCallback(async (projectId: number) => {
    const changes = pendingChanges.get(projectId);
    if (!changes) return;

    let updatedProducts: Project[] = [];
    setProducts((prev) => {
      const next = prev.map((p) => (p.id === projectId ? { ...p, ...changes } : p));
      updatedProducts = next;
      return next;
    });

    // Persist to localStorage for now
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hoskbrew_products");
      const existing = saved ? JSON.parse(saved) : [];
      const updated = existing.map((p: Project) =>
        p.id === projectId ? { ...p, ...changes } : p
      );
      localStorage.setItem("hoskbrew_products", JSON.stringify(updated));
    }

    // Propagate to parent if provided
    if (onProductsChange && updatedProducts.length) {
      onProductsChange(updatedProducts);
    }

    setPendingChanges((prev) => {
      const newMap = new Map(prev);
      newMap.delete(projectId);
      return newMap;
    });
  }, [pendingChanges, onProductsChange]);

  const discardProductChanges = useCallback((projectId: number) => {
    setPendingChanges((prev) => {
      const newMap = new Map(prev);
      newMap.delete(projectId);
      return newMap;
    });
  }, []);

  const getPendingChangesForProject = useCallback(
    (projectId: number): Partial<Project> | null => {
      return pendingChanges.get(projectId) || null;
    },
    [pendingChanges]
  );

  const hasUnsavedChanges = useCallback(
    (projectId: number): boolean => {
      return pendingChanges.has(projectId);
    },
    [pendingChanges]
  );

  const value: ProductContextType = {
    products,
    pendingChanges,
    setProducts,
    updateProductField,
    saveProductChanges,
    discardProductChanges,
    getPendingChangesForProject,
    hasUnsavedChanges,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within ProductProvider");
  }
  return context;
}
