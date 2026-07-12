import { Breadcrumbs, Link, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function App() {
  function handleClick(event) {
    event.preventDefault();
    console.log("You clicked a breadcrumb.");
  }

  return (
    <Stack
      sx={{
        margin: 3,
        gap: 3,
      }}
    >
      <Breadcrumbs>
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link href="/products" onClick={handleClick}>
          Products
        </Link>
        <Link href="/electronics" onClick={handleClick}>
          Electronics
        </Link>
      </Breadcrumbs>

      <Breadcrumbs separator="->">
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link href="/products" onClick={handleClick}>
          Products
        </Link>
        <Link href="/electronics" onClick={handleClick}>
          Electronics
        </Link>
      </Breadcrumbs>

      <Breadcrumbs separator={<NavigateNextIcon />}>
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link href="/products" onClick={handleClick}>
          Products
        </Link>
        <Link href="/electronics" onClick={handleClick}>
          Electronics
        </Link>
      </Breadcrumbs>

      <Breadcrumbs separator={<NavigateNextIcon />} maxItems={3}>
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link href="/products" onClick={handleClick}>
          Products
        </Link>
        <Link href="/electronics" onClick={handleClick}>
          Electronics
        </Link>
      </Breadcrumbs>

      <Breadcrumbs
        separator={<NavigateNextIcon />}
        maxItems={3}
        itemsBeforeCollapse={2}
      >
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link href="/products" onClick={handleClick}>
          Products
        </Link>
        <Link href="/electronics" onClick={handleClick}>
          Electronics
        </Link>
      </Breadcrumbs>

      <Breadcrumbs
        separator={<NavigateNextIcon />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link href="/" onClick={handleClick}>
          Home
        </Link>
        <Link href="/category" onClick={handleClick}>
          Category
        </Link>
        <Link href="/products" onClick={handleClick}>
          Products
        </Link>
        <Link href="/electronics" onClick={handleClick}>
          Electronics
        </Link>
      </Breadcrumbs>
    </Stack>
  );
}

export default App;
