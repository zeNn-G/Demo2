export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface Post {
  id: number;
  category_id: number;
  title: string;
  description: string;
  date: string;
  author: string;
  tags?: string[];
}
