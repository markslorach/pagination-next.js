# Server-Side Pagination for Next.js App Router Projects

Pagination component and example project for server-side pagination within Next.js App Router projects. 

**Key Features**

- **Server-side Pagination:** Paginates datasets by fetching data on the server and rendering only the necessary subset for each page.
- **Next.js App Router:** Utilises the App Router for routing and navigation within the Next.js application.
- **Custom Pagination Component:** Includes a reusable Pagination component to manage page navigation and display current page information.

**How to Use**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/markslorach/pagination-next.js.git
   ```
   
2. **Install Dependencies:**
   ```bash
   npm install
   ```
   
3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   
View project on http://localhost:3000/

**Project Structure**

- `app/page.tsx`: Main page component that handles data fetching and pagination logic.
- `components/Pagination.tsx`: Reusable Pagination component.
- `db/exampleData.ts`: Example data used for demonstration.

Project uses Shadcn/ui for the example data table and pagination component buttons.
  
![project_example](https://github.com/markslorach/pagination-next.js/assets/15185553/f172ad64-8b65-40f4-95e4-4a020009d411)
