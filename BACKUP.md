# Add Credentials

```
function addCredential(credential: UserCredential) {
credentials.push(newCredential);
  const item = document.createElement("li");
  const { titleOutput, usernameOutput, passwordOutput, appOutput, noteOutput } =
    createCredentialDisplayFields(credential);

  const button = document.createElement("button");
  button.textContent = "Edit";
  button.addEventListener("click", (e) => {});

  item.append(
    titleOutput,
    usernameOutput,
    passwordOutput,
    appOutput,
    noteOutput,
    button
  );

  list?.append(item);
}

function createCredentialDisplayFields(credential: UserCredential) {
  const titleOutput = document.createElement("input");
  const usernameOutput = document.createElement("input");
  const passwordOutput = document.createElement("input");
  passwordOutput.type = "password";
  const appOutput = document.createElement("input");
  const noteOutput = document.createElement("input");

  titleOutput.title = "credentialTitle";
  usernameOutput.title = "credentialUsername";
  passwordOutput.title = "credentialPassword";
  appOutput.title = "credentialApp";
  noteOutput.title = "credentialNote";

  titleOutput.value = credential.title!;
  usernameOutput.value = credential.username!;
  passwordOutput.value = credential.password!;
  appOutput.value = credential.app!;
  noteOutput.value = credential.note!;

  titleOutput.readOnly = true;
  usernameOutput.readOnly = true;
  passwordOutput.readOnly = true;
  appOutput.readOnly = true;
  noteOutput.readOnly = true;
  return {
    titleOutput,
    usernameOutput,
    passwordOutput,
    appOutput,
    noteOutput,
  };
}
```
