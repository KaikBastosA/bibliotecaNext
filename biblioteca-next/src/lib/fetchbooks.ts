export interface Book {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  preco: number;
  sinopse: string;
  capa: string;
}

export async function fetchBooks(category: string): Promise<Book[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/livros`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Erro ao buscar os livros");
    }

    const data = await res.json();

    if (Array.isArray(data.livros)) {
      return (data.livros as Book[]).filter((book: Book) => book.genero === category);
    } else {
      console.error("Dados de livros não encontrados ");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
