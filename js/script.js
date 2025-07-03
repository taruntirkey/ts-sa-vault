"use strict";
class UserCredential {
    constructor(title, username, password, app, note) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.username = username;
        this.password = password;
        this.app = app;
        this.note = note;
        this.editMode = false;
    }
    validate() {
        const errors = [];
        if (!this.title)
            errors.push({ property: "title", message: "Please provide a title." });
        if (!this.password)
            errors.push({
                property: "password",
                message: "Password cannot be empty.",
            });
        const success = errors.length === 0;
        return { success, errors };
    }
}
const credentials = [];
// Credential Input Form
const formInput = isNotNullOrEmpty(document.querySelector("#credential-input-form"));
const titleInput = isNotNullOrEmpty(document.querySelector("#title-input"));
const usernameInput = isNotNullOrEmpty(document.querySelector("#username-input"));
const passwordInput = isNotNullOrEmpty(document.querySelector("#password-input"));
const appInput = isNotNullOrEmpty(document.querySelector("#app-input"));
const noteInput = isNotNullOrEmpty(document.querySelector("#note-input"));
// Credential Display List
const list = isNotNullOrEmpty(document.querySelector("#list-output"));
// Form Handler
formInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const newCredential = new UserCredential(titleInput.value, usernameInput.value, passwordInput.value, appInput.value, noteInput.value);
    const validation = newCredential.validate();
    if (!validation.success) {
        displayErrors(validation.errors);
        return;
    }
    addCredential(newCredential);
    clearInputFields();
});
// Helper Functions
function addCredential(credential) {
    credentials.push(credential);
    // Access the template.
    const template = document.querySelector("#list-item-template");
    if (!template)
        return;
    // Clone the template content.
    const content = document.importNode(template.content, true);
    // Access the cloned content elements.
    const containerDiv = isNotNullOrEmpty(content.querySelector("[data-credential-id]"));
    const credentialTitle = isNotNullOrEmpty(content.querySelector("[data-title]"));
    const credentialUsername = isNotNullOrEmpty(content.querySelector("[data-username]"));
    const credentialPassword = isNotNullOrEmpty(content.querySelector("[data-password]"));
    const credentialApp = isNotNullOrEmpty(content.querySelector("[data-app]"));
    const credentialNote = isNotNullOrEmpty(content.querySelector("[data-note]"));
    // Modify the contents.
    containerDiv.dataset.credentialId = credential.id;
    credentialTitle.value = credential.title || "";
    credentialUsername.value = credential.username || "";
    credentialPassword.value = credential.password || "";
    credentialApp.value = credential.app || "";
    credentialNote.value = credential.note || "";
    // Add content to list.
    list === null || list === void 0 ? void 0 : list.append(content);
}
function displayErrors(errors) { }
function clearInputFields() {
    titleInput.value = "";
    usernameInput.value = "";
    passwordInput.value = "";
    appInput.value = "";
    noteInput.value = "";
}
// Utitlity Functions
function nullOrEmpty(...args) {
    if (!args)
        return true;
    return args.some((e) => {
        if (!e) {
            return true;
        }
    });
}
function isNotNullOrEmpty(param) {
    if (param)
        return param;
    else {
        const message = "Operation Error: Unable to proceed due absence of resource.";
        const err = new Error(message);
        console.error(err);
        throw err;
    }
}
