
# Utkristi Notes Management Application

This is a **Notes Management Application** that allows users to create, edit, delete, and categorize notes. 
The application is built using **React.js** and features a clean and responsive design.

## Features

- **Create Notes**: Users can add new notes with a title, description, and category.
- **Edit Notes**: Modify existing notes to update content.
- **Delete Notes**: Remove unwanted notes from the list.
- **Search and Filter**: Search notes by title and filter them by categories such as Work, Personal, and Others.
- **Rich Text Editor**: A blogging-style text editor to format note descriptions with bold, italic, and headings.
- **Responsive Design**: Works seamlessly across devices of all sizes.
- **Easy Navigation**: A navbar with search, filters, and a quick link to create a note.

## Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js (API integration)
- **Database**: MongoDB (for storing notes)
- **Additional Libraries**:
  - React-Quill (for rich text editor)
  - Heroicons (for icons)
  - Axios (for API requests)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/notes-management-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd notes-management-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at `http://localhost:3000`.

## Folder Structure

- **src/components**: Contains reusable components like `NoteList`, `Navbar`, `SearchBar`, etc.
- **src/pages**: Includes page components like `HomePage` and `NoteForm`.
- **src/styles**: Custom stylesheets for the application.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

## License

This project is licensed under the MIT License.
