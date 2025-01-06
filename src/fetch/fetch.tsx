import { useQuery } from '@tanstack/react-query';
import { SingleCategory } from '../types';
import { v4 as uuidv4 } from 'uuid';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface Category {
  id: string;
  name: string;
  identifier: string;
  position: number;
  description: string;
  createdAt: string;
}

export const fetchCategoryById = async (
  id: string
): Promise<{ category: Category; lengthCategory: number }> => {
  const response = await fetch(`${BASE_URL}/categories/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch category.');
  }
  const category = await response.json();

  const totalResponse = await fetch(`${BASE_URL}/categories`);
  if (!totalResponse.ok) {
    throw new Error('Failed to fetch total categories.');
  }
  const lengthCategory = (await totalResponse.json()).length;

  return { category, lengthCategory };
};

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ['category', id],
    queryFn: () => fetchCategoryById(id),
  });
};

export interface Part {
  id: string;
  name: string;
  price: number;
  partId: string;
  category: string;
  stock: number;
  customizable: boolean;
  createdAt: string;
}

export const fetchPartsByCategoryIdentifier = async (
  identifier: string
): Promise<Part[]> => {
  const response = await fetch(`${BASE_URL}/parts`);
  if (!response.ok) {
    throw new Error('Failed to fetch parts.');
  }
  const parts: Part[] = await response.json();
  return parts.filter((part) => part.category === identifier);
};

export const usePartsByCategoryIdentifier = (identifier: string) => {
  return useQuery({
    queryKey: ['parts', identifier],
    queryFn: () => fetchPartsByCategoryIdentifier(identifier),
  });
};

interface Category {
  id: string;
  name: string;
  identifier: string;
  description: string;
}

export const fetchCategories = async (): Promise<SingleCategory[]> => {
  const response = await fetch(`${BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories.');
  }
  return response.json();
};

export interface Part {
  id: string;
  name: string;
  price: number;
  partId: string;
  category: string;
  stock: number;
  customizable: boolean;
  createdAt: string;
}

export const fetchParts = async (): Promise<Part[]> => {
  const response = await fetch(`${BASE_URL}/parts`);
  if (!response.ok) {
    throw new Error('Failed to fetch parts.');
  }
  return response.json();
};

export const addOrder = async (
  firstName: string,
  lastName: string,
  email: string,
  value: number,
  details: string[]
): Promise<void> => {
  const newOrder = {
    id: uuidv4(),
    firstName,
    lastName,
    email,
    value,
    details,
    status: 'processing',
    createdAt: new Date().toISOString(),
  };

  const response = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrder),
  });

  if (!response.ok) {
    throw new Error('Failed to add order.');
  }
};
