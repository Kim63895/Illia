import {
  Container,
  Typography,
  Divider,
  ListItem,
  List,
  ListItemText,
} from "@mui/material";
function Home() {
  return (
    <>
      <Container>
        <Typography variant="h2" sx={{ mt: 4 }}>
          About Me
        </Typography>
        <Container
          maxWidth="md"
          sx={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, mt: 4 }}
        >
          <Typography variant="h4">Illia Kim</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5">Professional Summary</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Motivated and detail-oriented <strong>Front-End Developer</strong>{" "}
            with experience in JavaScript, React, and modern web technologies.
            Skilled in building user-friendly interfaces and delivering
            high-quality code. Proficient in multiple languages with strong
            communication skills.
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5">Skills</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Programming Languages & Frameworks"
                secondary="JavaScript, React, jQuery, CSS, HTML, Bootstrap, Redux"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Version Control" secondary="GitHub" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Languages"
                secondary="English (B1), Spanish (A1), Polish (B1), Russian (Native), Ukrainian (Native)"
              />
            </ListItem>
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5">Education</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Pro Front-End Developer Course – Hillel IT School"
                secondary="2024 – 2025 | Comprehensive training in Front-End development, including advanced JavaScript and React."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Bachelor's Degree in Management – Academy of Applied Science"
                secondary="2020 – 2025 | Academy of Management and Administration in Opole"
              />
            </ListItem>
          </List>
        </Container>
      </Container>
    </>
  );
}
export default Home;
