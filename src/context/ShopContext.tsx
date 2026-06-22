import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../data';

export type UserRole = 'admin' | 'user' | null;

interface ShopContextType {
  products: Product[];
  categories: string[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
  filteredProducts: Product[];
  currentCategory: string;
  setCurrentCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  userRole: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  useEffect(() => {
    const saved = localStorage.getItem('classyFitsProducts_v2');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(INITIAL_PRODUCTS);
      localStorage.setItem('classyFitsProducts_v2', JSON.stringify(INITIAL_PRODUCTS));
    }
    
    const savedRole = localStorage.getItem('classyFitsRole') as UserRole;
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
    };
    const updated = [newProduct, ...products];
    setProducts(updated);
    localStorage.setItem('classyFitsProducts_v2', JSON.stringify(updated));
  };

  const deleteProduct = (id: string) => {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem('classyFitsProducts_v2', JSON.stringify(updated));
  };
  
  const login = (role: UserRole) => {
    setUserRole(role);
    localStorage.setItem('classyFitsRole', role || '');
  };
  
  const logout = () => {
    setUserRole(null);
    localStorage.removeItem('classyFitsRole');
  };

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(p => {
    const matchesCat = currentCategory === 'All' || p.category === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <ShopContext.Provider value={{
      products,
      categories,
      addProduct,
      deleteProduct,
      filteredProducts,
      currentCategory,
      setCurrentCategory,
      searchQuery,
      setSearchQuery,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      userRole,
      login,
      logout
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within ShopProvider');
  return context;
};
