"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import { Book } from "@/lib/fetchbooks";

interface BookShelfProps {
  books: Book[];
  category: string;
}

export default function BookShelf({ books, category }: BookShelfProps) {
  const router = useRouter();

  const handleBookClick = (id: number) => {
    router.push(`/book/${id}`);
  };

  const handleViewMoreClick = () => {
    router.push(`/category/${category}`);
  };

  return (
    <div className={styles.shelf}>
      <div className={styles.header}>
        <h2>{category}</h2>
        <button className={styles.viewMore} onClick={handleViewMoreClick}>
          Ver mais
        </button>
      </div>
      <div className={styles.books}>
        {books.length > 0 ? (
          books.slice(0, 4).map(book => (
            <div key={book.id} className={styles.book} onClick={() => handleBookClick(book.id)}>
              <div className={styles.cape}>
                <Image src={book.capa} alt={book.titulo} width={150} height={220} unoptimized />
              </div>
              <div className={styles.info}>
                <h3>{book.titulo}</h3>
                <p>{book.autor}</p>
                <p className={styles.bookPrice}>
                  {book.preco !== undefined ? `R$ ${book.preco.toFixed(2)}` : "Preço indisponível"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum livro disponível</p>
        )}
      </div>
    </div>
  );
}
