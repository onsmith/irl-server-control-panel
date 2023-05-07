import { Pagination } from "flowbite-react";
import { useState } from "react";

function PaginationExample(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={currentPage}
        layout="table"
        onPageChange={(page: number) => setCurrentPage(page)}
        showIcons
        totalPages={1000}
      />
    </div>
  );
}
export default PaginationExample;
