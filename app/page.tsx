import { users } from "@/db/exampleData";
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

  // Change the page size to choose how many items display per page
  const pageSize = 5;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <main>
      <h1 className="mb-10 text-xl font-semibold">Pagination Example</h1>

      <Table className="mb-10 w-fit">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.slice(startIndex, endIndex).map((user, idx) => (
            <TableRow key={idx}>
              <TableCell className="w-96">{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        itemCount={users.length}
        pageSize={pageSize}
        currentPage={page}
      />
    </main>
  );
}
