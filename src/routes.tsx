import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import ProductsIndex from "./pages/ProductsIndex";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import { productSlugs } from "./data/products";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, Component: Index, entry: "src/pages/Index.tsx" },
      { path: "products", Component: ProductsIndex, entry: "src/pages/ProductsIndex.tsx" },
      {
        path: "products/:slug",
        Component: ProductPage,
        entry: "src/pages/ProductPage.tsx",
        // Concrete URLs the generator should pre-render
        getStaticPaths: () => productSlugs.map((slug) => `/products/${slug}`),
      },
      { path: "*", Component: NotFound, entry: "src/pages/NotFound.tsx" },
    ],
  },
];
