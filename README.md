
## Task

This project implements a multi-page application using an external API and the `react-router-dom` library. You can choose the routing approach: the object-based (`createBrowserRouter`) or the component-based (`BrowserRouter`). Both options are valid and do not affect the final result.

## API

The project uses [JSONPlaceholder] as the API. You can find examples of its usage on the website as well as in various videos and articles. You are also allowed to use any other public API, provided that the structure of the pages and the relationships between them remain unchanged.

## Application Pages

### Navigation

In the header of the application (nav section), there are two main links:

1. **User List**:
   - Clicking on a user → user detail page (Page 2).

2. **User Page**:
   - Contains detailed information about the user and a list of their photo albums.
   - Clicking on an album → photo albums page (Page 4).

3. **Photo Albums Page**:
   - Contains a list of album titles.
   - Clicking on an album → page with photos (Page 4).

4. **Album Page**:
   - Displays photos from the album and the name of the user who created it.
   - A loading indicator is required while the album data is being loaded.
   - Clicking on the username → user detail page (Page 2).

5. **404 Page**:
   - Displays a message that the page was not found, with a link to "Return to Home."
   - This page must be implemented manually.

## Requirements

1. The application is responsive to different screen sizes.
2. CSS modules can be used for styling.
3. The application is properly divided into components and files.
4. The code of the application follows a consistent style.
