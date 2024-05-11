# Server-Side Pagination for Next.js App Router Projects.

This project demonstrates how to implement server-side pagination in a Next.js application using the App Router. The example focuses on paginating through an array of data, showcasing how to handle URL parameters and fetch the relevant data on each page transition.

**Key Features**

- **Server-side Pagination:** Efficiently paginates datasets by fetching data on the server and rendering only the necessary subset for each page.
- **Next.js App Router:** Utilises the modern App Router for routing and navigation within the Next.js application.
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
   
3. **Run the Development Server to View Example:**
   ```bash
   npm run dev
   ```

**Project Structure**

- `app/page.tsx`: Main page component that handles data fetching and pagination logic.
- `components/Pagination.tsx`: Reusable Pagination component.
- `db/exampleData.ts`: Example data used for demonstration.
  
![project_example](https://github.com/markslorach/pagination-next.js/assets/15185553/f172ad64-8b65-40f4-95e4-4a020009d411)
