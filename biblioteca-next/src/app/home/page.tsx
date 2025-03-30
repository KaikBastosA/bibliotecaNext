import BookShelf from "@/Components/bookShelf";
import { fetchBooks } from "@/lib/fetchbooks";
import styles from "./styles.module.css";

export default async function Home() {
  const categories = [
    "Best-sellers",
    "Clássicos",
    "Infantil",
    "Suspense",
    "Distopia",
    "Ficção Científica",
    "Fantasia",
  ];
  
  const booksByCategory = await Promise.all(
    categories.map(category => fetchBooks(category))
  );

  return (
    <>
    <div className={styles.content}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.yellow}>25% de desconto</h1>
          <h1>nos livros do Paulo Coelho!</h1>
        </div>
      </div>
      <div>
        {categories.map((category, index) => (
          <BookShelf key={category} category={category} books={booksByCategory[index]} />
        ))}
      </div>
    </div>
    </>
  );
}
