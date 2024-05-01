// <----------------------------Pagination--------------------->
// const BlogsList = async ({
//     locale,
//     searchParams,
//   }: {
//     locale: string;
//     searchParams?: {
//       query?: string | undefined;
//       page?: number | undefined;
//     };
//   }) => {
//     interface AuthorProps {
//       name: string;
//       email: string;
//       profile: string;
//     }
  
//     interface DataProps {
//       id: number;
//       title: string;
//       slug: string;
//       content: string;
//       summary: string;
//       min_read: number;
//       short_link: string;
//       status: string;
//       author: AuthorProps;
//     }
  
//     interface Users {
//       current_page: number;
//       data: DataProps[];
//       last_page: number;
//     }
  
//     const users: Users = await fetchAllArticles(
//       (searchParams?.page as number) || 1
//     );

// use pagination:
// <div className="flex justify-center mt-5 items-center" dir="ltr">
//         {users?.last_page > 1 && (
//           <CustomPagination
//             totalPage={users?.last_page}
//             current_page={current_page}
//           />
//         )}
//       </div>

// -----------------------------------------------------------------------
