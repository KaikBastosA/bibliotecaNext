import { Book } from "@/lib/fetchbooks";

export async function fetchBookById(id: number): Promise<Book | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/livros`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Erro ao buscar o livro");
    }

    const data = await res.json();

    if (Array.isArray(data.livros)) {
      return (data.livros as Book[]).find((book: Book) => book.id === id) || null;
    } else {
      console.error("Livros não encontrados");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
