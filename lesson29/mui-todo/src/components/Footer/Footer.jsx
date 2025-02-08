import { Box, Typography} from "@mui/material";


function Footer() {
   return (
     <>
       <Box
         component="footer"
         sx={{
           py: 2,
           textAlign: "center",
           backgroundColor: "primary.main",
           color: "white",
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
         }}
       >
         <Typography>
           © 2025 Illia Kim. My Git:
           <a
             style={{ textDecoration: "none", color: "inherit" }}
             href="https://github.com/Kim63895/Illia"
             target="_blank"
             rel="noopener noreferrer"
           >
             https://github.com/Kim63895/Illia
           </a>
         </Typography>
         <Typography>
           <a
             href="mailto:kim977563@gmail.com"
             style={{ textDecoration: "none", color: "inherit" }}
           >
             kim977563@gmail.com
           </a>
         </Typography>
         <Box
           sx={{
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             mt: 2,
           }}
         ></Box>
       </Box>
     </>
   );
}
export default Footer;
