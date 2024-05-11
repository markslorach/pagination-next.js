import { people } from "@/lib/data";
import Pagination from "./components/Pagination";

interface Props {
  searchParams: { page: string };
}

export default function Home({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 5;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <main>
      <h1 className="text-xl font-semibold mb-10">Pagination Example</h1>
      <section className="mb-10">
        <ul>
          {people.slice(startIndex, endIndex).map((person, idx) => (
            <li key={idx}>
              {person.name}, {person.age}
            </li>
          ))}
        </ul>
      </section>
      <Pagination
        itemCount={people.length}
        pageSize={pageSize}
        currentPage={page}
      />
    </main>
  );
}
