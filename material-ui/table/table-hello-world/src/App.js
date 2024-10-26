import {
  TableContainer,
  TableHead,
  TableFooter,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const emps = [
  {
    id: 1,
    first_name: "Antoni",
    last_name: "Buckerfield",
    email: "abuckerfield0@shinystat.com",
    gender: "Male",
    ip_address: "182.8.153.200",
  },
  {
    id: 2,
    first_name: "Karel",
    last_name: "Arlidge",
    email: "karlidge1@shinystat.com",
    gender: "Male",
    ip_address: "18.86.250.111",
  },
  {
    id: 3,
    first_name: "Magdalena",
    last_name: "Yellowlee",
    email: "myellowlee2@webeden.co.uk",
    gender: "Female",
    ip_address: "88.120.72.62",
  },
  {
    id: 4,
    first_name: "Martainn",
    last_name: "Josh",
    email: "mjosh3@homestead.com",
    gender: "Male",
    ip_address: "6.112.76.189",
  },
  {
    id: 5,
    first_name: "Nessi",
    last_name: "Heardman",
    email: "nheardman4@reuters.com",
    gender: "Female",
    ip_address: "107.125.118.162",
  },
  {
    id: 6,
    first_name: "Ray",
    last_name: "Flowitt",
    email: "rflowitt5@skype.com",
    gender: "Female",
    ip_address: "88.162.37.240",
  },
  {
    id: 7,
    first_name: "Barclay",
    last_name: "Balas",
    email: "bbalas6@chronoengine.com",
    gender: "Male",
    ip_address: "59.24.91.35",
  },
  {
    id: 8,
    first_name: "Hermine",
    last_name: "Woodward",
    email: "hwoodward7@umich.edu",
    gender: "Female",
    ip_address: "170.181.197.214",
  },
  {
    id: 9,
    first_name: "Laney",
    last_name: "Malshinger",
    email: "lmalshinger8@facebook.com",
    gender: "Male",
    ip_address: "253.191.224.241",
  },
  {
    id: 10,
    first_name: "Rozalin",
    last_name: "Bousquet",
    email: "rbousquet9@ucsd.edu",
    gender: "Female",
    ip_address: "193.20.18.39",
  },
];

function App() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        margin: 2,
        width: "40vw",
        height: "40vh", // Set maxHeight to enable sticky header
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell sortDirection="asc">Gender</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {emps.map((emp, index) => (
            <TableRow hover>
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.first_name}</TableCell>
              <TableCell>{emp.last_name}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
