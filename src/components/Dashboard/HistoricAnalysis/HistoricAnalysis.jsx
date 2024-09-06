import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import { useState } from "react";
import ViewDetailsModal from "./ViewDetailsModal";
import ViewDetailsSlug from "./ViewDetailsSlug";
import { useLocation } from "react-router-dom";

function HistoricAnalysis() {
  const [status] = useState("No Plagio");
  const statusColor = status === "Plagio" ? "red" : "green";
  const slug = "songProduction.mp3";

  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: {
            xs: "full",
            sm: "100%",
          },
          maxWidth: "100%",
        }}
      >
        <Table
          sx={{
            width: "100%",
            minWidth: isMobile ? "auto" : 650,
            tableLayout: "fixed",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center">Titulo</TableCell>
              {isMobile ? (
                <TableCell align="center"></TableCell>
              ) : (
                <>
                  <TableCell align="center">Porcentaje</TableCell>
                  <TableCell align="center">Resultado</TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" sx={{ padding: "2px" }}>
                02/08/2024
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  padding: "8px",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                songProduction.mp3
              </TableCell>
              {isMobile ? (
                <TableCell align="center" sx={{ padding: "8px" }}>
                  {location.pathname === "/dashboard" ? (
                    <ViewDetailsModal slug={slug} />
                  ) : location.pathname === "/dashboard/historic-analysis" ? (
                    <ViewDetailsSlug slug={slug} />
                  ) : null}
                </TableCell>
              ) : (
                <>
                  <TableCell align="center">3%</TableCell>
                  <TableCell align="center" sx={{ color: statusColor }}>
                    {status}
                  </TableCell>
                  <TableCell align="center">
                    {location.pathname === "/dashboard" ? (
                      <ViewDetailsModal slug={slug} />
                    ) : location.pathname === "/dashboard/historic-analysis" ? (
                      <ViewDetailsSlug slug={slug} />
                    ) : null}
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default HistoricAnalysis;

// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   useMediaQuery,
//   useTheme,
//   Paper,
// } from "@mui/material";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ViewDetailsModal from "./ViewDetailsModal";
// import ViewDetailsSlug from "./ViewDetailsSlug";
// import { useLocation } from "react-router-dom";

// function HistoricAnalysis() {
//   const [data, setData] = useState([]);
//   const location = useLocation();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/historic-analysis");
//         setData(response.data); // Asume que response.data es un array con los registros
//       } catch (error) {
//         console.error("Error fetching data from backend:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//       }}
//     >
//       <TableContainer
//         component={Paper}
//         sx={{
//           width: {
//             xs: "full",
//             sm: "100%",
//           },
//           maxWidth: "100%",
//         }}
//       >
//         <Table
//           sx={{
//             width: "100%",
//             minWidth: isMobile ? "auto" : 650,
//             tableLayout: "fixed",
//           }}
//           aria-label="simple table"
//         >
//           <TableHead>
//             <TableRow>
//               <TableCell align="center">Fecha</TableCell>
//               <TableCell align="center">Titulo</TableCell>
//               {isMobile ? (
//                 <TableCell align="center"></TableCell>
//               ) : (
//                 <>
//                   <TableCell align="center">Porcentaje</TableCell>
//                   <TableCell align="center">Resultado</TableCell>
//                 </>
//               )}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row) => (
//               <TableRow key={row.id}>
//                 <TableCell align="center" sx={{ padding: "2px" }}>
//                   {new Date(row.date).toLocaleDateString()}
//                 </TableCell>
//                 <TableCell
//                   align="center"
//                   sx={{
//                     padding: "8px",
//                     textOverflow: "ellipsis",
//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {row.title}
//                 </TableCell>
//                 {isMobile ? (
//                   <TableCell align="center" sx={{ padding: "8px" }}>
//                     {location.pathname === "/dashboard" ? (
//                       <ViewDetailsModal slug={row.slug} />
//                     ) : location.pathname === "/dashboard/historic-analysis" ? (
//                       <ViewDetailsSlug slug={row.slug} />
//                     ) : null}
//                   </TableCell>
//                 ) : (
//                   <>
//                     <TableCell align="center">{row.percentage}%</TableCell>
//                     <TableCell
//                       align="center"
//                       sx={{ color: row.result === "Plagio" ? "red" : "green" }}
//                     >
//                       {row.result}
//                     </TableCell>
//                     <TableCell align="center">
//                       {location.pathname === "/dashboard" ? (
//                         <ViewDetailsModal slug={row.slug} />
//                       ) : location.pathname === "/dashboard/historic-analysis" ? (
//                         <ViewDetailsSlug slug={row.slug} />
//                       ) : null}
//                     </TableCell>
//                   </>
//                 )}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// }

// export default HistoricAnalysis;
