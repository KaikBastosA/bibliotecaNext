import { fetchBookById } from "@/lib/fetchBookById";
import { Book } from "@/lib/fetchbooks";
import styles from "./styles.module.css";
import ReturnArrow from "@/Components/returnarrow";
import Image from "next/image";

export default async function BookPage({ params }: { params: { id: string } }) {
  const bookId = Number(params.id);
  const book: Book | null = await fetchBookById(bookId);

  if (!book) {
    return <p>Livro não encontrado</p>;
  }

  return (
    <><div className={styles.container}>
      <div className={styles.header}>
        <ReturnArrow />
        <h1>Detalhes do livro</h1>
      </div>
      <div className={styles.bookDetails}>
        <div className={styles.bookImage}>
        <Image src={book.capa} alt={book.titulo} layout="responsive" width={500} height={500} unoptimized/>
        </div>
        <div className={styles.bookInfo}>
          <h2>{book.titulo}</h2>
          <h3>{book.autor}</h3>
          <h4>Sinopse</h4>
          <p>{book.sinopse}</p>
        </div>
      </div>
      <div className={styles.Btn}>
        <button className={styles.addToCartBtn}>
          <span className={styles.price}>R$ {book.preco.toFixed(2)}</span>
          <span>Adicionar ao carrinho</span>
        </button>
      </div>
      </div>
    </>
  );
}
