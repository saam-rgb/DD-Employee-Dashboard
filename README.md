# DealsDray Employee Dashboard

## Task
To create MERN Employee Dashboard 
1. Server Side APIs (Node.js)
2. 2 Tables (**Login and Employee**)
3. Validation (JQuery)

## Database
### LoginDB
1. S.No
2. User name(textbox)
3. Password(textbox, type password)

### EmployeeDB
1. ID
2. Name(textbox)
3. Email(textbox, email validation)
4. Mobile number(textbox, number validation)
5. Designation(dropdown)
6. Gender(radio)
7. Course(checkbox)
8. Image(file upload)

## Page (requirements and validations)
### Login
 - [ ] Validation on textbox (required, email, passwords)
 - [ ] If login(yes) go to dashboard else alert(email or pass is incorrect)
 - [ ] Manage username on dashboard by **Local Storage** or **Cookies**

### CreateUser & UpdateUser
 - [ ] Validation on textbox (required)
 - [ ] Email validation
 - [ ] Numerals validation
 - [ ] Email duplicate check
 - [ ] Upload only **.jpg/.png** file format

### DisplayUser
 - [ ] Search filter
 - [ ] Pagination
 - [ ] Active/ Deactive
 - [ ] Edit and Delete
 - [ ] **Sorting** on ID/Name/Email/Date

## Routes Planned
 1. /login
 2. /
 3. /create-user
 4. /user-list
 5. /edit-user
