import { Button, Stack } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <>
      <Stack>
        <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<FileUploadIcon />}>
            Upload
          </Button>
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Download
          </Button>
        </Stack>

        <Stack
          direction="row"
          sx={{
            margin: "20px",
          }}
        >
          <Button
            variant="contained"
            startIcon={
              <SearchIcon
                sx={{
                  backgroundColor: "lightgray",
                }}
              />
            }
          >
            Search
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
