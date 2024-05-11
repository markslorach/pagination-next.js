import { people } from "@/lib/data";
import Pagination from "./components/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

      <Table className="w-1/2 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {people.slice(startIndex, endIndex).map((person, idx) => (
            <TableRow key={idx}>
              <TableCell className="w-96">{person.name}</TableCell>
              <TableCell>{person.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        itemCount={people.length}
        pageSize={pageSize}
        currentPage={page}
      />
    </main>
  );
}
