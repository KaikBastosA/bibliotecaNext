
import { fetchBooksBySearch } from "@/lib/fetchBySearch";
import { Book } from "@/lib/fetchbooks";
import styles from "./styles.module.css";
import searchIcon from '@/assets/Search.png'
import ReturnArrow from "@/Components/returnarrow";
import Image from "next/image";
import Link from "next/link";

export default async function BooksByCategory({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { searchTerm?: string };
}) {
  const searchTerm = searchParams.searchTerm || "";

  const books = await fetchBooksBySearch(params.category, searchTerm);

  return (
    <div className={styles.container}>

      <div className={styles.searchContainer}>
        <div className={styles.searchBar}>
          <Image src={searchIcon} alt="icone de pesquisa" />
          <form action={`/category/${params.category}`} method="get" className={styles.formSearch}>
            <input
              type="text"
              name="searchTerm"
              placeholder="Pesquisar por título"
              defaultValue={searchTerm}
              className={styles.searchInput}
            />
          </form>
        </div>
      </div>
      <div className={styles.header}>
        <ReturnArrow />
        <h1>{decodeURIComponent(params.category)}</h1>
      </div>

      <div className={styles.books}>
        {books.length > 0 ? (
          books.map((book: Book) => (
            <Link key={book.id} href={`/book/${book.id}`} className={styles.book}>
              <div className={styles.cape}>
                <img src={book.capa} alt={book.titulo} />
              </div>
              <div className={styles.info}>
                <h3>{book.titulo}</h3>
                <p>{book.autor}</p>
                <p>{book.preco ? `R$ ${book.preco.toFixed(2)}` : "Preço indisponível"}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>Nenhum livro disponível</p>
        )}
      </div>
    </div>
  );
}
