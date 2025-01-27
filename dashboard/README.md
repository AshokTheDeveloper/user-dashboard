# User Management Dashboard



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Components

## App Component
The App component serves as the entry point for the `User Management Dashboard` application. It is responsible for rendering the main user interface, which includes displaying a list of users, and providing features such as adding, editing, and deleting users. This component also incorporates error handling using an ErrorBoundary component to ensure smooth user experience by displaying a fallback UI in case of any errors.


```json
import "./App.css";
import UserList from "./components/UserList/UserList";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```
# UserList Component

The `UserList` component is responsible for displaying, adding, editing, and deleting user information in a dashboard format. It interacts with an API (in this case, [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) to fetch and manage user data.

## Features:
- **Fetching User Data**: The component fetches a paginated list of users from the JSONPlaceholder API and displays it in a table format.
- **Add User**: Users can be added to the list through a form.
- **Edit User**: Existing users can be edited by clicking an "Edit" button.
- **Delete User**: Users can be deleted from the list.
- **Pagination**: The list of users is paginated to handle large datasets.
- **Error Handling**: The component displays error messages in case of any issues with the API requests.

## Key Methods:
- **`generateApiUrl(path = "", params = "")`**: Generates the full API URL for fetching, adding, editing, or deleting user data.
- **`fetchApi(url, method, body = null)`**: Performs the actual API call using the Fetch API.
- **`componentDidMount()`**: Fetches the initial user data when the component is mounted.
- **`convertData(resObj)`**: Converts the raw data from the API into a simplified format suitable for display.
- **`getUsers()`**: Fetches the list of users from the API and updates the state.
- **`handleDeleteUser(id)`**: Deletes a user by its `id` and updates the state.
- **`fetchUserData(id)`**: Fetches the user data by `id` to display in the edit form.
- **`handleEditUser(id)`**: Triggers the display of the form to edit a user.
- **`handleUpdateUser(user)`**: Sends the updated user data to the API and updates the state.
- **`handleAddUser(user)`**: Sends the new user data to the API and updates the state.
- **`handleShowFormToggle()`**: Toggles the visibility of the user form for adding or editing users.
- **`handlePageChange(newPage)`**: Handles page change for pagination.
- **`handleCloseErrorAlert()`**: Closes the error alert.

## State Management:
- **`userData`**: Holds the list of users.
- **`formData`**: Holds the user data to be edited (if any).
- **`showForm`**: A boolean indicating whether the user form is visible.
- **`error`**: Holds the error message if the API call fails.
- **`currentPage`**: Tracks the current page for pagination.
- **`usersPerPage`**: Specifies how many users should be displayed per page.
- **`totalUsers`**: Total number of users available in the API (for pagination).

## Components:
- **`UserItem`**: Displays individual user information in a list item and provides edit and delete buttons.
- **`UserForm`**: A form used to add or edit user details.
- **`Pagination`**: Handles the pagination of the user list based on the current page and total number of pages.

## Error Handling:
If an error occurs during any API request (fetch, add, update, delete), an error message will be displayed in an alert box with an option to close the alert.

## Example Usage:
- When the component is mounted, it fetches a paginated list of users from the API and displays them.
- Users can click "Add User" to open a form for adding a new user.
- Users can click "Edit" next to a user to open the form with the user’s details pre-filled for editing.
- Users can click "Delete" to remove a user from the list.

## Styling:
The component uses `UserList.css` for styling the user dashboard, the list of users, and the form elements.

The UserList component is responsible for displaying, adding, editing, and deleting user information in a dashboard format. It interacts with an API `(in this case, JSONPlaceholder)` to fetch and manage user data.



# UserItem Component

The `UserItem` component is responsible for displaying the details of an individual user in a list format. It also provides buttons to edit or delete the user.

## Features:
- **Display User Information**: The component displays the details of a user, such as their ID, first name, last name, email, and department.
- **Edit User**: Provides an "Edit" button to open the user edit form.
- **Delete User**: Provides a "Delete" button to remove the user from the list.

## Key Methods:
- **`handleDelete()`**: Calls the `onDeleteUser` function passed from the parent component to delete the user by their ID.
- **`onEdit()`**: Calls the `onEditUser` function passed from the parent component to edit the user by their ID.

## Props:
- **`userDetails`**: An object containing the user's information (id, firstName, lastName, email, department).
- **`onDeleteUser`**: A function passed from the parent component to delete the user.
- **`onEditUser`**: A function passed from the parent component to edit the user.

## Example Usage:
```jsx
<UserItem
  userDetails={user}
  onDeleteUser={handleDeleteUser}
  onEditUser={handleEditUser}
/>
```


# UserForm Component

The `UserForm` component is a form used for adding or editing user details. It allows users to input and submit data such as ID, first name, last name, email, and department. The form handles form validation, user input, and submission.

## Features:
- **Input Fields**: Provides input fields for the user’s ID, first name, last name, email, and department.
- **Form Validation**: Ensures the form is valid before submitting. It checks that the first name, last name, and department fields are not empty, and validates the email format.
- **Submit User**: Submits the user details via a callback function passed as a prop (`onSubmit`).
- **Close Form**: Closes the form via a callback function passed as a prop (`onClose`).

## Key Methods:
- **`handleChange(event)`**: Updates the form state with the value from the input fields.
- **`validateForm()`**: Validates the form to ensure all required fields are filled and the email is correctly formatted.
- **`handleSubmit(event)`**: Handles form submission, validates the form, and calls the `onSubmit` function passed from the parent component if the form is valid.

## Props:
- **`user`**: The user object passed from the parent component, containing the user's information. This prop is used for pre-populating the form when editing an existing user.
- **`onSubmit`**: A function passed from the parent component to handle the form submission.
- **`onClose`**: A function passed from the parent component to close the form.

## Example Usage:
```jsx
<UserForm
  user={currentUser}
  onSubmit={handleFormSubmit}
  onClose={closeForm}
/>
```


# Pagination Component

The `Pagination` component provides navigation controls for moving through pages of content. It displays the current page and allows users to navigate to the previous or next page, based on the `currentPage` and `totalPages` props.

## Features:
- **Previous Button**: Navigates to the previous page, disabled when on the first page.
- **Next Button**: Navigates to the next page, disabled when on the last page.
- **Current Page Display**: Displays the current page number and the total number of pages.
- **Page Navigation**: Allows moving between pages through `onPageChange` callback.

## Key Methods:
- **`handlePrev()`**: Handles the click event for the previous button, ensuring that the current page is greater than 1 before navigating.
- **`handleNext()`**: Handles the click event for the next button, ensuring that the current page is less than the total pages before navigating.

## Props:
- **`currentPage`**: The current page number to be displayed and used for navigation.
- **`totalPages`**: The total number of pages available.
- **`onPageChange`**: A function passed from the parent component to update the current page when the user navigates to a different page.

## Example Usage:
```jsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

# ErrorBoundary Component

The `ErrorBoundary` component is designed to catch JavaScript errors anywhere in the child component tree, log those errors, and display a fallback UI instead of crashing the application. This component helps to gracefully handle errors and prevent the entire app from crashing due to a single failure.

## Features:
- **Error Catching**: Catches JavaScript errors in the child components and updates the state to trigger a fallback UI.
- **Error Logging**: Logs the error and error information to the console for debugging purposes.
- **Fallback UI**: Displays a user-friendly error message when an error occurs in a child component.
- **Error Message Display**: Shows a specific error message to the user, with a generic fallback message if no message is provided.

## Key Methods:
- **`getDerivedStateFromError(error)`**: Static lifecycle method that updates the state when an error is encountered. Sets the `hasError` flag to true and stores the error message.
- **`componentDidCatch(error, errorInfo)`**: Lifecycle method that logs error details to the console for debugging.
- **`render()`**: Renders the error message or the wrapped child components based on the `hasError` state.

## Example Usage:
Wrap the components that might throw errors inside the `ErrorBoundary` component.

```jsx
<ErrorBoundary>
  <SomeComponent />
</ErrorBoundary>
```


## Reflection on Development Process

### Challenges Faced:
1. **State Management Across Multiple Components**:
   - Managing state between multiple components (like `UserList`, `UserForm`, and `Pagination`) was complex. Passing data back and forth and ensuring updates triggered re-renders in the right places required careful planning. Effective use of props was necessary to handle state flow, but it was important to avoid unnecessary renders in unrelated components.

2. **Error Handling and Edge Cases**:
   - Error handling, especially when interacting with external APIs, was challenging. APIs can be slow or return data in unexpected formats. Although the `ErrorBoundary` component helps manage this, other edge cases, like timeouts or malformed responses, required attention. Additionally, handling user input validation to avoid issues with the API was crucial.

3. **Pagination Implementation**:
   - Pagination with an external API (like `JSONPlaceholder`) introduced challenges. Managing page state, ensuring the correct data was fetched, and building an intuitive user interface for navigating pages added complexity to the project.

4. **Form Validation and Submission**:
   - Creating a form that handles both adding and editing users while ensuring proper validation was a challenge. Validating fields (like email) and managing form state, particularly when switching between "Add" and "Edit" modes, required a lot of attention.

5. **UI Consistency**:
   - Maintaining a consistent UI across reusable components (e.g., `UserItem`, `Pagination`) while ensuring all components communicated properly was essential. Styling and layout consistency also had to be considered to provide a cohesive user experience.

### Potential Improvements:

1. **Error Handling Enhancements**:
   - Expanding error handling to support retries for failed API requests or handle different


2. **API Abstraction**:
   - The current API calls are directly handled in components. It would be beneficial to abstract the API logic into a separate module or service, making the code cleaner and more maintainable, especially as the project grows.

3. **Advanced Pagination and Sorting**:
   - Enhancing the pagination component

4. **Mobile Responsiveness**:
   - While the UI is responsive, further optimization for mobile users would be beneficial.
