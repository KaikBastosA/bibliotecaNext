import { Book } from "@/lib/fetchbooks";

export async function fetchBooksBySearch(category: string, searchTerm: string): Promise<Book[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/livros`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Erro ao buscar os livros");
    }

    const data = await res.json();

    if (Array.isArray(data.livros)) {
      const decodedCategory = decodeURIComponent(category);

      const filteredBooks = (data.livros as Book[])
        .filter((book: Book) => book.genero === decodedCategory)
        .filter((book: Book) =>
          book.titulo.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return filteredBooks;
    } else {
      console.error("Dados de livros não encontrados");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
