interface IError {
  property: string;
  message: string;
}

class UserCredential {
  id: string;
  title?: string;
  username?: string;
  password?: string;
  app?: string;
  note?: string;
  editMode: boolean;
  constructor(
    title?: string,
    username?: string,
    password?: string,
    app?: string,
    note?: string
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.username = username;
    this.password = password;
    this.app = app;
    this.note = note;
    this.editMode = false;
  }

  validate() {
    const errors: IError[] = [];

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

const credentials: UserCredential[] = [];

// Credential Input Form
const formInput = isNotNullOrEmpty(
  document.querySelector<HTMLFormElement>("#credential-input-form")
);
const titleInput = isNotNullOrEmpty(
  document.querySelector<HTMLInputElement>("#title-input")
);
const usernameInput = isNotNullOrEmpty(
  document.querySelector<HTMLInputElement>("#username-input")
);
const passwordInput = isNotNullOrEmpty(
  document.querySelector<HTMLInputElement>("#password-input")
);
const appInput = isNotNullOrEmpty(
  document.querySelector<HTMLInputElement>("#app-input")
);
const noteInput = isNotNullOrEmpty(
  document.querySelector<HTMLInputElement>("#note-input")
);

// Credential Display List
const list = isNotNullOrEmpty(
  document.querySelector<HTMLUListElement>("#list-output")
);

// Form Handler
formInput.addEventListener("submit", (e) => {
  e.preventDefault();

  const newCredential = new UserCredential(
    titleInput.value,
    usernameInput.value,
    passwordInput.value,
    appInput.value,
    noteInput.value
  );
  const validation = newCredential.validate();
  if (!validation.success) {
    displayErrors(validation.errors);
    return;
  }

  addCredential(newCredential);
  clearInputFields();
});

// Helper Functions
function addCredential(credential: UserCredential) {
  credentials.push(credential);
  // Access the template.
  const template = document.querySelector<HTMLTemplateElement>(
    "#list-item-template"
  );
  if (!template) return;

  // Clone the template content.
  const content = document.importNode(template.content, true);

  // Access the cloned content elements.
  const containerDiv = isNotNullOrEmpty(
    content.querySelector<HTMLDivElement>("[data-credential-id]")
  );
  const credentialTitle = isNotNullOrEmpty(
    content.querySelector<HTMLInputElement>("[data-title]")
  );
  const credentialUsername = isNotNullOrEmpty(
    content.querySelector<HTMLInputElement>("[data-username]")
  );
  const credentialPassword = isNotNullOrEmpty(
    content.querySelector<HTMLInputElement>("[data-password]")
  );
  const credentialApp = isNotNullOrEmpty(
    content.querySelector<HTMLInputElement>("[data-app]")
  );
  const credentialNote = isNotNullOrEmpty(
    content.querySelector<HTMLInputElement>("[data-note]")
  );

  // Modify the contents.
  containerDiv.dataset.credentialId = credential.id;
  credentialTitle.value = credential.title || "";
  credentialUsername.value = credential.username || "";
  credentialPassword.value = credential.password || "";
  credentialApp.value = credential.app || "";
  credentialNote.value = credential.note || "";

  // Add content to list.
  list?.append(content);
}

function displayErrors(errors: IError[]) {
  if (errors) {
    // TODO: Display error message.
  }
}

function clearInputFields() {
  titleInput!.value = "";
  usernameInput!.value = "";
  passwordInput!.value = "";
  appInput!.value = "";
  noteInput!.value = "";
}

// Utitlity Functions
function nullOrEmpty(...args: any[]) {
  if (!args) return true;

  return args.some((e) => {
    if (!e) {
      return true;
    }
  });
}

function isNotNullOrEmpty<T>(param: T) {
  if (param) return param;
  else {
    const message =
      "Operation Error: Unable to proceed due absence of resource.";
    const err = new Error(message);
    console.error(err);
    throw err;
  }
}
